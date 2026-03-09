window.MiniCraft = window.MiniCraft || {};

MiniCraft.input = {
  init(canvas) {
    const st = MiniCraft.state;
    const { clamp } = MiniCraft.utils;

    window.addEventListener("keydown", (e) => {
      const k = e.key.toLowerCase();
      st.keys.add(k);

      if ("12345678".includes(e.key)) {
        st.selectedIndex = clamp(Number(e.key) - 1, 0, MiniCraft.blocks.hotbar.length - 1);
        MiniCraft.ui.renderHotbar();
      }

      if (k === "h") MiniCraft.ui.toggleHelp();

      if (["arrowup","arrowdown","arrowleft","arrowright"," "].includes(k)) e.preventDefault();
    }, { passive:false });

    window.addEventListener("keyup", (e) => st.keys.delete(e.key.toLowerCase()));

    canvas.addEventListener("click", (evt) => MiniCraft.rules.onClick(evt));
  },
};