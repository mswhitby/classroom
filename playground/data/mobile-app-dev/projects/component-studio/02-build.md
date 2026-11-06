# Build one event card in isolation

Use the starter's main element. First add the component's section, heading, event details, button, and status paragraph. Match the contract's data-component and class names. Next add a style element in head and scope component rules under `.event-card`. Finally add the script before the closing body tag. An event listener changes aria-pressed, button text, and the status when clicked.

Open **Completed example** to compare the whole file after trying these pieces. The example is a working event card, not an app you must copy unchanged. Use your own fictional event and explain each line you add.

## Your file should contain this component

```html
<section class="event-card" data-component="event-card" aria-labelledby="event-title">
  <h2 id="event-title">Game Design Club</h2>
  <p>Friday at 4 p.m. in Room 12. Bring one game idea.</p>
  <button type="button" aria-pressed="false">Save event</button>
  <p role="status">Not saved yet.</p>
</section>
```

Find the root with `document.querySelector('[data-component="event-card"]')`; then use `card.querySelector(...)` to find its button and status. Keeping queries inside the card prevents your component from changing someone else's button. Use textContent for text.

## Checkpoint

Choose Check this step. The event-card checks inspect the markup and test saving and unsaving by clicking the actual button. They do not replace a keyboard check, phone-width review, or the teacher's rubric. Download index.html and attach it to your component branch, not production.
