# Student website source

**Approved live school website:** https://www.mswhitby.com/computer-science-1/

This folder contains a mirror of the student website files deployed by `mswhitby/classroom/computer-science-1/`. The school blocks `github.io`, so the custom domain remains the student-facing host.

- `index.html`: shared course hub with Lessons and Challenges routes
- `units/`: all 24 lessons across Units 01–06, concept explanations, public practice checks, Next/Previous navigation
- `challenges/`: 24 alphabetical coding questions with topic/difficulty filters and reciprocal lesson links
- `theme.css` + `theme.js`: independent, free Light/Purple/Dark/Dark Purple palettes saved locally
- `learning-map.js`: curated two-way links from each question to foundational lesson topics
- `python-worker.js`: shared Python-in-browser runtime. It loads Pyodide from a CDN; no changes to that working school setup.

Public example checks are not official student grades. The website has no GitHub login, database, teacher dashboard, journal backend, or hosted sandbox grading yet. Never place student identities or credentials in these public files.

For future edits, change these source files and synchronize the matching paths to the `classroom` repository to publish on the school-approved domain.

**Important:** source lessons, challenge bank, and grading infrastructure are maintained under `../units/`, `../challenges/`, and `../grader/` respectively.
