# Score a bracket fairly

Now your app knows who each player picked. Let's compare predictions with a completed **fictional** tournament.

## 1. Read the scoring rules

The existing arrays define the point value of each round:

| Round | Games | Points per correct pick | Maximum |
| --- | ---: | ---: | ---: |
| Quarterfinals | 4 | 1 | 4 |
| Semifinals | 2 | 2 | 4 |
| Championship | 1 | 4 | 4 |
| **Total** | **7** | | **12** |

The correct results are stored in `OFFICIAL_RESULTS`. Never change the correct results to match the current user's picks.

## 2. Implement scorePicks(pickMap)

This function should **return a number**. It must not alter the supplied picks.

Start with:

```javascript
function scorePicks(pickMap) {
  let points = 0;
  for (const [gameKey, winnerId] of Object.entries(OFFICIAL_RESULTS)) {
    const round = Number(gameKey.split('-')[0]);
    if (pickMap[gameKey] === winnerId) {
      points += ROUND_POINTS[round];
    }
  }
  return points;
}
```

The key idea is the **comparison**. A prediction earns points only if it matches the correct winner for that exact game.

## 3. Check the boundaries

For debugging, try a bracket with no picks:

```javascript
console.log(scorePicks({})); // Expected: 0
```

Then test all the correct results:

```javascript
console.log(scorePicks(OFFICIAL_RESULTS)); // Expected: 12
```

Try a partially correct bracket and calculate its points by hand before running the function.

## 4. Show the current player's score

Wire the existing “Score my picks” button to update `#score-status` using `textContent`. Use clear wording: these are **sample results**, not live basketball scores.

## Checkpoint

Choose **Check this step**. It verifies that zero picks earn zero, all correct picks earn 12, and partial results earn the appropriate weighted points.

**Discussion:** Why is a championship pick worth more than a quarterfinal pick? How would a different scoring system affect leaderboard strategy?

[Review the JavaScript lesson](#/course/mobile-app-dev/lesson/javascript).
