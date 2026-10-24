# Make the signup respond

The form looks ready, but clicking its button does not yet give someone useful feedback. **JavaScript** can respond to the form's `submit` event and update the page.

Keep your HTML and CSS. Put the following work inside the `<script>` element near the end of your file.

## 1. Find the form and its message

```javascript
const signupForm = document.querySelector('#club-signup');
const signupMessage = document.querySelector('#signup-message');
```

`querySelector` finds the first matching element. These variables hold references to the form and the message paragraph already in your HTML.

The script appears after the HTML so those elements exist by the time the script runs.

## 2. Listen to the form

```javascript
signupForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Read the fields and update the message here.
});
```

Listen to the **form**, rather than just the button's click. That also covers submitting with **Enter**. `preventDefault()` keeps the browser from navigating away to submit the form.

The browser checks `required` fields and the email format before a normal form submission reaches this handler. Keep those HTML attributes; JavaScript should build on them.

## 3. Read the values inside the handler

Replace the comment inside the handler with:

```javascript
const firstName = document.querySelector('#member-name').value.trim();
const interest = document.querySelector('#member-interest');
const interestLabel = interest.options[interest.selectedIndex].text;

signupMessage.textContent = `Thanks, ${firstName}! We will help you get started with ${interestLabel.toLowerCase()}.`;
```

The backticks make a **template literal**. `${firstName}` inserts the current name. The selected option's text gives us a friendly description instead of a short internal value such as `building`.

Use **`textContent`** for this message. It treats a name as text, including characters such as `<`, rather than turning it into HTML.

The message paragraph has `role="status"` and `aria-live="polite"`. These help assistive technology announce the updated message without moving the person's focus away from the form.

## Test a real interaction

1. Run your code.
2. Enter a made-up first name and an address such as `alex@example.com`.
3. Choose an interest and submit.
4. Change both the name and interest, then submit again.

The confirmation should use the **new** values each time. A message hard-coded to one person's name will not do that.

**Check this step** tries two fictional signups and verifies both names and selected interests. It also checks that submission stays on the page. Those sample signups will appear in the preview after the check.

Need a refresher? [Review the JavaScript lesson](#/course/mobile-app-dev/lesson/javascript).
