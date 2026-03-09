window.MiniCraft = window.MiniCraft || {};

MiniCraft.worldgen = {
  generate(seed) {
    const { WORLD_W, WORLD_H } = MiniCraft.CONFIG;
    const { clamp, mulberry32 } = MiniCraft.utils;
    const rand = mulberry32(seed);

    const world = Array.from({ length: WORLD_H }, () => Array.from({ length: WORLD_W }, () => 0));

    const heights = [];
    let h = Math.floor(WORLD_H * 0.45 + rand() * 8);
    for (let x = 0; x < WORLD_W; x++) {
      h += Math.floor((rand() - 0.5) * 5);
      h = clamp(h, Math.floor(WORLD_H * 0.25), Math.floor(WORLD_H * 0.65));
      heights.push(h);
    }

    for (let x = 0; x < WORLD_W; x++) {
      const groundY = heights[x];
      for (let y = groundY; y < WORLD_H; y++) {
        if (y === groundY) world[y][x] = 1;
        else if (y < groundY + 5) world[y][x] = 2;
        else world[y][x] = 3;
      }
    }

    const waterLevel = Math.floor(WORLD_H * 0.55);
    for (let x = 0; x < WORLD_W; x++) {
      for (let y = heights[x]; y <= waterLevel; y++) {
        if (y >= 0 && y < WORLD_H) if (world[y][x] === 0) world[y][x] = 4;
      }
    }

    for (let x = 2; x < WORLD_W - 2; x++) {
      if (rand() < 0.08) {
        const y = heights[x];
        if (y > 0 && world[y][x] === 1 && y < waterLevel - 2) {
          const trunkH = 2 + Math.floor(rand() * 3);
          for (let i = 1; i <= trunkH; i++) if (y - i >= 0) world[y - i][x] = 5;
          if (rand() < 0.25 && y - trunkH - 1 >= 0) world[y - trunkH - 1][x] = 6;
        }
      }
    }

    return { world, heights, waterLevel };
  }
};