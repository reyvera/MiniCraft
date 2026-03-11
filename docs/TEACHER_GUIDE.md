# MiniCraft Teacher Guide
## Full Live-Coding Script for Nearly Blank Student Starter Files

This guide is written for:

- teachers who are **not programmers**
- students who have **never coded before**
- a live workshop where the teacher is coding in front of the class

This version assumes the students start with **almost blank** files like these:

## `student/student_blocks.js`

```javascript
// STUDENT MISSION #1:
// Add a new block!
// Pick a new ID number (7, 8, 9...) and give it a name + color.
// solid: true means you can't walk through it.


// STUDENT MISSION #2:
// Put your new block in the hotbar.

// Hotbar can be 8 items max for this lesson.
MiniCraft.blocks.hotbar = [1,2,3,4,5,6];
```

## `student/student_quests.js`

```javascript
// STUDENT MISSION #3:
// Write a quest that updates on screen.
// We'll count how many Gold blocks exist in the world.
// Goal: place at least 5 Gold blocks.

// Copy these: ✅ ⬜

function countBlocks(blockId) {

}

function makeQuestLine(label, current, goal) {

}

function updateQuest() {

  MiniCraft.ui.setQuestList(quests);
}

// Hook into the engine:

// Run once at startup (boot happens after this file loads)
```

That means the students are **not starting with finished examples**.  
They are starting with empty spaces and simple mission comments.

So this guide walks through the coding **line by line** as if it is happening live in front of them.

------------------------------------------------------------------------

# Big Goal of the Lesson

Students will learn that programming is mostly this:

```text
Change code
Save the file
Reload the game
See what happened
```

That is the heart of coding.

Not magic.  
Not genius dust.  
Just careful changes, testing, and fixing little mistakes.

------------------------------------------------------------------------

# What Students Will Build

By the end of the session, students will:

1. create a brand new block
2. add that block to the hotbar
3. write an easy quest that counts blocks
4. write an advanced quest that checks for a pattern
5. understand that code is giving the game instructions

------------------------------------------------------------------------

# What the Teacher Needs Before Class

Each student computer needs:

- the MiniCraft project folder
- a browser
- either **VSCode.dev** or **Visual Studio Code**
- the student files:
  - `student/student_blocks.js`
  - `student/student_quests.js`

The teacher should test one machine before class.

Make sure this works:

1. open `index.html`
2. open the student files
3. type a code change
4. save
5. refresh the game
6. see the change

If one computer works, the rest usually behave. Usually. Computers are tiny goblins, but manageable goblins.

------------------------------------------------------------------------

# Suggested 90-Minute Lesson Flow

- 10 min — intro and opening the project
- 20 min — creating a block
- 10 min — adding the block to the hotbar and testing
- 20 min — writing the easy counting quest
- 20 min — writing the advanced pattern quest
- 10 min — student creativity time

------------------------------------------------------------------------

# Teacher Script: Introduction

Say this to the class:

> "Today you are going to change the code of a real game."

> "Games are made out of instructions."

> "When we code, we are telling the computer what rules the game should follow."

> "We are going to do this like real programmers do it:
> change code, save, reload, test."

> "If something breaks, that is normal. That is not failure. That is coding."

------------------------------------------------------------------------

# Part 0 — Open the Game and Show the Two Worlds

## What to Explain

Students need to understand there are **two places**:

1. the **game window**
2. the **code editor**

Use these words:

> "The browser is where we play the game."

> "The code editor is where we change the game."

> "When we type code, we are changing the rules behind the game."

------------------------------------------------------------------------

# Step-by-Step: Opening the Project

## If using VSCode.dev

1. Open the browser.
2. Go to `https://vscode.dev`
3. Click **Open Folder**
4. Choose the MiniCraft folder

## If using installed VSCode

1. Open **Visual Studio Code**
2. Click **File**
3. Click **Open Folder**
4. Choose the MiniCraft folder

## Then

1. In the project files, find `index.html`
2. Open it in a browser
3. Leave the browser open
4. Go back to the editor

Say this:

> "We will keep switching between the code and the game."

------------------------------------------------------------------------

# Important: Saving the File

Tell the class this early or chaos will arrive on schedule.

## Windows

```text
Ctrl + S
```

## Mac

```text
Command + S
```

Say this:

> "Nothing changes in the game until you save the file."

> "After saving, we go back to the browser and refresh."

------------------------------------------------------------------------

# PART 1 — CREATE A NEW BLOCK

We will code the block live from almost nothing.

Open:

```text
student/student_blocks.js
```

Students should see:

```javascript
// STUDENT MISSION #1:
// Add a new block!
// Pick a new ID number (7, 8, 9...) and give it a name + color.
// solid: true means you can't walk through it.


// STUDENT MISSION #2:
// Put your new block in the hotbar.

// Hotbar can be 8 items max for this lesson.
MiniCraft.blocks.hotbar = [1,2,3,4,5,6];
```

------------------------------------------------------------------------

# Teacher Script: What Is a Block?

Say this:

> "A block is just data."

> "Data means information the game needs."

> "We are about to tell the game:
> here is a new block,
> here is its number,
> here is its name,
> here is its color,
> and here is whether you can walk through it."

------------------------------------------------------------------------

# Live Coding Walkthrough — Create the Block

Tell students:

> "We are going to type a block definition above the hotbar line."

## Step 1 — Click in the empty space under Mission #1

Place the cursor here:

```javascript
// solid: true means you can't walk through it.

<cursor here>


// STUDENT MISSION #2:
```

## Step 2 — Type this exactly

```javascript
MiniCraft.blocks.defs[7] = {
  name: "Gold",
  solid: true,
  color: "#f1c40f"
};
```

Now stop and explain **every part**.

------------------------------------------------------------------------

# Explain the First Line

```javascript
MiniCraft.blocks.defs[7] = {
```

Say this:

> "This line tells the game:
> we are defining a block."

> "`defs` is short for definitions."

> "The `[7]` means block number 7."

> "That number is the block's ID."

Then explain it in kid language:

> "The ID is like the block's secret computer number."

> "The player might see the name Gold, but the computer also needs a number."

------------------------------------------------------------------------

# Explain the Name Line

```javascript
name: "Gold",
```

Say this:

> "This is the block's name."

> "The word on the left is the label called `name`."

> "The word on the right in quotes is the actual name we want."

Explain quotes simply:

> "Quotes tell the computer: this is text, not a math number."

------------------------------------------------------------------------

# Explain the Solid Line

```javascript
solid: true,
```

Say this:

> "`solid` tells the game whether the player can walk through the block."

> "`true` means yes, it is a real solid block."

> "`false` would mean you can walk through it like a ghost block."

------------------------------------------------------------------------

# Explain the Color Line

```javascript
color: "#f1c40f"
```

Say this:

> "This is the color of the block."

> "That code starting with `#` is called a hex color code."

> "Computers often use color codes instead of color names."

------------------------------------------------------------------------

# Explain the Last Line

```javascript
};
```

Say this:

> "This closes the block definition."

> "The curly brace closes the block data."

> "The semicolon tells the computer the instruction is finished."

This is fussy little syntax wizardry. Computers adore punctuation.

------------------------------------------------------------------------

# Step 3 — Save the File

Tell students:

```text
Ctrl + S   (Windows)
Command + S   (Mac)
```

## Step 4 — Refresh the Game

Go back to the browser and refresh.

## Step 5 — What Should Happen?

At this point, the block may **exist in code**, but it may **not yet appear in the hotbar**.

This is important.

Say this:

> "We created the block, but we have not told the game to show it in the player's block bar yet."

That leads perfectly into Mission #2.

------------------------------------------------------------------------

# PART 2 — ADD THE BLOCK TO THE HOTBAR

Students already have:

```javascript
MiniCraft.blocks.hotbar = [1,2,3,4,5,6];
```

------------------------------------------------------------------------

# Teacher Script: What Is the Hotbar?

Say this:

> "The hotbar is the row of blocks the player can choose from."

> "This list tells the game which block numbers should appear there."

> "Right now the list only has blocks 1 through 6."

> "We made block 7, but the hotbar does not know about it yet."

------------------------------------------------------------------------

# Live Coding Walkthrough — Add the Block to the Hotbar

## Step 1 — Find this line

```javascript
MiniCraft.blocks.hotbar = [1,2,3,4,5,6];
```

## Step 2 — Add block 7 to the list

Change it to:

```javascript
MiniCraft.blocks.hotbar = [1,2,3,4,5,6,7];
```

## Step 3 — Explain the List

Say this:

> "A list is just a group of items."

> "These numbers are the block IDs."

> "Adding 7 tells the game to put our new Gold block in the hotbar."

Explain commas:

> "Commas separate items in the list."

> "If a comma is missing, the computer gets grumpy."

------------------------------------------------------------------------

# Step 4 — Save the File

```text
Ctrl + S / Command + S
```

## Step 5 — Refresh the Game

Go back to the browser and refresh.

## Step 6 — Test It

Tell students:

1. press the number key for the new slot
2. choose the Gold block
3. place it in the game world

Say this:

> "Now you are using a block you coded yourself."

That is a neat little brain-zap moment.

------------------------------------------------------------------------

# Optional Mini Challenge — Change the Block

Now that students have a working block, let them experiment.

## Change the name

```javascript
name: "Crystal",
```

## Change the color

```javascript
color: "#8e44ad"
```

## Change the solidity

```javascript
solid: false,
```

Save and refresh every time.

Say this:

> "One of the biggest programming ideas is this:
> tiny code changes can make big game changes."

------------------------------------------------------------------------

# PART 3 — WRITE AN EASY QUEST THAT COUNTS BLOCKS

Now open:

```text
student/student_quests.js
```

Students should see this nearly blank file:

```javascript
// STUDENT MISSION #3:
// Write a quest that updates on screen.
// We'll count how many Gold blocks exist in the world.
// Goal: place at least 5 Gold blocks.

// Copy these: ✅ ⬜

function countBlocks(blockId) {

}

function makeQuestLine(label, current, goal) {

}

function updateQuest() {

  MiniCraft.ui.setQuestList(quests);
}

// Hook into the engine:

// Run once at startup (boot happens after this file loads)
```

------------------------------------------------------------------------

# Teacher Script: What Is a Quest?

Say this:

> "A quest is just a rule the game checks."

> "The game asks:
> did the player do the thing yet?"

> "We are going to write code that counts how many Gold blocks the player placed."

------------------------------------------------------------------------

# Live Coding Walkthrough — Build `countBlocks`

Tell students:

> "We are going to teach the game how to count a certain kind of block."

## Step 1 — Click inside `countBlocks`

Start with this:

```javascript
function countBlocks(blockId) {

}
```

Put the cursor between the braces.

## Step 2 — Type this exactly

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

Now explain it slowly.

------------------------------------------------------------------------

# Explain `function countBlocks(blockId)`

Say this:

> "A function is a reusable chunk of code."

> "It is like a tiny machine we can ask to do a job."

> "This function's job is to count blocks."

Explain `blockId`:

> "`blockId` is the number we want to count."

> "If we give it 7, it will count Gold blocks."

------------------------------------------------------------------------

# Explain This Line

```javascript
const built = MiniCraft.state.playerBuilt;
```

Say this:

> "This grabs the blocks the player has placed."

> "We only want to count blocks the player built, not every block in the world."

Kid version:

> "We are looking at the player's own building map."

------------------------------------------------------------------------

# Explain This Line

```javascript
let count = 0;
```

Say this:

> "We are making a counter."

> "It starts at 0 because we have not counted anything yet."

------------------------------------------------------------------------

# Explain the First Loop

```javascript
for (const row of built) {
```

Say this:

> "The world is made of rows."

> "This loop goes through one row at a time."

------------------------------------------------------------------------

# Explain the Second Loop

```javascript
for (const cell of row) {
```

Say this:

> "Inside each row are individual spaces, called cells."

> "This loop checks each space in the row."

------------------------------------------------------------------------

# Explain the `if`

```javascript
if (cell === blockId) {
  count++;
}
```

Say this:

> "This asks:
> is this cell the kind of block we are looking for?"

> "If yes, add 1 to the counter."

Explain `===` simply:

> "`===` means exactly equal to."

Explain `count++`:

> "`count++` means add one."

------------------------------------------------------------------------

# Explain the Return

```javascript
return count;
```

Say this:

> "At the end, we send the final number back."

> "That is the answer the function gives us."

------------------------------------------------------------------------

# Live Coding Walkthrough — Build `makeQuestLine`

Now move to:

```javascript
function makeQuestLine(label, current, goal) {

}
```

Type this:

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

------------------------------------------------------------------------

# Explain `makeQuestLine`

Say this:

> "This function creates the text we show on screen."

> "If the quest is complete, we show a check mark."

> "If it is not done, we show an empty box."

> "Sometimes we also show progress, like 2 out of 5."

------------------------------------------------------------------------

# Explain the First Condition

```javascript
if (current >= goal || current === true) {
```

Say this:

> "This means:
> if the player has reached the goal,
> OR if the answer is simply true,
> then the quest is complete."

Explain why `true` matters:

> "Some quests use numbers, like 3 out of 5."

> "Other quests use true or false, like:
> did the player build the pattern yet?"

That will matter later for the advanced quest.

------------------------------------------------------------------------

# Explain the Complete Return

```javascript
return `✅ ${label}`;
```

Say this:

> "This returns a finished quest line with a check mark."

------------------------------------------------------------------------

# Explain the False Check

```javascript
if (current === false) {
  return `⬜ ${label}`;
}
```

Say this:

> "If the answer is just false, we show an empty box and the label."

> "No number progress is needed."

------------------------------------------------------------------------

# Explain the Progress Return

```javascript
return `⬜ ${label} (${current}/${goal})`;
```

Say this:

> "This shows progress like 2 out of 5."

> "That helps the player know how close they are."

------------------------------------------------------------------------

# Live Coding Walkthrough — Build `updateQuest`

Now move to this:

```javascript
function updateQuest() {

  MiniCraft.ui.setQuestList(quests);
}
```

We need to create `quests` first, because right now that variable does not exist.

Replace the inside with this:

```javascript
function updateQuest() {
  const gold = countBlocks(7);

  const quests = [
    makeQuestLine("Place 5 gold blocks", gold, 5)
  ];

  MiniCraft.ui.setQuestList(quests);
}
```

------------------------------------------------------------------------

# Explain `const gold = countBlocks(7)`

Say this:

> "We are asking our counting function to count block 7."

> "Block 7 is Gold."

> "So this gives us the number of Gold blocks the player has placed."

------------------------------------------------------------------------

# Explain the Quest Array

```javascript
const quests = [
  makeQuestLine("Place 5 gold blocks", gold, 5)
];
```

Say this:

> "This is a list of quests."

> "Right now we only have one quest in the list."

Then explain the line:

> "The label is the words the player sees."

> "`gold` is the current amount."

> "`5` is the goal."

------------------------------------------------------------------------

# Explain `MiniCraft.ui.setQuestList(quests);`

Say this:

> "This sends our quest list to the game screen."

> "Without this line, the quest would exist in code, but not show on screen."

------------------------------------------------------------------------

# Important: Hook the Quest Into the Game

Right now, the file still ends with:

```javascript
// Hook into the engine:

// Run once at startup (boot happens after this file loads)
```

Students need actual code there so the quest updates.

Add this at the bottom:

```javascript
updateQuest();
MiniCraft.events.on("worldchanged", updateQuest);
```

So the bottom of the file becomes:

```javascript
// Hook into the engine:

// Run once at startup (boot happens after this file loads)
updateQuest();
MiniCraft.events.on("worldchanged", updateQuest);
```

------------------------------------------------------------------------

# Explain the Hooking Code

Say this:

> "`updateQuest();` runs the quest code once right away."

> "`MiniCraft.events.on("worldchanged", updateQuest);` tells the game:
> every time the world changes, run the quest update again."

Kid version:

> "Whenever the player places or breaks blocks, the game checks the quest again."

------------------------------------------------------------------------

# Step-by-Step Test the Easy Quest

1. Save the file
2. Refresh the game
3. Place Gold blocks
4. Watch the quest count go up
5. Reach 5 Gold blocks
6. See the check mark

Say this:

> "You just wrote a real quest system."

That is pretty cool, and not in the fake motivational poster way.

------------------------------------------------------------------------

# PART 4 — WRITE AN ADVANCED PATTERN QUEST

Now students understand counting.

Next, teach them that some quests do **not** count totals.

Some quests check for a **shape or pattern**.

Say this:

> "Now we are going to make the game look for a special pattern."

> "Instead of asking how many blocks exist,
> we ask whether certain blocks are arranged in a certain way."

------------------------------------------------------------------------

# Goal of the Pattern Quest

We will build a quest for:

```text
Build a bridge: 2 stone + 3 wood in a row
```

That means:

- exactly 5 blocks in one horizontal row
- 2 must be stone
- 3 must be wood

------------------------------------------------------------------------

# Live Coding Walkthrough — Add `hasBridgePattern`

Add this new function **above** `updateQuest()`.

```javascript
function hasBridgePattern() {
  const built = MiniCraft.state.playerBuilt;
  const WORLD_H = built.length;
  const WORLD_W = built[0].length;

  for (let y = 0; y < WORLD_H; y++) {
    for (let x = 0; x <= WORLD_W - 5; x++) {
      const slice = [
        built[y][x],
        built[y][x + 1],
        built[y][x + 2],
        built[y][x + 3],
        built[y][x + 4]
      ];

      let stoneCount = 0;
      let woodCount = 0;

      for (const block of slice) {
        if (block === 3) stoneCount++;
        if (block === 5) woodCount++;
      }

      if (stoneCount === 2 && woodCount === 3) {
        return true;
      }
    }
  }

  return false;
}
```

------------------------------------------------------------------------

# Explain the Pattern Function in Kid Language

Say this:

> "This function looks across the player's built blocks."

> "It checks every row."

> "It grabs 5 blocks at a time."

> "Then it counts how many are stone and how many are wood."

> "If it finds 2 stone and 3 wood, it says true."

> "If it never finds that, it says false."

------------------------------------------------------------------------

# Explain the World Size Lines

```javascript
const WORLD_H = built.length;
const WORLD_W = built[0].length;
```

Say this:

> "These tell us how tall and how wide the world is."

------------------------------------------------------------------------

# Explain the Outer Loop

```javascript
for (let y = 0; y < WORLD_H; y++) {
```

Say this:

> "This goes through the rows from top to bottom."

------------------------------------------------------------------------

# Explain the Inner Loop

```javascript
for (let x = 0; x <= WORLD_W - 5; x++) {
```

Say this:

> "This moves across the row."

> "We stop at `WORLD_W - 5` because we need room to look at 5 blocks in a row."

------------------------------------------------------------------------

# Explain the Slice

```javascript
const slice = [
  built[y][x],
  built[y][x + 1],
  built[y][x + 2],
  built[y][x + 3],
  built[y][x + 4]
];
```

Say this:

> "This grabs 5 blocks next to each other."

Kid version:

> "We are taking a tiny snapshot of 5 spaces in a row."

------------------------------------------------------------------------

# Explain the Counters

```javascript
let stoneCount = 0;
let woodCount = 0;
```

Say this:

> "We are making two counters:
> one for stone,
> one for wood."

------------------------------------------------------------------------

# Explain the Slice Loop

```javascript
for (const block of slice) {
  if (block === 3) stoneCount++;
  if (block === 5) woodCount++;
}
```

Say this:

> "We look at each of the 5 blocks."

> "If it is stone, add one to stone."

> "If it is wood, add one to wood."

------------------------------------------------------------------------

# Explain the Final Check

```javascript
if (stoneCount === 2 && woodCount === 3) {
  return true;
}
```

Say this:

> "If we found 2 stone and 3 wood in that slice,
> the pattern is complete."

Explain `&&` simply:

> "`&&` means both things must be true."

------------------------------------------------------------------------

# Explain the `return false`

```javascript
return false;
```

Say this:

> "If the function checks the whole world and never finds the pattern,
> it returns false."

------------------------------------------------------------------------

# Update `updateQuest` to Include the Pattern Quest

Now change `updateQuest()` to this:

```javascript
function updateQuest() {
  const gold = countBlocks(7);
  const bridgeBuilt = hasBridgePattern();

  const quests = [
    makeQuestLine("Place 5 gold blocks", gold, 5),
    makeQuestLine("Build a bridge: 2 stone + 3 wood in a row", bridgeBuilt)
  ];

  MiniCraft.ui.setQuestList(quests);
}
```

------------------------------------------------------------------------

# Explain the New Variable

```javascript
const bridgeBuilt = hasBridgePattern();
```

Say this:

> "This runs our pattern function."

> "The answer will be either true or false."

------------------------------------------------------------------------

# Explain Why `makeQuestLine` Still Works

Say this:

> "Earlier, `makeQuestLine` was built to handle both number quests and true/false quests."

> "That is why it can show a check mark when `bridgeBuilt` becomes true."

This is a lovely little moment to show that we built one helper that works for more than one job.

------------------------------------------------------------------------

# Step-by-Step Test the Pattern Quest

1. Save the file
2. Refresh the game
3. Place a horizontal row of 5 blocks
4. Make sure 2 are stone and 3 are wood
5. Watch the quest complete

Say this:

> "This quest is not counting total blocks."

> "It is checking for a pattern."

------------------------------------------------------------------------

# Full Example of `student_quests.js` After the Lesson

This is what the completed file can look like:

```javascript
// STUDENT MISSION #3:
// Write a quest that updates on screen.
// We'll count how many Gold blocks exist in the world.
// Goal: place at least 5 Gold blocks.

// Copy these: ✅ ⬜

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

function hasBridgePattern() {
  const built = MiniCraft.state.playerBuilt;
  const WORLD_H = built.length;
  const WORLD_W = built[0].length;

  for (let y = 0; y < WORLD_H; y++) {
    for (let x = 0; x <= WORLD_W - 5; x++) {
      const slice = [
        built[y][x],
        built[y][x + 1],
        built[y][x + 2],
        built[y][x + 3],
        built[y][x + 4]
      ];

      let stoneCount = 0;
      let woodCount = 0;

      for (const block of slice) {
        if (block === 3) stoneCount++;
        if (block === 5) woodCount++;
      }

      if (stoneCount === 2 && woodCount === 3) {
        return true;
      }
    }
  }

  return false;
}

function updateQuest() {
  const gold = countBlocks(7);
  const bridgeBuilt = hasBridgePattern();

  const quests = [
    makeQuestLine("Place 5 gold blocks", gold, 5),
    makeQuestLine("Build a bridge: 2 stone + 3 wood in a row", bridgeBuilt)
  ];

  MiniCraft.ui.setQuestList(quests);
}

// Hook into the engine:

// Run once at startup (boot happens after this file loads)
updateQuest();
MiniCraft.events.on("worldchanged", updateQuest);
```

------------------------------------------------------------------------

# Full Example of `student_blocks.js` After the Lesson

```javascript
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
```

------------------------------------------------------------------------

# Common Problems and What the Teacher Should Say

## Problem 1 — Nothing changed

Ask:

> "Did you save the file?"

> "Did you refresh the browser?"

This is the number one culprit. The classic gremlin.

## Problem 2 — The game broke

Look for:

- missing commas
- missing quotes
- missing braces
- missing brackets
- missing semicolons

Say this:

> "Computers are very picky.
> One tiny missing symbol can break the whole thing."

## Problem 3 — The block does not show in the hotbar

Check whether the hotbar list includes the new ID.

Example:

```javascript
MiniCraft.blocks.hotbar = [1,2,3,4,5,6,7];
```

## Problem 4 — The quest does not appear

Check whether `quests` was created inside `updateQuest()`.

## Problem 5 — The quest does not update

Check whether these lines are at the bottom:

```javascript
updateQuest();
MiniCraft.events.on("worldchanged", updateQuest);
```

## Problem 6 — The pattern quest never completes

Check:

- are the blocks in one horizontal row?
- are there exactly 2 stone and 3 wood?
- did the student refresh after saving?

------------------------------------------------------------------------

# What the Teacher Can Say During Debugging

Use calm language like this:

> "Let's compare your line to the example."

> "Let's check punctuation."

> "Let's see whether the file was saved."

> "Let's test one small thing at a time."

This keeps debugging from feeling like doom theater.

------------------------------------------------------------------------

# Extension Ideas After the Core Lesson

After students finish, they can try:

- make a Crystal block instead of Gold
- make a Slime block with `solid: false`
- change the quest goal from 5 Gold to 10 Gold
- make a new pattern quest
- create a block with a different ID like 8

Example:

```javascript
MiniCraft.blocks.defs[8] = {
  name: "Crystal",
  solid: true,
  color: "#8e44ad"
};

MiniCraft.blocks.hotbar = [1,2,3,4,5,6,7,8];
```

------------------------------------------------------------------------

# Teacher Closing Script

Say this:

> "Today you did real programming."

> "You created data for a new block."

> "You added it to the game."

> "You built a quest that counts."

> "You built a quest that checks a pattern."

> "That is real game logic."

> "Programming is not about memorizing everything.
> It is about making changes, testing them, and learning how the rules work."

------------------------------------------------------------------------

# Ultra-Short Teacher Cheat Sheet

## Create a block

```javascript
MiniCraft.blocks.defs[7] = {
  name: "Gold",
  solid: true,
  color: "#f1c40f"
};
```

## Add block to hotbar

```javascript
MiniCraft.blocks.hotbar = [1,2,3,4,5,6,7];
```

## Count blocks

```javascript
const gold = countBlocks(7);
```

## One easy quest

```javascript
makeQuestLine("Place 5 gold blocks", gold, 5)
```

## One pattern quest variable

```javascript
const bridgeBuilt = hasBridgePattern();
```

## Hook quest updates into the game

```javascript
updateQuest();
MiniCraft.events.on("worldchanged", updateQuest);
```

------------------------------------------------------------------------

# Final Reminder

You do **not** need to sound like an expert programmer.

You only need to guide students through this loop:

1. type code
2. save
3. refresh
4. test
5. fix

That is the real engine of learning here.
