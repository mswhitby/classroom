# Let players pick winners

A bracket becomes interactive when choosing a team changes the *next round*. This is where **events**, **state**, and **functions** work together.

## 1. Understand the picks object

We'll store picks by game key, such as:

```javascript
picks['0-0'] = 'north';
picks['0-1'] = 'river';
```

A key like `0-0` means round 0, game 0. We save the team's **ID**, not the team object or display name.

## 2. Implement getMatchup(round, index)

Round 0 uses the opening pairs. Later games inherit winners from the previous round. Implement `getMatchup` so it **returns two team objects or null placeholders**.

Use this pattern for later rounds:

```javascript
const previousGameNumbers = [index * 2, index * 2 + 1];
return previousGameNumbers.map(function (previousIndex) {
  const possibleTeams = getMatchup(round - 1, previousIndex);
  const winningId = picks[(round - 1) + '-' + previousIndex];
  return possibleTeams.find(function (team) {
    return team && team.id === winningId;
  }) || null;
});
```

For `round === 0`, look up the two IDs in `OPENING_MATCHUPS[index]` and match them to objects in `TEAMS`.

## 3. Implement chooseWinner(round, index, teamId)

First, check that the selected team actually belongs in that matchup. Then store its ID and redraw the bracket:

```javascript
const key = round + '-' + index;
const possible = getMatchup(round, index);
if (!possible.some(team => team && team.id === teamId)) return false;
picks[key] = teamId;
// TODO: Remove later picks that are no longer possible.
renderBracket();
return true;
```

Important: If a player changes an opening-game winner, a later pick might become impossible. **Clear any downstream pick whose team no longer appears in that game.** You can loop through the later rounds in increasing order and validate the saved winner against `getMatchup`.

## 4. Wire each button

While creating a team button in `renderBracket`:

```javascript
button.addEventListener('click', function () {
  chooseWinner(round, game, team.id);
});
button.classList.toggle('selected', picks[round + '-' + game] === team.id);
button.setAttribute('aria-pressed',
  String(picks[round + '-' + game] === team.id));
```

Don't register a click for a placeholder without a team. Set that button's `disabled` property instead.

## Checkpoint

Check this step and try these manual tests: pick North Harbor, pick River City, then choose a semifinal winner. Go back and change the quarterfinal result. An impossible semifinal selection must disappear.

This is **state consistency**: the screen should never show a champion who was eliminated earlier.

[Review the JavaScript lesson](#/course/mobile-app-dev/lesson/javascript).
