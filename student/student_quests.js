// STUDENT MISSION #3:
// Write a quest that updates on screen.
// We'll count how many Gold blocks exist in the world.
// Goal: place at least 5 Gold blocks.

function countBlocks(blockId) {
  const built = MiniCraft.state.playerBuilt;
  let count = 0;

  for (const row of built) {
    for (const cell of row) {
      if (cell === blockId) {
        count++;
      }
    }
  }

  return count;
}

function makeQuestLine(label, current, goal) {
  if (current >= goal || current === true) {
    return `✅ ${label}`;
  } else {
    if (current === false) {
      return `⬜ ${label}`;
    }
    else {
      return `⬜ ${label} (${current}/${goal})`;
    }
  }
}

function hasBridgePattern() {
  const built = MiniCraft.state.playerBuilt;
  const WORLD_H = built.length;
  const WORLD_W = built[0].length;

  for (let y = 0; y < WORLD_H; y++) {
    for (let x = 0; x <= WORLD_W - 5; x++) {
      const slice = [
        built[y][x],
        built[y][x + 1],
        built[y][x + 2],
        built[y][x + 3],
        built[y][x + 4]
      ];

      let stoneCount = 0;
      let woodCount = 0;

      for (const block of slice) {
        if (block === 3) stoneCount++; // Stone
        if (block === 5) woodCount++;  // Wood
      }

      if (stoneCount === 2 && woodCount === 3) {
        return true;
      }
    }
  }

  return false;
}

function updateQuest() {
  const gold = countBlocks(7);
  const wood = countBlocks(5);
  const bridgeBuilt = hasBridgePattern();

  const quests = [
    makeQuestLine("Place 3 wood blocks", wood, 3),
    makeQuestLine("Place 5 gold blocks", gold, 5),
    makeQuestLine("Build a bridge: 2 stone + 3 wood in a row", bridgeBuilt)
  ];

  MiniCraft.ui.setQuestList(quests);
}

// Hook into the engine:
MiniCraft.studentHooks.onNewWorld = updateQuest;
MiniCraft.studentHooks.onWorldChanged = updateQuest;
MiniCraft.studentHooks.onLoaded = updateQuest;

// Run once at startup (boot happens after this file loads)
setTimeout(updateQuest, 0);