# Integrate without breaking a neighbor

After approval, the teacher or assigned integrator adds the selected component to the classroom app on an integration branch. Keep the demo as a small reproducible test. Move shared styles into the class app's agreed stylesheet; remove demo-only body rules.

## Make multiple instances work

The first demo initializes one card. In the shared app, replace its single-root script with a loop and give each card heading a unique id:

```javascript
document.querySelectorAll('[data-component="event-card"]').forEach(function (card) {
  const button = card.querySelector('button');
  const status = card.querySelector('[role="status"]');
  button.addEventListener('click', function () {
    const saved = button.getAttribute('aria-pressed') !== 'true';
    button.setAttribute('aria-pressed', String(saved));
    button.textContent = saved ? 'Unsave event' : 'Save event';
    status.textContent = saved ? 'Event saved in this demo.' : 'Not saved yet.';
  });
});
```

Add a second card with a different fictional event and a unique heading id. Save the first; the second should stay unsaved. Save the second; unsave the first. Verify each status and aria-pressed value independently. Check keyboard focus and phone-width layout again in the surrounding app.

## Handoff

Include the selected issue/PR, owner and reviewer aliases, contract version, test results, and any known limitations in the integration PR. The teacher approves and merges. A later author should be able to use your README to reproduce the demo. If integration breaks the app, revert that component's integration commit and reopen its issue with reproduction steps.

## Checkpoint

Built-in event-card checks now require two independently functioning card instances. The teacher checks the integration PR and both manual accessibility tests. Close the issue only after the teacher accepts the integrated component. This workflow does not change the independent React Design Lab or deploy student work into Playground production.
