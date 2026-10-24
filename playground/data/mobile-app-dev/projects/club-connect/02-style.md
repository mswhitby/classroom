# Make it comfortable to use

Your HTML now answers what is on the page. **CSS** answers how it is arranged and presented. Keep the same draft from Step 1 and add rules inside its `<style>` element.

## 1. Set a readable foundation

```css
* { box-sizing: border-box; }
body {
    margin: 0;
    font-family: system-ui, sans-serif;
    line-height: 1.6;
    color: #202b38;
    background: #f2f6fa;
}
.page-shell {
    max-width: 960px;
    margin: 0 auto;
    padding: 24px;
}
```

`max-width` prevents long lines from stretching across a large screen. `margin: 0 auto` centers that container. `box-sizing: border-box` includes padding and borders in an element's assigned width.

## 2. Give the news and form some space

```css
.club-grid { display: grid; gap: 24px; }
.announcement, #signup {
    padding: 20px;
    background: white;
    border: 1px solid #c7d5de;
    border-radius: 12px;
}
.announcement + .announcement { margin-top: 16px; }
label { display: block; margin: 16px 0 4px; font-weight: 600; }
input, select, button {
    width: 100%;
    font: inherit;
    padding: 10px;
    border: 1px solid #728797;
    border-radius: 6px;
}
button { margin-top: 20px; background: #185a4b; color: white; }
```

The **class selector** `.announcement` can style several cards. The **ID selector** `#signup` targets the signup section. Try changing a color or the spacing and predict what will change before you run it.

## 3. Start narrow, then make room

```css
nav { display: flex; flex-wrap: wrap; gap: 16px; }
@media (min-width: 760px) {
    .club-grid { grid-template-columns: 1fr 1fr; }
}
```

The sections start in one column. When the **preview page** is at least 760 pixels wide, the media query gives them two equal columns. A narrow editor pane may keep the preview in one column even on a large monitor. Expand the workspace or download the page to try a wider view.

## 4. Make keyboard focus visible

```css
:focus-visible {
    outline: 3px solid #b34d0a;
    outline-offset: 3px;
}
```

Press **Tab** through the links and fields in the preview. You should always know where focus is. Avoid removing outlines without providing a visible replacement.

## Test your decisions

Run the page. Try a narrow preview, longer announcement text, and a longer club name. Is everything still readable without sideways scrolling?

**Check this step** looks for a constrained page width, spaced grid, card padding and borders, and fields that fit the current preview. Color contrast and how comfortable it feels still need your judgment.

Need a refresher? [Review the CSS lesson](#/course/mobile-app-dev/lesson/css).
