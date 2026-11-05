# Turn brackets into a competition

A tournament predictor becomes a competition when you can save several entrants and **rank them by score**. For this walkthrough, entries live **in the current preview only**. The bracket code itself still autosaves; a shared, persistent multiplayer system is a future server-side extension.

## 1. Add sample entries

The `entries` array should store objects with a `name` and a **copy** of that person's picks. Use fictional names and sample data.

```javascript
const entries = [
  { name: 'Avery', picks: {
    '0-0': 'north', '0-1': 'river', '0-2': 'cedar', '0-3': 'summit',
    '1-0': 'river', '1-1': 'summit', '2-0': 'summit'
  } }
];
```

Add at least one other fictional entry with a different set of predictions.

## 2. Save the current bracket

Implement `saveEntry(name)` to:

1. Remove extra whitespace from the nickname and reject an empty name.
2. Check that **all seven games** have a winner picked.
3. Create an entry that copies the picks using `{ ...picks }`.
4. Replace an entry with the same nickname, or append a new one.
5. Update `#entry-status` and redraw the leaderboard.

A **copy** matters. If you save `picks` directly, changing your personal bracket later would also change a supposedly saved entry.

The existing form listener already calls `saveEntry`. Use the form's `submit` event, not just the button's click, so Enter works too.

## 3. Rank participants

Use `scorePicks` to compute each entry's result, then sort a **copy** of the array:

```javascript
const ranked = [...entries].sort(function (a, b) {
  return scorePicks(b.picks) - scorePicks(a.picks)
    || a.name.localeCompare(b.name);
});
```

Descending score puts the highest scorer first. Alphabetical name breaks ties consistently.

Build one `<li>` per entry inside `#leaderboard`. Use `createElement` and `textContent` rather than inserting a nickname as raw HTML.

## 4. Test the leaderboard

Submit your completed bracket with the fictional nickname “Sky.” Try editing that bracket and submitting again. The old entry should be replaced, not duplicated.

Try saving before making every pick. The app should tell you what is missing without saving an incomplete entry.

## Checkpoint

Choose **Check this step**. It verifies that a completed bracket can be saved, entries are ranked correctly, and the leaderboard displays scores. This is local demonstration only, not real account authentication or cross-device multiplayer.

[Review the HTML lesson](#/course/mobile-app-dev/lesson/html) and [JavaScript lesson](#/course/mobile-app-dev/lesson/javascript).
