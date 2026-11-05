# Design a tournament with data

You are building **Bracket Challenge**: an interactive March basketball competition. Players predict winners in an eight-team tournament, watch teams advance, and compare scores in a sample leaderboard. We'll start with **fictional schools** so the app works without live sports data, API keys, accounts, or paid services.

## What you are building

There are three rounds: four quarterfinal games, two semifinal games, and one championship game. A complete bracket has **7 games** (4 + 2 + 1).

We will use one `index.html` file across all six steps. **Save draft** keeps your work in this browser, and **Download index.html** gives you a backup.

## 1. Inspect the existing arrays

Find `TEAMS` in the script. Each team is an **object**:

```javascript
{ id: 'north', name: 'North Harbor', seed: 1 }
```

`id` is a unique key used by our program. `name` is for readers; `seed` is a number. The `TEAMS` array currently contains only four teams.

Add these four objects (include commas between objects):

```javascript
{ id: 'cedar', name: 'Cedar Tech', seed: 3 },
{ id: 'lake', name: 'Lakeview', seed: 6 },
{ id: 'summit', name: 'Summit U', seed: 2 },
{ id: 'bay', name: 'Bay College', seed: 7 }
```

## 2. Finish the first-round matchups

`OPENING_MATCHUPS` is an array of pairs. Each pair contains two team IDs, not duplicate team objects.

```javascript
const OPENING_MATCHUPS = [
  ['north', 'pine'],
  ['river', 'glen'],
  ['cedar', 'lake'],
  ['summit', 'bay']
];
```

This lets one team object be reused across the app. Check that the eight IDs are unique and **every team appears in exactly one opening matchup**.

## 3. Reason about data

Why not create seven unrelated hard-coded game cards? If a team advances, we want the next round to update from data instead of typing its name into another element.

The `OFFICIAL_RESULTS` object is **sample results** for testing later; it is not actual NCAA data.

## Checkpoint

Choose **Check this step**. It should verify eight uniquely identified teams, four valid matchups, and three named rounds. The empty bracket is expected for now; you'll render it in Step 2.

**Practice:** What would happen if two teams shared the same `id`? What is the difference between a team ID and a seed?

[Review the JavaScript lesson](#/course/mobile-app-dev/lesson/javascript).
