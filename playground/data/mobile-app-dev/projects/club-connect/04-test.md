# Try it like a new member

You have built a small website with three cooperating parts: **HTML** gives the news and form meaning, **CSS** makes them readable, and **JavaScript** responds to a signup.

Now test the whole experience. A page that works once with one set of details is only the start.

## 1. Make a test table

Before each test, predict what should happen. Then run it and record what actually happens.

| Try this | What should happen? |
| --- | --- |
| Leave all fields blank and submit | Required fields block the signup. |
| Enter a name and `not-an-email` | The email field asks for a valid format. |
| Enter valid details but leave the interest blank | The browser asks for an interest. |
| Submit Alex, `alex@example.com`, and one interest | A confirmation includes Alex and that interest. |
| Change to Jo and choose a different interest | The message updates to Jo and the new interest. |
| Use a name such as `<Alex>` | The characters display as text, without creating an HTML element. |
| Make the preview narrow | Sections stack and fields stay within the page. |
| Navigate with Tab and Shift+Tab | Focus is visible and moves in a sensible order. |

These checks use fictional details only. This page is a demonstration; it does not register anyone for a real club.

## 2. Check the whole project

Choose **Check this step** to run the combined structure, layout, and signup checks. Read each result. If something needs revision, return to the relevant step; your draft follows you.

The automated checks cover selected requirements, not every possible design or accessibility issue. You still need to read the announcements, use the keyboard, and try different widths yourself.

## 3. Personalize it

Pick one extension that fits your club:

- Add a third announcement with a clear next action.
- Change the theme while keeping text and focus indicators easy to see.
- Add another interest and make sure its text appears in the confirmation.
- Write a short welcome message for first-time members.

Keep the walkthrough's existing IDs so its checks can still find your elements.

## 4. Keep and explain your work

Use **Save draft** to keep work on this device. Use **Download index.html** for a copy you can open in a browser or edit in your own IDE. Downloaded work is your backup; browser drafts do not follow you to another computer.

Show a partner your page and explain:

1. Which elements make the two sections meaningful?
2. Which CSS rule changes the layout at a wider size?
3. Why listen for `submit` instead of only `click`?
4. Why use `textContent` for the confirmation?

If you get stuck, open **Compare a finished example** below the walkthrough. Compare one small section at a time, then explain the difference before changing your own code. It is one possible solution, not a required visual design.
