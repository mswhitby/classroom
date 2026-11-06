# Step 5: Find the teams for a game

## Before you type

Continue the same index.html file from Step 4. Do not create another file.

## What to add and where

After the data, add teamById and getMatchup. A function is a reusable set of instructions; its parameters are inputs and return gives back an output. find searches for one matching team. map changes each id into its team object. Array positions start at zero, so game 0 is the first game. Later rounds return two null values because no winner has been chosen.

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
  <script>
    'use strict';
    const TEAMS = [
      { id:'north', name:'North Harbor', seed:1 },
      { id:'pine', name:'Pine Valley', seed:8 },
      { id:'river', name:'River City', seed:4 },
      { id:'glen', name:'Glen State', seed:5 },
      { id:'cedar', name:'Cedar Tech', seed:3 },
      { id:'lake', name:'Lakeview', seed:6 },
      { id:'summit', name:'Summit U', seed:2 },
      { id:'bay', name:'Bay College', seed:7 }
    ];
    const OPENING_MATCHUPS = [
      ['north','pine'], ['river','glen'], ['cedar','lake'], ['summit','bay']
    ];
    const OFFICIAL_RESULTS = {
      '0-0':'north', '0-1':'river', '0-2':'cedar', '0-3':'summit',
      '1-0':'north', '1-1':'summit', '2-0':'summit'
    };
    const ROUND_NAMES = ['Quarterfinals','Semifinals','Championship'];
    const ROUND_POINTS = [1,2,4];
    const picks = {};
    const entries = [];
function teamById(id) {
      return TEAMS.find(function (team) { return team.id === id; }) || null;
    }
function getMatchup(round, index) {
  if (round === 0) {
    return OPENING_MATCHUPS[index].map(teamById);
  }
  return [null, null];
}
window.bracketApp = { teams: TEAMS, openingMatchups: OPENING_MATCHUPS, results: OFFICIAL_RESULTS, picks , getMatchup };
  </script>
</body>
</html>
```

## Run and check

In the developer console, window.bracketApp.getMatchup(0, 0) returns North Harbor and Pine Valley; getMatchup(1, 0) returns two null values.

## If it does not work

Check matching opening/closing tags and braces, straight quotes, commas between array entries, and exact id spelling. Open the Playground console for a line number. Compare just the section you changed with this checkpoint. Fix the first error, then run again.

## Explain before moving on

Point to the code you added. What input does it use, what changes on the page, and why does that happen? Change one visible label and run again to confirm you are editing the right file.
