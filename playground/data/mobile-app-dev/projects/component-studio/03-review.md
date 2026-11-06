# Review, vote, and revise

Create a branch named `component/event-card-your-alias` in your assigned classroom repository. Keep work in `components/event-card/your-alias/` with a demo, scoped stylesheet, behavior, and a short README. Ask your teacher which shared repository to use; do not assume Playground production is the class app.

Open a PR with `Closes #ISSUE`, a screenshot, test steps, expected behavior, and any limitations. Assign the agreed reviewer. Use fictional names in public demos. Do not include personal information in screenshots.

## Reviewer checklist

1. Open the demo at 375px and a wide width. Text wraps without sideways page scrolling.
2. Tab to the button; its focus is visible. Press Enter and Space. Save and unsave both work.
3. Confirm that status text changes and aria-pressed agrees with it.
4. Read the source: component styles do not change other components, and displayed text uses textContent.
5. Confirm the contract and README match the implementation. Request specific changes, such as “The button label does not change when saved,” with a reproduction step.

In same-component mode, run the class comparison and vote described in Plan after every candidate passes the contract. In checkout mode, the assigned reviewer uses that component's acceptance examples. The teacher records the result and approves the integration candidate. Revise your existing PR; do not merge it yourself unless your teacher assigned you that role.

## Checkpoint

Record reviewer feedback, what you changed, and the issue/PR link. Automated checks only test the event-card behavior. They cannot verify votes, code ownership, or teacher approval.
