window.MiniCraft = window.MiniCraft || {};

MiniCraft.studentHooks = {}; // student files can attach callbacks here

MiniCraft.saveLoad = {
  save() {
    const st = MiniCraft.state;
    const payload = { v: 1, seed: st.seed, player: st.player, world: st.world, selectedIndex: st.selectedIndex };
    localStorage.setItem(MiniCraft.CONFIG.SAVE_KEY, JSON.stringify(payload));
    MiniCraft.ui.setStatus("Saved to this browser.");
  },

  load() {
    const raw = localStorage.getItem(MiniCraft.CONFIG.SAVE_KEY);
    if (!raw) return MiniCraft.ui.setStatus("No save found on this browser.");

    try {
      const st = MiniCraft.state;
      const payload = JSON.parse(raw);
      if (!payload || payload.v !== 1) throw new Error("Bad save");
      st.seed = payload.seed ?? st.seed;
      st.world = payload.world;
      st.player.x = payload.player?.x ?? st.player.x;
      st.player.y = payload.player?.y ?? st.player.y;
      st.selectedIndex = Math.max(0, Math.min(payload.selectedIndex ?? 0, MiniCraft.blocks.hotbar.length - 1));

      MiniCraft.render.updateCamera();
      MiniCraft.ui.renderHotbar();
      MiniCraft.ui.setStatus("Loaded save.");
      MiniCraft.studentHooks.onLoaded?.();
    } catch {
      MiniCraft.ui.setStatus("Save data was corrupted or incompatible.");
    }
  },
};

MiniCraft.resetWorld = function() {
  const st = MiniCraft.state;
  st.seed = Math.floor(Math.random() * 1e9);
  const { world, heights } = MiniCraft.worldgen.generate(st.seed);
  st.world = world;

  // spawn player safely
  st.player.x = 10;
  st.player.y = Math.max(2, (heights[st.player.x] ?? 10) - 4);
  if (st.isSolid(st.player.x, st.player.y)) st.player.y -= 2;

  MiniCraft.render.updateCamera();
  MiniCraft.ui.renderHotbar();
  MiniCraft.ui.setStatus("New world generated.");
  MiniCraft.studentHooks.onNewWorld?.();
};

MiniCraft.tryMove = function(dx, dy) {
  const st = MiniCraft.state;
  const { WORLD_W, WORLD_H } = MiniCraft.CONFIG;

  const nx = st.player.x + dx;
  const ny = st.player.y + dy;
  if (nx < 0 || nx >= WORLD_W || ny < 0 || ny >= WORLD_H) return;
  if (st.isSolid(nx, ny)) return;

  st.player.x = nx;
  st.player.y = ny;
  MiniCraft.render.updateCamera();
  MiniCraft.studentHooks.onPlayerMoved?.();
};

MiniCraft.update = function() {
  const st = MiniCraft.state;
  if (MiniCraft.ui.isHelpOpen()) return;

  // movement (simple cooldown)
  st._moveCooldown = Math.max(0, (st._moveCooldown ?? 0) - 1);

  const up    = st.keys.has("arrowup")    || st.keys.has("w");
  const down  = st.keys.has("arrowdown")  || st.keys.has("s");
  const left  = st.keys.has("arrowleft")  || st.keys.has("a");
  const right = st.keys.has("arrowright") || st.keys.has("d");

  if (st._moveCooldown === 0) {
    if (up)    { MiniCraft.tryMove(0, -1); st._moveCooldown = 7; }
    else if (down)  { MiniCraft.tryMove(0,  1); st._moveCooldown = 7; }
    else if (left)  { MiniCraft.tryMove(-1, 0); st._moveCooldown = 7; }
    else if (right) { MiniCraft.tryMove(1,  0); st._moveCooldown = 7; }
  }

  // status fallback
  if (st.statusTimer > 0) st.statusTimer--;
  if (st.statusTimer === 0) {
    const id = MiniCraft.blocks.hotbar[st.selectedIndex];
    MiniCraft.ui.statusEl.textContent = `Seed: ${st.seed} • Player: (${st.player.x}, ${st.player.y}) • Selected: ${MiniCraft.blocks.get(id).name}`;
  }

  MiniCraft.studentHooks.onTick?.();
};

MiniCraft.loop = function() {
  MiniCraft.update();
  MiniCraft.render.draw();
  requestAnimationFrame(MiniCraft.loop);
};

MiniCraft.boot = function() {
  MiniCraft.ui.init();
  MiniCraft.input.init(MiniCraft.ui.canvas);
  MiniCraft.resetWorld();
  MiniCraft.ui.setStatus("Welcome! You’re running a modular game. Edit files in student/ to mod it.");
  MiniCraft.loop();
};