# A page that welcomes people

Your club has exciting plans, but new members need two things: **clear announcements** and **a simple way to express interest**. You will build both in one small website called **Club Connect**.

By the end, someone can read the club news, choose an interest, and see a personal confirmation. This is a practice signup, so use made-up details. The page will not send or save anyone's information.

## What you will build

- An announcement area with two useful updates.
- A signup form with a first name, practice email, and interest.
- A layout that stays readable on a narrow screen.
- A confirmation message that changes when someone submits the form.

The four steps use **one shared draft**. Moving to the next step keeps your code. Start with **Run code** to see the starter, then make one small change at a time.

## 1. Read the starter like a map

The file has three parts: **HTML** describes the page, the `<style>` section will hold **CSS**, and the `<script>` section will hold **JavaScript**. Keeping them together makes this first project easy to run and download.

Find the `<header>`, `<main>`, and `<footer>`. Inside `<main>`, the announcements and signup each have a `<section>`. Each update uses an `<article>` because it is a complete piece of news.

## 2. Add a second announcement

Copy the first `<article class="announcement">` and place the copy beneath it. Give it a new `<h3>` and useful details. A reader should know **what is happening** and **what to do next**.

```html
<article class="announcement">
    <h3>Design a club sticker</h3>
    <p>Bring a sketch to our next meetup. We will choose a design together.</p>
</article>
```

Change the club name and news if you like. Keep the existing IDs so the walkthrough's checks can find your page sections.

## 3. Finish the signup fields

The first-name input is already there. Add these fields before the submit button:

```html
<label for="member-email">Practice email</label>
<input id="member-email" name="email" type="email" required>

<label for="member-interest">What would you like to try?</label>
<select id="member-interest" name="interest" required>
    <option value="">Choose an interest</option>
    <option value="building">Building a robot</option>
    <option value="coding">Coding a robot</option>
    <option value="design">Designing a team logo</option>
</select>
```

A **label** tells someone what a field means. Its `for` value matches the input's `id`, so clicking the label focuses the field. `required` asks the browser to reject an empty answer. `type="email"` checks a basic email format; it does not prove that an address exists.

## Run, inspect, explain

Run the page and click each label. Try an empty signup and an email without `@`. The browser should ask you to fix the input. A successful signup message comes in Step 3.

Choose **Check this step** to inspect the two announcements, form fields, and labels. Then explain: why is a visible label more useful than a placeholder alone?

Need a refresher? [Review the HTML lesson](#/course/mobile-app-dev/lesson/html), then return to this project from **Mini-projects**.
