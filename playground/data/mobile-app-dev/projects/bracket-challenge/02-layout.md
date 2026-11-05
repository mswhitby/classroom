# Make the bracket visible

Your data describe the tournament. Now you'll turn that data into a real interface with **DOM elements** and CSS. Keep the same project draft from Step 1.

## 1. Create three columns and seven games

Find `renderBracket()`. Replace the placeholder with code that:

1. Finds `#bracket` and clears its old children with `replaceChildren()`.
2. Loops through rounds 0, 1, and 2.
3. Creates a `section` with class `round` and a heading from `ROUND_NAMES`.
4. Creates 4, 2, or 1 game cards, each with `class="game"` and a `data-game` value like `0-0`.
5. Creates **two buttons per game**, labeled with the teams. For now, show opening-matchup teams in the quarterfinals and placeholders in later rounds.

A useful skeleton:

```javascript
const bracket = document.querySelector('#bracket');
bracket.replaceChildren();
for (let round = 0; round < 3; round++) {
  const column = document.createElement('section');
  column.className = 'round';
  const heading = document.createElement('h3');
  heading.textContent = ROUND_NAMES[round];
  column.append(heading);

  const gameCount = 4 / (2 ** round);
  for (let game = 0; game < gameCount; game++) {
    const card = document.createElement('div');
    card.className = 'game';
    card.dataset.game = round + '-' + game;
    // TODO: Add two .team buttons to the card.
    column.append(card);
  }
  bracket.append(column);
}
```

Use `document.createElement('button')`, assign `type='button'`, and assign the team's name with `textContent`. Disable any button that represents a team that hasn't advanced yet. In a later step, `getMatchup()` will provide the actual teams for every round.

## 2. Use CSS Grid

Change the `.bracket` rule so the round columns sit side by side:

```css
.bracket {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}
.round { min-width: 0; }
.game {
  border: 1px solid #a59ac8;
  border-radius: 10px;
  padding: 12px;
}
.team {
  border: 1px solid #a59ac8;
  border-radius: 8px;
  margin-top: 6px;
}
```

Use a small-screen layout so cards never become impossible to read:

```css
@media (max-width: 720px) {
  .bracket { display: flex; overflow-x: auto; }
  .round { flex: 0 0 min(270px, 80vw); }
}
```

## 3. Make the choices accessible

Use actual buttons (not clickable `div`s). They must respond to **Tab**, **Enter**, and **Space**. Add visible focus styling, and plan to set `aria-pressed` when a pick is selected.

## Checkpoint

Run and check your code. All **seven cards** should be present, and the first four should show actual team names. Later games can show “Waiting for winner.” Try resizing the preview before continuing.

[Review the HTML lesson](#/course/mobile-app-dev/lesson/html) and [CSS lesson](#/course/mobile-app-dev/lesson/css).
