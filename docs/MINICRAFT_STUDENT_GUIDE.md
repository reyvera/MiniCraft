
# MiniCraft Student Guide — Full Home Walkthrough

This guide combines the **Student Guide** and the **Live Coding Walkthrough**
so you can follow the same lesson at home step‑by‑step.

You will learn how to:

- create new blocks
- add them to the hotbar
- write quests
- test your changes
- understand how the game logic works

The most important rule of programming:

**Change something → reload the game → see what happens.**

---

# MiniCraft Student Guide

## Build and Modify Your Own Game

Welcome to **MiniCraft Modding**!

You can change how the game works by editing code. This guide will help
you keep experimenting at home.

You will learn how to:

-   create new blocks
-   change how blocks behave
-   create quests
-   test your ideas

The most important rule of programming:

**Change something → reload the game → see what happens.**

------------------------------------------------------------------------

# Play and Edit MiniCraft at Home

You can find the project here:

https://github.com/reyvera/MiniCraft/tree/StartHere

This is where the game code lives.

------------------------------------------------------------------------


------------------------------------------------------------------------

# Getting the Project on Your Computer

You can download the game so you can modify it at home.

### Step 1 — Open the Project

Go to the project page:

https://github.com/reyvera/MiniCraft/tree/StartHere

### Step 2 — Download the Project

1. Click the **green "Code" button**
2. Click **Download ZIP**
3. Save the file to your computer
4. **Unzip / Extract** the folder

You should now have a folder called something like:

    MiniCraft-StartHere

------------------------------------------------------------------------

# Opening the Code in VSCode

You can edit the game using **Visual Studio Code**.

There are two options.

------------------------------------------------------------------------

# Option 1 — Open in VSCode.dev (No Install Needed)

1. Go to:

    https://vscode.dev

2. Click **Open Folder**

3. Select the **MiniCraft folder you unzipped**

VSCode will open the project in your browser.

You will see something like:

    MiniCraft/
     ├ index.html
     ├ css/
     ├ lib/
     └ student/
          ├ student_blocks.js
          └ student_quests.js

The **student folder** is where you will edit code.

------------------------------------------------------------------------

# Option 2 — Open in the VSCode App (Windows or Mac)

If you have Visual Studio Code installed:

1. Open **Visual Studio Code**
2. Click **File → Open Folder**
3. Select the **MiniCraft folder you unzipped**

The project will open and you can start editing the code.

------------------------------------------------------------------------

# Running the Game

To run the game on your computer:

1.  Unzip the folder
2.  Open

```
    index.html
```

in your browser.

------------------------------------------------------------------------

# Game Controls

Move your character

    Arrow Keys

Place blocks around you

    W A S D

Break blocks

    Shift + W A S D

Choose blocks

    1 2 3 4 5 6 7 8

Open help

    H

------------------------------------------------------------------------

# How the Game World Works

The game world is a **grid of squares**.

Each square holds one block.

Example world:

    +---+---+---+---+---+
    |   |   |   |   |   |
    +---+---+---+---+---+
    |   | P |   |   |   |
    +---+---+---+---+---+
    |   |   |   |   |   |
    +---+---+---+---+---+
    |   |   |   |   |   |
    +---+---+---+---+---+

P = Player

Example with blocks:

    +---+---+---+---+---+
    |   |   | W |   |   |
    +---+---+---+---+---+
    |   | P | S |   |   |
    +---+---+---+---+---+
    |   |   | W |   |   |
    +---+---+---+---+---+

W = Wood\
S = Stone

------------------------------------------------------------------------

# How WASD Places Blocks

          W
          ↑
          |

      A ← P → D

          |
          ↓
          S

Example:

Before

    +---+---+---+
    |   |   |   |
    +---+---+---+
    |   | P |   |
    +---+---+---+
    |   |   |   |
    +---+---+---+

Press **W**

After

    +---+---+---+
    |   | B |   |
    +---+---+---+
    |   | P |   |
    +---+---+---+
    |   |   |   |
    +---+---+---+

B = Block

------------------------------------------------------------------------

# Creating a New Block

Open

    student/student_blocks.js

Example block:

``` javascript
MiniCraft.blocks.defs[7] = {
  name: "Gold",
  solid: true,
  color: "#f1c40f"
};

MiniCraft.blocks.hotbar.push(7);
```

### Block ID

Every block must have a unique number.

Example IDs:

    8
    9
    10

### Block Name

    name: "Crystal"

### Solid

    solid: true

true = you cannot walk through it\
false = player can walk through

### Color

    color: "#8e44ad"

Example colors

    Red     #e74c3c
    Blue    #3498db
    Green   #2ecc71
    Purple  #8e44ad
    Orange  #e67e22

------------------------------------------------------------------------

# Testing Your Block

Reload the page.

Select your block with the number keys.

Try placing it and breaking it.

If it doesn't work, change the code and reload.

------------------------------------------------------------------------

# Creating a Quest

Open

    student/student_quests.js

Example quest idea

    Place 5 stone blocks

------------------------------------------------------------------------

# How the Game Counts Blocks

The computer scans the world grid.

    +---+---+---+---+
    | S |   | S |   |
    +---+---+---+---+
    |   | S |   |   |
    +---+---+---+---+
    |   |   |   | S |
    +---+---+---+---+

Scan order

    [S][ ][S][ ]
    [ ][S][ ][ ]
    [ ][ ][ ][S]

Each time it finds a block, the counter increases.

------------------------------------------------------------------------

# Pattern Quest Example (Bridge)

Some quests check **patterns** instead of totals.

Example bridge:

    +---+---+---+---+---+
    | S | W | W | W | S |
    +---+---+---+---+---+

Correct

    [S][W][W][W][S]

Incorrect

    [S][W][S][W][S]

------------------------------------------------------------------------

# Player Built Blocks

The game tracks blocks the **player placed** separately.

World map

    +---+---+---+
    | S | S | S |
    +---+---+---+
    | S | P | S |
    +---+---+---+
    | S | S | S |
    +---+---+---+

Player-built map

    +---+---+---+
    |   | W |   |
    +---+---+---+
    |   | P | W |
    +---+---+---+
    |   |   |   |
    +---+---+---+

Only player-built blocks count for quests.

------------------------------------------------------------------------

# Debugging Tip

If the game stops working:

1.  Look for missing commas
2.  Look for missing brackets
3.  Check block numbers

Example mistake

    MiniCraft.blocks.defs[8] = {
      name: "Crystal"
      solid: true
      color: "#8e44ad"
    }

Correct version

    MiniCraft.blocks.defs[8] = {
      name: "Crystal",
      solid: true,
      color: "#8e44ad"
    }

------------------------------------------------------------------------

# Design Your Own Block

Block ID: \_\_\_\_\_\_

Name: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Color: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Solid? (true/false): \_\_\_\_\_\_

What does your block do?

------------------------------------------------------------------------

------------------------------------------------------------------------

------------------------------------------------------------------------

------------------------------------------------------------------------

# Challenge Ideas

Try these:

-   create a crystal block
-   create a slime block you can walk through
-   create a tower quest
-   create a bridge quest
-   create a treasure block

------------------------------------------------------------------------

# The Most Important Rule

Programming is about experimenting.

    Change something
    Reload the game
    See what happens

You are now a **game modder**.


---

# Live Coding Walkthrough (Follow These Steps)

The original student guide shows *what* you can do.

This section shows **exactly how to do it step‑by‑step** just like in the class lesson.

---

# Mission 1 — Create Your First Custom Block

Open:

```
student/student_blocks.js
```

You will see something like this:

```javascript
// STUDENT MISSION #1:
// Add a new block!

// STUDENT MISSION #2:
// Put your new block in the hotbar.

MiniCraft.blocks.hotbar = [1,2,3,4,5,6];
```

Place your cursor above the hotbar line.

Type this code:

```javascript
MiniCraft.blocks.defs[7] = {
  name: "Gold",
  solid: true,
  color: "#f1c40f"
};
```

Save the file.

Refresh the game.

Right now the block exists in the game code, but it will **not appear in the hotbar yet.**

That is your next mission.

---

# Mission 2 — Add Your Block to the Hotbar

Find this line:

```javascript
MiniCraft.blocks.hotbar = [1,2,3,4,5,6];
```

Change it to:

```javascript
MiniCraft.blocks.hotbar = [1,2,3,4,5,6,7];
```

Save the file.

Refresh the game.

Now try selecting your new block with the **number keys**.

You just added a brand‑new block to the game.

---

# Mission 3 — Write Your First Quest

Open:

```
student/student_quests.js
```

You will see empty functions like this:

```javascript
function countBlocks(blockId) {
}
```

Replace that function with this:

```javascript
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
```

This function counts how many blocks the player placed.

---

# Build the Quest Display

Now replace `makeQuestLine` with:

```javascript
function makeQuestLine(label, current, goal) {
  if (current >= goal || current === true) {
    return `✅ ${label}`;
  } else {
    if (current === false) {
      return `⬜ ${label}`;
    } else {
      return `⬜ ${label} (${current}/${goal})`;
    }
  }
}
```

This function creates the quest text shown on screen.

---

# Update the Quest

Replace `updateQuest` with:

```javascript
function updateQuest() {
  const gold = countBlocks(7);

  const quests = [
    makeQuestLine("Place 5 gold blocks", gold, 5)
  ];

  MiniCraft.ui.setQuestList(quests);
}
```

Now add this to the **bottom of the file**:

```javascript
updateQuest();
MiniCraft.events.on("worldchanged", updateQuest);
```

Save.

Refresh the game.

Now place **5 Gold blocks** and watch the quest complete.

---

# Mission 4 — Advanced Quest (Pattern Detection)

Now we will detect a pattern.

Goal:

```
Stone Wood Wood Wood Stone
```

Add this function above `updateQuest`:

```javascript
function hasBridgePattern() {
  const built = MiniCraft.state.playerBuilt;
  const WORLD_H = built.length;
  const WORLD_W = built[0].length;

  for (let y = 0; y < WORLD_H; y++) {
    for (let x = 0; x <= WORLD_W - 5; x++) {

      const slice = [
        built[y][x],
        built[y][x+1],
        built[y][x+2],
        built[y][x+3],
        built[y][x+4]
      ];

      let stone = 0;
      let wood = 0;

      for (const block of slice) {
        if (block === 3) stone++;
        if (block === 5) wood++;
      }

      if (stone === 2 && wood === 3) {
        return true;
      }
    }
  }

  return false;
}
```

---

# Update the Quest List

Change `updateQuest` to:

```javascript
function updateQuest() {
  const gold = countBlocks(7);
  const bridge = hasBridgePattern();

  const quests = [
    makeQuestLine("Place 5 gold blocks", gold, 5),
    makeQuestLine("Build a bridge (2 stone + 3 wood)", bridge)
  ];

  MiniCraft.ui.setQuestList(quests);
}
```

Save and refresh the game.

Build the bridge pattern and watch the quest complete.

---

# Keep Experimenting

Try creating new blocks:

```javascript
MiniCraft.blocks.defs[8] = {
  name: "Crystal",
  solid: true,
  color: "#8e44ad"
};
```

Then add it to the hotbar:

```javascript
MiniCraft.blocks.hotbar = [1,2,3,4,5,6,7,8];
```

---

# The Secret of Programming

Real programming is mostly this:

```
1. Change code
2. Save
3. Reload
4. Test
5. Fix
```

Every game programmer in the world works this way.

Welcome to game development.
