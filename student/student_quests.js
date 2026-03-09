// STUDENT MISSION #3:
// Write a quest that updates on screen.
// We'll count how many Gold blocks exist in the world.
// Goal: place at least 5 Gold blocks.

function countBlocks(blockId) {
  const world = MiniCraft.state.world;
  let count = 0;
  for (const row of world) for (const cell of row) if (cell === blockId) count++;
  return count;
}

function updateQuest() {
  const gold = countBlocks(7);
  if (gold >= 5) MiniCraft.ui.setQuest("Quest: ✅ Gold builder! (5+ Gold blocks)");
  else MiniCraft.ui.setQuest(`Quest: Place 5 Gold blocks (${gold}/5)`);
}

// Hook into the engine:
MiniCraft.studentHooks.onNewWorld = updateQuest;
MiniCraft.studentHooks.onWorldChanged = updateQuest;
MiniCraft.studentHooks.onLoaded = updateQuest;

// Run once at startup (boot happens after this file loads)
setTimeout(updateQuest, 0);