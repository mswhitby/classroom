# Step 3: Make the page readable

## Before you type

Continue the same index.html file from Step 2. Do not create another file.

## What to add and where

In head, below title, add a style element. A CSS rule has a selector followed by braces containing property: value pairs. Start with body, then the bracket grid, game cards, and team buttons. The media rule switches to one column on narrow screens.

## Your entire file should look like this now

Compare from the first line to the last. This is the whole file, not a fragment to paste at the bottom. The previous step’s code stays unless the directions replace it.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Bracket Challenge</title>
  <style>
    * { box-sizing: border-box; }
    body { margin: 0; padding: 20px; font: 16px/1.5 system-ui; background: #171426; color: #f2edff; }
    main { max-width: 1000px; margin: auto; }
    button, input { font: inherit; padding: 10px; }
    button { cursor: pointer; }
    button:focus-visible, input:focus-visible { outline: 3px solid #ffd766; outline-offset: 3px; }
    .bracket { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
    .round { min-width: 0; }
    .game { padding: 10px; border: 1px solid #81739d; border-radius: 10px; margin-bottom: 12px; }
    .team { display: block; width: 100%; text-align: left; margin-top: 6px; overflow-wrap: anywhere; }
    .team.selected { background: #d5baff; color: #20152e; font-weight: bold; }
    .seed { margin-left: 8px; }
    button:disabled { opacity: .6; cursor: default; }
    @media (max-width: 700px) { .bracket { grid-template-columns: 1fr; } }
  </style>
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

The page has a dark background and readable text. Resize below 700 pixels. The bracket is still empty. Use Tab to see the yellow focus outline.

## If it does not work

Check matching opening/closing tags and braces, straight quotes, commas between array entries, and exact id spelling. Open the Playground console for a line number. Compare just the section you changed with this checkpoint. Fix the first error, then run again.

## Explain before moving on

Point to the code you added. What input does it use, what changes on the page, and why does that happen? Change one visible label and run again to confirm you are editing the right file.
