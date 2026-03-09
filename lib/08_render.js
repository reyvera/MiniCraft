window.MiniCraft = window.MiniCraft || {};

MiniCraft.render = {
  updateCamera() {
    const st = MiniCraft.state;
    const { clamp } = MiniCraft.utils;
    const { TILE, WORLD_W, WORLD_H, VIEW_W, VIEW_H } = MiniCraft.CONFIG;

    const tilesX = Math.floor(VIEW_W / TILE);
    const tilesY = Math.floor(VIEW_H / TILE);
    const halfX = Math.floor(tilesX / 2);
    const halfY = Math.floor(tilesY / 2);

    st.camera.x = clamp(st.player.x - halfX, 0, WORLD_W - tilesX);
    st.camera.y = clamp(st.player.y - halfY, 0, WORLD_H - tilesY);
  },

drawTorch(px, py) {
    const { TILE } = MiniCraft.CONFIG;
    const ctx = MiniCraft.ui.ctx;

    // Handle
    ctx.fillStyle = "#7a5230";
    ctx.fillRect(px + TILE * 0.43, py + TILE * 0.42, TILE * 0.14, TILE * 0.38);

    // Torch head
    ctx.fillStyle = "#d6a45d";
    ctx.fillRect(px + TILE * 0.36, py + TILE * 0.28, TILE * 0.28, TILE * 0.18);

    // Flame glow
    const gx = px + TILE * 0.5;
    const gy = py + TILE * 0.24;
    const glow = ctx.createRadialGradient(gx, gy, TILE * 0.05, gx, gy, TILE * 0.45);
    glow.addColorStop(0, "rgba(255,245,180,0.95)");
    glow.addColorStop(0.35, "rgba(255,190,80,0.75)");
    glow.addColorStop(0.7, "rgba(255,120,30,0.28)");
    glow.addColorStop(1, "rgba(255,120,30,0)");

    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(gx, gy, TILE * 0.45, 0, Math.PI * 2);
    ctx.fill();

    // Flame
    ctx.fillStyle = "#ff8c2a";
    ctx.beginPath();
    ctx.moveTo(px + TILE * 0.50, py + TILE * 0.05);
    ctx.quadraticCurveTo(px + TILE * 0.68, py + TILE * 0.22, px + TILE * 0.50, py + TILE * 0.33);
    ctx.quadraticCurveTo(px + TILE * 0.32, py + TILE * 0.22, px + TILE * 0.50, py + TILE * 0.05);
    ctx.fill();

    // Inner flame
    ctx.fillStyle = "#fff2a8";
    ctx.beginPath();
    ctx.moveTo(px + TILE * 0.50, py + TILE * 0.11);
    ctx.quadraticCurveTo(px + TILE * 0.60, py + TILE * 0.22, px + TILE * 0.50, py + TILE * 0.27);
    ctx.quadraticCurveTo(px + TILE * 0.40, py + TILE * 0.22, px + TILE * 0.50, py + TILE * 0.11);
    ctx.fill();
  },

  drawTile(id, px, py) {
    const { TILE } = MiniCraft.CONFIG;
    const ctx = MiniCraft.ui.ctx;
    const b = MiniCraft.blocks.get(id);

    // Base tile
    ctx.fillStyle = b.color;
    ctx.fillRect(px, py, TILE, TILE);

    // Texture shading for normal blocks
    if (id !== 6) {
      ctx.globalAlpha = 0.18;
      ctx.fillStyle = "#000";
      ctx.fillRect(px + TILE*0.10, py + TILE*0.20, TILE*0.18, TILE*0.12);
      ctx.fillRect(px + TILE*0.60, py + TILE*0.55, TILE*0.20, TILE*0.14);
      ctx.globalAlpha = 1.0;
    }

    // Special art for torch
    if (id === 6) {
      this.drawTorch(px, py);
    }

    ctx.strokeStyle = "rgba(255,255,255,0.05)";
    ctx.strokeRect(px + 0.5, py + 0.5, TILE - 1, TILE - 1);
  },

    getLightSourcesInView() {
    const st = MiniCraft.state;
    const { VIEW_W, VIEW_H, TILE } = MiniCraft.CONFIG;

    const tilesX = Math.floor(VIEW_W / TILE);
    const tilesY = Math.floor(VIEW_H / TILE);

    const lights = [];

    for (let sy = 0; sy < tilesY; sy++) {
      const wy = sy + st.camera.y;
      for (let sx = 0; sx < tilesX; sx++) {
        const wx = sx + st.camera.x;
        const id = st.world[wy]?.[wx] ?? 0;
        const block = MiniCraft.blocks.get(id);

        if (block.lightRadius) {
          lights.push({
            x: wx,
            y: wy,
            radius: block.lightRadius,
            color: block.lightColor || "255,255,200"
          });
        }
      }
    }

    return lights;
  },

  getLightLevelAt(wx, wy, lights) {
    let brightness = 0;

    for (const light of lights) {
      const dx = wx - light.x;
      const dy = wy - light.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist <= light.radius) {
        const strength = 1 - (dist / light.radius);
        brightness = Math.max(brightness, strength);
      }
    }

    return brightness;
  },

  draw() {
    const st = MiniCraft.state;
    const { TILE, VIEW_W, VIEW_H } = MiniCraft.CONFIG;
    const ctx = MiniCraft.ui.ctx;

    const tilesX = Math.floor(VIEW_W / TILE);
    const tilesY = Math.floor(VIEW_H / TILE);

    ctx.clearRect(0, 0, VIEW_W, VIEW_H);
    ctx.fillStyle = "#0e1016";
    ctx.fillRect(0, 0, VIEW_W, VIEW_H);

    const lights = this.getLightSourcesInView();

    for (let sy = 0; sy < tilesY; sy++) {
      const wy = sy + st.camera.y;
      for (let sx = 0; sx < tilesX; sx++) {
        const wx = sx + st.camera.x;
        const id = st.world[wy]?.[wx] ?? 0;

        const px = sx * TILE;
        const py = sy * TILE;

        this.drawTile(id, px, py);

        // Darkness overlay reduced by nearby torchlight
        const light = this.getLightLevelAt(wx, wy, lights);
        const darkness = Math.max(0, 0.55 - light * 0.5);

        if (darkness > 0) {
          ctx.fillStyle = `rgba(0, 0, 0, ${darkness})`;
          ctx.fillRect(px, py, TILE, TILE);
        }
      }
    }

    // Player
    const px = (st.player.x - st.camera.x) * TILE;
    const py = (st.player.y - st.camera.y) * TILE;

    ctx.globalAlpha = 0.35;
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.ellipse(px + TILE/2, py + TILE*0.72, TILE*0.28, TILE*0.16, 0, 0, Math.PI*2);
    ctx.fill();
    ctx.globalAlpha = 1.0;

    ctx.fillStyle = "#e74c3c";
    ctx.fillRect(px + 6, py + 6, TILE - 12, TILE - 12);

    ctx.fillStyle = "rgba(255,255,255,0.85)";
    ctx.fillRect(px + TILE*0.58, py + TILE*0.33, 3, 3);

    // Edit range highlight
    ctx.globalAlpha = 0.25;
    ctx.fillStyle = "#ffffff";
    const adj = [
      {x: st.player.x+1, y: st.player.y},
      {x: st.player.x-1, y: st.player.y},
      {x: st.player.x, y: st.player.y+1},
      {x: st.player.x, y: st.player.y-1},
    ];
    for (const a of adj) {
      const ax = (a.x - st.camera.x) * TILE;
      const ay = (a.y - st.camera.y) * TILE;
      if (ax >= 0 && ay >= 0 && ax < VIEW_W && ay < VIEW_H) ctx.fillRect(ax, ay, TILE, TILE);
    }
    ctx.globalAlpha = 1.0;
  }
};