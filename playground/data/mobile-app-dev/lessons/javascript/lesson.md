# Count the people joining in

## Make a page respond

HTML gives your meetup page structure. CSS makes it readable. **JavaScript** lets it respond when someone does something.

A **variable** stores a value. A descriptive function name explains an action:

```javascript
let attendees = 0;

function addAttendee() {
  attendees = attendees + 1;
}
```

The assignment `attendees = attendees + 1` calculates a new number and stores it. It does not mean the two sides were always equal.

## Connect an action to the page

The **DOM** is the browser’s representation of your HTML. Use `document.querySelector()` to find an element, and `textContent` to update its displayed text.

```javascript
const countLabel = document.querySelector('#count');
countLabel.textContent = attendees;
```

An **event listener** runs a function when an event happens. A button’s `click` event works for a mouse, touch, or keyboard activation.

## Your turn

Finish `addAttendee()` so each button press increases `attendees` and updates the count on the page. Run the code, click Join several times, and check your work.

What happens if you update the variable but forget the label? Which number changed, and which number is the visitor seeing?

## One step further

Try showing a message after five people join. Later, we’ll use **TypeScript** to describe the kinds of values our code expects. First, get comfortable with JavaScript values, functions, objects, and events.
