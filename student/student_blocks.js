// STUDENT MISSION #1:
// Add a new block!
// Pick a new ID number (7, 8, 9...) and give it a name + color.
// solid: true means you can't walk through it.

MiniCraft.blocks.defs[7] = {
  name: "Gold",
  solid: true,
  color: "#f1c40f"
};

MiniCraft.blocks.defs[8] = {
  name: "Obsidian",
  solid: true,
  color: "#330000"
};

MiniCraft.blocks.defs[9] = {
  name: "Tree Trunk",
  solid: true,
  color: "#492f2f"
};

MiniCraft.blocks.defs[11] = {
  name: "leaves/bush",
  solid: false,
  color: "#3ea148"
};

MiniCraft.blocks.defs[10] = {
  name: "Diamand",
  solid: true,
  color: "#09f1d6"
};
// STUDENT MISSION #2:
MiniCraft.blocks.defs[12] = {
  name: "Lava",
  solid: false,
  color: "#f19409"
};
// Put your new block in the hotbar.
MiniCraft.blocks.defs[13] = {
  name: "Cobblestone",
  solid: true,
  color: "#887b68"
};
// Hotbar can be 8 items max for this lesson.
MiniCraft.blocks.hotbar = [1,2,3,4,5,6,7,8,9,10,11,12,13];