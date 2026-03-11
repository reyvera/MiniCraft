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
