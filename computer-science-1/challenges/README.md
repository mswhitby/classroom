# Python Challenge Lab — website source

These files implement the student-facing [Python challenge lab](https://www.mswhitby.com/computer-science-1/challenges/) for the October 26 assignment.

- `index.html`, `challenges.css`, `challenges.js`: interactive interface and public-example checker.
- `data-1.js`–`data-4.js`: bundled copies of 24 question descriptions, Python starters, published examples, and three skills guides.
- `../python-worker.js`: the shared Python-in-browser worker from the foundations prototype.
- `../../challenges/catalog.json` and `../../challenges/assignments/`: structured challenge-bank metadata and assignment definitions.
- `../../challenges/bank/`: Markdown and Python files for reuse and instructor editing.

**Deployment:** The school allows `www.mswhitby.com`, but not `github.io`. A matching copy of the files in this directory is currently deployed under `mswhitby/classroom/computer-science-1/challenges/`. The shared `python-worker.js` is already deployed one directory up. To update the website, synchronize changed files from here into the `classroom` repository.

**Submission:** Run and Check execute published practice examples locally. To earn official weekly points, students still fork `mswhitby/python_problems_20261026`, copy their solution into the matching `solution.py`, commit, and open/update their PR. The private/hidden grading cases and leaderboard remain in the weekly challenge repository, never in the browser bundle.

The browser's saved drafts and practice checkmarks are device-local; do not treat these values as authoritative grading data.
