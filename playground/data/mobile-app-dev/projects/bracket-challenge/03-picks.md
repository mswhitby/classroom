# Step 7: Choose and advance winners

## Before you type

Continue the same index.html file from Step 6. Do not create another file.

## What to add and where

Replace getMatchup with the version below so later rounds look back at previous winners. Add chooseWinner immediately after it. In renderBracket, add the click listener after button.append(label,seed). Finally add the reset listener below the functions. An event listener runs a function when a user clicks. picks stores choices using keys like 0-0. When an early choice changes, delete later choices that are no longer possible. The nested loops check semifinals before the championship so invalid choices clear in order.

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
function getMatchup(round,index) {
      if(round===0) {
        return (OPENING_MATCHUPS[index]||[]).map(teamById);
      }
      const previous=[index*2,index*2+1];
      return previous.map(function (previousIndex) {
        const competitors=getMatchup(round-1,previousIndex);
        const selectedId=picks[(round-1)+'-'+previousIndex];
        return competitors.find(function(team){return team && team.id===selectedId;})||null;
      });
    }
function chooseWinner(round,index,teamId) {
      const possible=getMatchup(round,index);
      if(!possible.some(function(t){return t && t.id===teamId;}))return false;
      picks[round+'-'+index]=teamId;
      for(let nextRound=round+1;nextRound<3;nextRound++) {
        const count=4/(2**nextRound);
        for(let game=0;game<count;game++) {
          const key=nextRound+'-'+game;
          if(picks[key]&&!getMatchup(nextRound,game).some(function(t){return t && t.id===picks[key];})) {
            delete picks[key];
          }
        }
      }
      renderBracket();
      document.getElementById('pick-status').textContent =
        Object.keys(picks).length+' of 7 games picked. Choose every winner to submit.';
      return true;
    }
function renderBracket() {
      const bracket=document.getElementById('bracket');
      bracket.replaceChildren();
      for(let round=0;round<3;round++) {
        const column=document.createElement('section');
        column.className='round';
        column.setAttribute('aria-label',ROUND_NAMES[round]);
        const heading=document.createElement('h3');
        heading.textContent=ROUND_NAMES[round];
        column.append(heading);
        const gameCount=4/(2**round);
        for(let game=0;game<gameCount;game++) {
          const key=round+'-'+game;
          const card=document.createElement('div');
          card.className='game';
          card.dataset.game=key;
          const title=document.createElement('small');
          title.textContent='Game '+(game+1)+' · '+ROUND_POINTS[round]+' pt'+(ROUND_POINTS[round]===1?'':'s');
          card.append(title);
          getMatchup(round,game).forEach(function(team){
            const button=document.createElement('button');
            button.type='button';
            button.className='team'+(team && picks[key]===team.id?' selected':'');
            button.setAttribute('aria-pressed',String(!!(team && picks[key]===team.id)));
            button.disabled=!team;
            const label=document.createElement('span');
            label.textContent=team?team.name:'Waiting for winner';
            const seed=document.createElement('span');
            seed.className='seed';seed.textContent=team?'#'+team.seed:'—';
            button.append(label,seed);
            if(team)button.addEventListener('click',function(){chooseWinner(round,game,team.id);});
            card.append(button);
          });
          column.append(card);
        }
        bracket.append(column);
      }
    }
document.getElementById('reset-picks').addEventListener('click', function () {
  Object.keys(picks).forEach(function (key) { delete picks[key]; });
  renderBracket();
  document.getElementById('pick-status').textContent = 'All predictions reset.';
  document.getElementById('score-status').textContent = '';
});
window.bracketApp = { teams: TEAMS, openingMatchups: OPENING_MATCHUPS, results: OFFICIAL_RESULTS, picks , getMatchup, chooseWinner, renderBracket };
renderBracket();
  </script>
</body>
</html>
```

## Run and check

Choose North Harbor and River City, then North Harbor in their semifinal. Change North Harbor to Pine Valley in round one. North Harbor disappears from later rounds. Reset removes every pick.

## If it does not work

Check matching opening/closing tags and braces, straight quotes, commas between array entries, and exact id spelling. Open the Playground console for a line number. Compare just the section you changed with this checkpoint. Fix the first error, then run again.

## Explain before moving on

Point to the code you added. What input does it use, what changes on the page, and why does that happen? Change one visible label and run again to confirm you are editing the right file.
