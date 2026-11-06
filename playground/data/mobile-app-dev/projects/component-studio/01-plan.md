# One small component, one shared app

Your class will build a larger app by combining small pieces. Start with an event card: a title, event details, Save button, and a status message. Your teacher chooses the shared app and one of these two modes before work begins. Start with plain HTML/CSS/JavaScript; the independent React Design Lab remains a separate student project.

## Mode A: Build, compare, and vote

Everyone builds the same event-card contract below in their own branch. Use the same fictional event data so comparisons are fair. Give each version an anonymous label, such as A, B, C. Every student tests at least two versions with keyboard and phone-width checks. Score clarity (0–2), accessibility (0–2), and correct behavior (0–2), then vote privately through your teacher's existing class form. One vote per student; the teacher breaks ties using the rubric and records the selected version in the issue. The teacher may require fixes before integration. Credit reasoning, tests, and useful revisions even when a design is not selected.

## Mode B: Check out different components

Your teacher posts one GitHub issue per component: event card, empty state, filter bar, navigation, and detail panel. Comment “I would like to own this component” on an available issue. The teacher assigns one owner or pair before they start. Assignment is the checkout record; a comment alone is not a reservation. Use the issue template in this repo. The teacher reassigns stalled work after discussing it with the owner.

No automated reservation board or voting service is built into this lesson. Use GitHub assignments and a teacher-run ballot. Do not edit shared app files until your integration PR is approved.

## Agree on a contract

For our first component, record this in the issue:

- Component: event-card. Owner/pair and reviewer: teacher assigns.
- Input: fictional title, time, room, description; no accounts or student data.
- Output: a card with a button that toggles a saved state and announces it.
- Markup: one root `[data-component="event-card"]`, an `h2`, a native `button[type="button"]` with `aria-pressed`, and a `[role="status"]` paragraph.
- Ownership: scope styles under `.event-card` and behavior under the component root. No global element styles in the integrated app.
- Done: clear labels, works at 375px, visible focus, keyboard operation, two independent card instances, README instructions, and a reviewed PR.

For other components, write a similarly explicit contract with inputs, outputs, file ownership, and acceptance examples. The Playground's built-in checks are for the event-card exercise; teacher review evaluates other contracts.

## Checkpoint

Submit the issue link and contract to your teacher. This planning step has no code test. Save your draft or download it; move to Build once assigned.
