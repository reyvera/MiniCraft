// STUDENT MISSION #1:
// Add a new block!
// Pick a new ID number (7, 8, 9...) and give it a name + color.
// solid: true means you can't walk through it.

MiniCraft.blocks.defs[7] = {
  name: "Gold",
  solid: true,
  color: "#f1c40f"
};

// STUDENT MISSION #2:
// Put your new block in the hotbar.

// Hotbar can be 8 items max for this lesson.
MiniCraft.blocks.hotbar = [1,2,3,4,5,6,7];