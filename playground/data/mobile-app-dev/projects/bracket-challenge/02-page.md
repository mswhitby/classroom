# Step 2: Add the visible page

## Before you type

Continue the same index.html file from Step 1. Do not create another file.

## What to add and where

Inside body, add one main element. Inside main, add the heading and description, then the bracket area, then the competition form and leaderboard. An id names an element so JavaScript can find it later. A label connects to its input through matching for and id values. Each button has a type so it does not accidentally submit a form.

## Your entire file should look like this now

Compare from the first line to the last. This is the whole file, not a fragment to paste at the bottom. The previous step’s code stays unless the directions replace it.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Bracket Challenge</title>
</head>
<body>
  <main>
    <h1>Bracket Challenge</h1>
    <p>Choose winners in our fictional eight-team basketball tournament.</p>
    <h2>Your bracket</h2>
    <button id="reset-picks" type="button">Reset picks</button>
    <p id="pick-status" role="status">Choose each winner.</p>
    <div id="bracket" class="bracket" aria-label="Tournament bracket"></div>
    <h2>Sample competition</h2>
    <p>Use a fictional nickname. Entries disappear when the preview restarts.</p>
    <form id="entry-form">
      <label for="entry-name">Nickname</label>
      <input id="entry-name" maxlength="30" required>
      <button type="submit">Save my bracket</button>
    </form>
    <p id="entry-status" role="status"></p>
    <button id="reveal-results" type="button">Score sample results</button>
    <p id="score-status" role="status"></p>
    <h2>Sample leaderboard</h2>
    <p>Quarterfinal: 1 point. Semifinal: 2. Championship: 4. Maximum: 12.</p>
    <ol id="leaderboard"></ol>
  </main>
</body>
</html>
```

## Run and check

You see a title, empty bracket area, nickname form, and scoring button. Clicking does not do anything yet.

## If it does not work

Check matching opening/closing tags and braces, straight quotes, commas between array entries, and exact id spelling. Open the Playground console for a line number. Compare just the section you changed with this checkpoint. Fix the first error, then run again.

## Explain before moving on

Point to the code you added. What input does it use, what changes on the page, and why does that happen? Change one visible label and run again to confirm you are editing the right file.
