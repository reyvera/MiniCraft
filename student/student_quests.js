// STUDENT MISSION #3:
// Write a quest that updates on screen.
// We'll count how many Gold blocks exist in the world.
// Goal: place at least 5 Gold blocks.

function countBlocks(blockId) {
  const world = MiniCraft.state.playerBuilt;
  let count = 0;

  for (const row of world) {
    for (const cell of row) {
      if (cell === blockId) {
        count++;
      }
    }
  }

  return count;
}

function makeQuestLine(label, current, goal) {
  if (current >= goal) {
    return `✅ ${label} (${current}/${goal})`;
  } else {
    return `⬜ ${label} (${current}/${goal})`;
  }
}

function updateQuest() {
  const gold = countBlocks(7);
  const wood = countBlocks(5);
  
  const quests = [
    makeQuestLine("Place 3 wood blocks", wood, 3),
    makeQuestLine("Place 5 gold blocks", gold, 5)
  ];

  MiniCraft.ui.setQuestList(quests);
}

// Hook into the engine:
MiniCraft.studentHooks.onNewWorld = updateQuest;
MiniCraft.studentHooks.onWorldChanged = updateQuest;
MiniCraft.studentHooks.onLoaded = updateQuest;

// Run once at startup (boot happens after this file loads)
setTimeout(updateQuest, 0);