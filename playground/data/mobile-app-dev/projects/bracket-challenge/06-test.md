# Test your bracket like a real user

A working app isn't the same as an app that's **reliable**. Test interactions, keyboard use, changing earlier picks, and incomplete entries. Your saved draft from the previous steps should still be here.

## 1. Test with a plan

| Test | Expected result |
| --- | --- |
| Load the preview | Eight fictional teams appear across four quarterfinal games |
| Select an opening winner | The winning team appears in the correct semifinal |
| Choose a semifinal winner | The team advances to the championship |
| Change the earlier winner | Impossible later picks are cleared |
| Reset the bracket | All picks clear and placeholders return |
| Score with no picks | 0 / 12 sample points |
| Score all seven correct picks | 12 / 12 sample points |
| Save with fewer than seven picks | A useful warning appears; no entry is created |
| Save a complete bracket | The entry appears once on the sorted leaderboard |
| Save again using the same nickname | The previous entry is updated |
| Enter a nickname containing `<` | Display the character as text, not as an HTML element |
| Narrow the preview | Readable matchup cards with no tiny text |
| Use Tab, Enter, and Space | Every available team button can be selected with a keyboard |

## 2. Run the combined checks

Choose **Check this step**. Read the results for team data, layout, advancing winners, scoring, entries, and accessible controls. Fix one behavior at a time.

Automated checks cover selected contracts; they cannot prove the visual design is perfect. Test on a narrow screen and with a partner.

## 3. Explain the data flow

In your own words, answer:

1. Why do saved picks refer to **team IDs** rather than team names?
2. Why must downstream picks be cleared after an earlier winner changes?
3. Why does `saveEntry` copy the `picks` object?
4. Why should the leaderboard compute the score from one consistent scoring function?
5. What would need to change to support classmates using separate devices?

## 4. Optional extensions

- **React:** Rebuild the three round columns with components and `useState`.
- **March 64-team bracket:** Generate 32 first-round games from team data; keep the same winner-advancement algorithm.
- **Women's and men's tournament modes:** Let users choose a fictional tournament and avoid mixing scores.
- **Backend multiplayer:** Add server-side authentication, entry locking, a persistent bracket table, and authoritative result updates. This would require a separate backend phase and privacy review.
- **Live results:** Use a properly licensed or permitted sports-data provider, with server-side caching and an explicit update schedule. Do not claim the fictional results are live.

## Share your work

Use **Download index.html** to keep a copy for your portfolio, then explain one bug you found and fixed. This project models a tournament competition without gambling, money, paid entries, or real player information.

Open **Compare a finished example** only after trying the checklist. Treat it as one implementation, not the only correct answer.
