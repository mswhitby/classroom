# Make a readable event card

## Give the same information a different feel

You already have a structured event announcement. Now make it easier to scan on a phone. **CSS** controls presentation: color, space, size, and layout.

```css
.event-card {
  padding: 1.5rem;
  border-radius: 0.5rem;
}
```

The **selector** `.event-card` chooses elements with that class. Each **declaration** pairs a property with a value. Here, `padding` adds room inside the card. A **class** can be reused on several elements.

## Think inside the box

Every element occupies a box. **Padding** sits inside its border; **margin** separates it from nearby elements. Set `box-sizing: border-box` so a width includes the padding and border.

```css
.event-card {
  width: 100%;
  max-width: 30rem;
  margin: 2rem auto;
}
```

The card fills a small screen without growing endlessly on a large one. `rem` sizes relate to the page’s base font size, which helps respect a reader’s settings.

## Your turn

Style the provided card. Give it padding, a border, a maximum width, and a background color. Keep the text readable against that background. Run your changes and resize the preview by changing your browser width.

The check looks for the requested CSS properties. You decide whether the result is easy to read.

## Try another version

Change just the padding first. Then just the maximum width. What changed each time? Explain which version would be easiest to read on your phone.
