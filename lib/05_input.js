window.MiniCraft = window.MiniCraft || {};

MiniCraft.input = {
  init(canvas) {
    const st = MiniCraft.state;
    const { clamp } = MiniCraft.utils;

    window.addEventListener("keydown", (e) => {
      const key = e.key;
      const lower = key.toLowerCase();

      // Hotbar selection
      if ("12345678".includes(key)) {
        st.selectedIndex = clamp(Number(key) - 1, 0, MiniCraft.blocks.hotbar.length - 1);
        MiniCraft.ui.renderHotbar();
        e.preventDefault();
        return;
      }

      // Help
      if (lower === "h") {
        MiniCraft.ui.toggleHelp();
        e.preventDefault();
        return;
      }

      // Build / break with WASD
      const dirMap = {
        w: { dx: 0, dy: -1 },
        a: { dx: -1, dy: 0 },
        s: { dx: 0, dy: 1 },
        d: { dx: 1, dy: 0 },
      };

      if (dirMap[lower]) {
        if (e.repeat) {
          e.preventDefault();
          return;
        }
      
        const { dx, dy } = dirMap[lower];
        const mode = e.shiftKey ? "break" : "place";
        MiniCraft.rules.editBlockRelative(dx, dy, mode);
        e.preventDefault();
        return;
      }

      // Movement keys: arrows only
      if (["arrowup", "arrowdown", "arrowleft", "arrowright"].includes(lower)) {
        st.keys.add(lower);
        e.preventDefault();
      }
    }, { passive: false });

    window.addEventListener("keyup", (e) => {
      const lower = e.key.toLowerCase();
      if (["arrowup", "arrowdown", "arrowleft", "arrowright"].includes(lower)) {
        st.keys.delete(lower);
      }
    });

    canvas.addEventListener("click", (evt) => MiniCraft.rules.onClick(evt));
  },
};