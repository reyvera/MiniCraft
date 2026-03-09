window.MiniCraft = window.MiniCraft || {};

MiniCraft.state = {
  seed: Math.floor(Math.random() * 1e9),
  world: [],
  playerBuilt: [],
  player: { x: 10, y: 10 },
  camera: { x: 0, y: 0 },
  selectedIndex: 0,
  keys: new Set(),
  statusTimer: 0,
  statusMsg: "…",
  questText: "Quest: (none)",

  isSolid(x, y) {
    const { WORLD_W, WORLD_H } = MiniCraft.CONFIG;
    if (y < 0 || y >= WORLD_H || x < 0 || x >= WORLD_W) return true;
    const id = this.world[y][x];
    return MiniCraft.blocks.get(id).solid;
  },
};