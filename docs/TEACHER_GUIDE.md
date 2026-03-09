# MiniCraft Coding Lesson
## Instructor Teaching Guide + Script

**Audience:** Ages 8–13  
**Duration:** 75–90 minutes

This lesson introduces students to programming by letting them **modify a small game engine**.

Students will:
- Add new blocks
- Modify quests
- Test their changes in real time

The goal is to introduce **basic programming logic** without overwhelming students with complex engine code.

---

# Lesson Structure

| Section | Time | Goal |
|---|---:|---|
| Intro | 5 min | Hook interest |
| Controls + play | 5 min | Understand mechanics |
| Code structure | 10 min | Understand engine vs mods |
| Blocks lesson | 20 min | Learn objects |
| Quest lesson | 20 min | Learn logic |
| Challenges | 15 min | Creativity |
| Share + wrap | 10 min | Reinforce learning |

---

# Part 1 — Opening Hook

**Instructor says:**

> Today you’re going to do something most people don’t realize is possible.  
> You’re going to **change how a video game works by editing code**.

Open the game.

Demonstrate:
- Move with **arrow keys**
- Place blocks with **WASD**
- Break blocks with **Shift + WASD**

Explain:

Movement and building are **separate systems**.

- Movement = navigation
- WASD = building tools

This makes the game easier to control and easier to understand.

---

# Part 2 — Let Them Play First

Have students open `index.html`.

Tell them:

> Don’t worry about coding yet. Just explore.

Students should try:
- moving around
- placing blocks
- breaking blocks
- switching hotbar blocks

Allow about **3 minutes** of exploration.

This builds curiosity before introducing code.

---

# Part 3 — Show the Code Structure

Open the project folder.

Explain the layout:

```text
index.html
css/
lib/
student/
```

## The Engine

```text
lib/
```

Explain:

This contains the **game engine**.

It handles:
- rendering
- movement
- saving worlds
- input handling
- game rules

**Instructor explanation:**

> Real game engines can contain hundreds of thousands of lines of code.  
> Today we only need to understand a tiny part of it.

## Student Mod Files

Open:

```text
student/student_blocks.js
student/student_quests.js
```

Explain:

These are the files students will edit.

They control:
- new blocks
- game goals
- special rules

**Instructor line:**

> These files are like **mod tools** used by real game developers.

---

# Part 4 — First Coding Lesson: Blocks

Open:

```text
student/student_blocks.js
```

Explain that a block is defined using a **JavaScript object**.

Example:

```javascript
MiniCraft.blocks.defs[7] = {
  name: "Gold",
  solid: true,
  color: "#f1c40f"
};
```

Break it down.

## Block ID

```text
7
```

Every block has a number.

The engine uses this number internally.

## Name

```javascript
name: "Gold"
```

Human-readable label.

## Solid

```javascript
solid: true
```

Controls collision.

If `false`, the player can walk through it.

Examples:

Solid blocks:
- stone
- wood
- dirt

Non-solid blocks:
- flowers
- torches
- grass

## Color

```javascript
color: "#f1c40f"
```

Defines the block appearance.

This uses a **hex color code**.

# Adding the Block to the Hotbar

Students must also add:

```javascript
MiniCraft.blocks.hotbar.push(7);
```

Explain:

This tells the game to add the block to the **player's inventory bar**.

Otherwise the block exists but cannot be placed.

# Exercise — Create a Block

Students add their own block.

Example:

```javascript
MiniCraft.blocks.defs[8] = {
  name: "Crystal",
  solid: true,
  color: "#8e44ad"
};

MiniCraft.blocks.hotbar.push(8);
```

Reload the page to test.

Students should see their block appear in the hotbar.

**Instructor reminder:**

> Change something and reload the page to see the result.

---

# Part 5 — Explain Game Logic

Open:

```text
student/student_quests.js
```

Explain:

A quest is just **logic that checks the game state**.

Example question the game asks:

> Has the player placed 5 stone blocks yet?

# Important Concept

Quests count **blocks the player placed**, not blocks that already existed.

Otherwise the quest would complete instantly.

**Instructor analogy:**

> Imagine Minecraft asking you to place 5 trees when the map already has 1,000 trees.

The quest would be pointless.

# Counting Blocks

Example logic:

```javascript
function countPlacedBlocks(blockId) {
  const built = MiniCraft.state.playerBuilt;
  let count = 0;

  for (const row of built) {
    for (const cell of row) {
      if (cell === blockId) count++;
    }
  }

  return count;
}
```

Explain visually:

The game scans the grid of blocks.

If a block matches the requested type, the counter increases.

---

# Part 6 — Quest Messages

Example quest display:

```text
⬜ Place 5 stone blocks (2/5)
```

When completed:

```text
✅ Place 5 stone blocks (5/5)
```

Explain the condition:

```javascript
if (current >= goal)
```

Introduce the programming concept:

**Conditional logic**

The game checks whether a goal has been reached.

---

# Part 7 — Pattern Quests (Bridge Example)

Now introduce something more advanced.

A **pattern quest**.

Example:

Build a bridge using **2 stone blocks and 3 wood blocks next to each other**.

Example row:

```text
stone wood wood wood stone
```

Explain:

Instead of counting blocks anywhere, the game searches for a **pattern of blocks**.

**Instructor explanation:**

> The game checks small groups of blocks and asks:  
> "Does this group match the bridge pattern?"

Pattern detection is used in many puzzle games.

---

# Part 8 — Student Quest Challenge

Students modify or add quests.

Ideas:
- Place 5 crystals
- Place 10 dirt blocks
- Build a stone platform
- Build a wood tower
- Build a bridge pattern

**Instructor reminder:**

> Game design is deciding **what the player should try to do**.

---

# Part 9 — Debugging

Explain the most important programming rule:

> If the program breaks, that means you are learning.

Common mistakes:
- missing commas
- missing braces
- incorrect block IDs
- typos in `MiniCraft`

Students should **reload the page after every change**.

---

# Part 10 — Show and Tell

Invite students to show:
- their custom block
- their quest
- something interesting they built

Encourage creativity.

---

# Final Wrap-Up

**Instructor closing:**

> Today you did something real programmers do every day.  
> You changed a game by editing code.

Students used:
- objects
- loops
- conditions
- functions
- modular code

These are **real programming concepts**.

---

# Optional Challenges

For fast students:
- Create a glowing block
- Add a second quest
- Create a new building pattern
- Make a block that is not solid
- Create a torch that lights nearby blocks

---

# Instructor Cheat Sheet

## Student Files

```text
student_blocks.js
student_quests.js
```

## Controls

```text
Move: Arrow Keys
Place: WASD
Break: Shift + WASD
Hotbar: 1–8
Help: H
```

## Core Programming Concepts

```text
Objects
Loops
Conditions
Game State
Modding
```

---

# Teaching Philosophy

This lesson focuses on **experimentation over memorization**.

Students should feel comfortable:
- changing code
- testing ideas
- making mistakes
- discovering results

**Instructor phrase to repeat:**

> Every change you make in code teaches the game a new rule.
