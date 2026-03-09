window.MiniCraft = window.MiniCraft || {};

MiniCraft.ui = {
  canvas: null,
  ctx: null,

  init() {
    this.canvas = document.getElementById("game");
    this.ctx = this.canvas.getContext("2d");

    this.statusEl = document.getElementById("status");
    this.hotbarEl = document.getElementById("hotbar");
    this.helpEl = document.getElementById("help");
    this.questChip = document.getElementById("questChip");

    document.getElementById("closeHelp").addEventListener("click", () => this.toggleHelp(false));
    this.helpEl.addEventListener("click", (e) => { if (e.target === this.helpEl) this.toggleHelp(false); });

    document.getElementById("saveBtn").addEventListener("click", () => MiniCraft.saveLoad.save());
    document.getElementById("loadBtn").addEventListener("click", () => MiniCraft.saveLoad.load());
    document.getElementById("newBtn").addEventListener("click", () => MiniCraft.resetWorld());
  },

  toggleHelp(force) {
    const show = typeof force === "boolean" ? force : (this.helpEl.style.display !== "grid");
    this.helpEl.style.display = show ? "grid" : "none";
  },

  isHelpOpen() { return this.helpEl.style.display === "grid"; },

  setStatus(msg) {
    const st = MiniCraft.state;
    st.statusMsg = msg;
    st.statusTimer = 120;
    this.statusEl.textContent = msg;
  },

  setQuest(text) {
    MiniCraft.state.questText = text;
    this.questChip.textContent = text;
  },

  renderHotbar() {
    const st = MiniCraft.state;
    const hotbar = MiniCraft.blocks.hotbar;

    this.hotbarEl.innerHTML = "";
    hotbar.forEach((id, i) => {
      const slot = document.createElement("div");
      slot.className = "slot" + (i === st.selectedIndex ? " sel" : "");

      const sq = document.createElement("div");
      sq.style.width = "28px";
      sq.style.height = "28px";
      sq.style.borderRadius = "10px";
      sq.style.background = MiniCraft.blocks.get(id).color;
      sq.style.boxShadow = "inset 0 0 0 1px rgba(255,255,255,0.12)";
      slot.appendChild(sq);

      const num = document.createElement("div");
      num.className = "num";
      num.textContent = (i+1);
      slot.appendChild(num);

      const name = document.createElement("div");
      name.className = "name";
      name.textContent = MiniCraft.blocks.get(id).name;
      slot.appendChild(name);

      slot.addEventListener("click", () => {
        st.selectedIndex = i;
        this.renderHotbar();
      });

      this.hotbarEl.appendChild(slot);
    });
  },
};