# Build a reusable RSVP card

## Keep the display connected to its data

The meetup page now responds to clicks. Imagine making ten cards, each with its own count. **React** helps us describe reusable pieces of a user interface called **components**.

```jsx
function WelcomeCard() {
  return <h1>Come build with us</h1>;
}
```

`WelcomeCard` is a component. Its name begins with a capital letter. The HTML-like notation is **JSX**: a way to describe an interface inside JavaScript.

## Remember changing values

**State** is data a component remembers between renders. `useState(0)` starts the count at zero and gives us a function for changing it.

```jsx
const [attendees, setAttendees] = React.useState(0);
```

When state changes, React updates the displayed result. We don’t need to find the count label and edit its `textContent` ourselves.

```jsx
<button onClick={() => setAttendees(current => current + 1)}>
  Join the meetup
</button>
```

The arrow function runs when the button is clicked. The updater receives the previous value and returns the next one.

## Your turn

Complete the button’s `onClick` handler in `MeetupCard`. Each click should add one attendee. Run your card, try the button, and check it.

Why do we pass a function to `onClick` instead of calling the update while the component renders?

## Where this leads

We’ll use React for websites and progressive web apps. **React Native** uses the same component, props, and state ideas to build mobile interfaces, with native components such as `View`, `Text`, and `Pressable` in place of HTML elements.

Once JavaScript feels familiar, TypeScript can help describe component **props** and catch mismatched values. You won’t need it to understand this first card.
