window.MiniCraft = window.MiniCraft || {};

MiniCraft.rules = {
  isAdjacentToPlayer(tx, ty) {
    const p = MiniCraft.state.player;
    const dx = Math.abs(tx - p.x);
    const dy = Math.abs(ty - p.y);
    return (dx + dy) === 1;
  },

  screenToWorldTile(evt) {
    const { TILE } = MiniCraft.CONFIG;
    const st = MiniCraft.state;
    const canvas = MiniCraft.ui.canvas;
    const rect = canvas.getBoundingClientRect();

    const mx = (evt.clientX - rect.left) * (canvas.width / rect.width);
    const my = (evt.clientY - rect.top) * (canvas.height / rect.height);

    const sx = Math.floor(mx / TILE);
    const sy = Math.floor(my / TILE);

    const wx = sx + st.camera.x;
    const wy = sy + st.camera.y;
    return { wx, wy };
  },

  editBlockAt(wx, wy, mode = "place") {
    const st = MiniCraft.state;
    const { WORLD_W, WORLD_H } = MiniCraft.CONFIG;

    if (wx < 0 || wx >= WORLD_W || wy < 0 || wy >= WORLD_H) return;
    if (wx === st.player.x && wy === st.player.y) return;

    if (!this.isAdjacentToPlayer(wx, wy)) {
      MiniCraft.ui.setStatus("Too far! You can only edit blocks next to you.");
      return;
    }

    if (mode === "break") {
      st.world[wy][wx] = 0;
      st.playerBuilt[wy][wx] = 0;
      MiniCraft.ui.setStatus("Block broken.");
    } else {
      const id = MiniCraft.blocks.hotbar[st.selectedIndex];
      st.world[wy][wx] = id;
      st.playerBuilt[wy][wx] = id;
      MiniCraft.ui.setStatus(`Placed ${MiniCraft.blocks.get(id).name}.`);
    }

    MiniCraft.studentHooks.onWorldChanged?.();
  },

  editBlockRelative(dx, dy, mode = "place") {
    const st = MiniCraft.state;
    const wx = st.player.x + dx;
    const wy = st.player.y + dy;
    this.editBlockAt(wx, wy, mode);
  },

  onClick(evt) {
    if (MiniCraft.ui.isHelpOpen()) return;

    const { wx, wy } = this.screenToWorldTile(evt);
    const mode = evt.shiftKey ? "break" : "place";
    this.editBlockAt(wx, wy, mode);
  },
};