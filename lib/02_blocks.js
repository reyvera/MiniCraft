window.MiniCraft = window.MiniCraft || {};

MiniCraft.blocks = {
  // Base set (students can add more in student/student_blocks.js)
  defs: {
    0: { name: "Air",   solid: false, color: "#161a22" },
    1: { name: "Grass", solid: true,  color: "#2ecc71" },
    2: { name: "Dirt",  solid: true,  color: "#8e5a2b" },
    3: { name: "Stone", solid: true,  color: "#9aa4ad" },
    4: { name: "Water", solid: false, color: "#2f7dd8" },
    5: { name: "Wood",  solid: true,  color: "#c49a6c" },

    // Torch is now a real light source
    6: {
      name: "Torch",
      solid: false,
      color: "#6b4b2a",
      glow: true,
      lightRadius: 4,
      lightColor: "255, 210, 100"
    },
  },

  hotbar: [1,2,3,4,5,6], // students can extend to 8 slots

  get(id) { return this.defs[id] || this.defs[0]; },
};