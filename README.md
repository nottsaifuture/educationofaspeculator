# The Education of a Speculator — English Study Library

An interactive English learning companion inspired by Victor Niederhoffer's *The Education of a Speculator*.

Explore 48 lessons in eight learning modules and 16 chapter guides. Every lesson includes a sourced real-world case, its connection to the lesson, and a reflection question. Eleven events and research examples are examined from different angles.

Use the **繁體中文（香港） / English** button to switch the whole learning library, including quizzes, cases, chapter guides, and downloads. Language preference, bookmarks and progress are saved locally and shared between the language versions.

The writing consists of original summaries, interpretation, and practical learning exercises. Chapter labels are descriptive English translations of the Chinese edition. The website distinguishes book context from additional examples and exercises.

## Interactive learning

- Three slider experiments explore capital exposure, expected net payoff and observation counts. These use illustrative assumptions, not market predictions.
- Browse eleven documented cases in the home-page spotlight.
- Filter lessons by module or reading status, and expand or collapse each module.
- Each lesson offers an experiment and a private reflection notebook. Notes are stored in the browser, shared between language versions, and removed if browser data is cleared.
- Tabs support keyboard navigation and the design respects reduced-motion preferences.

## Run locally

This is a static website with no build step or external dependencies. Serve this directory with any static web server, for example:

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000. Bookmarks and reading progress are saved locally in your browser.

## GitHub Pages

In the repository's Pages settings, choose **Deploy from a branch**, select **main**, and use the **/ (root)** folder.

## Files

- `index.html`: website entry point
- `style.css` and `design.css`: responsive layout and editorial visual styling
- `experience.js`: learning experiments, filters, case browsing and reflection notebooks
- `app.js`: navigation, search, quizzes, and browser storage
- `content.js`: lesson and chapter content
- `content-zh-HK.js`: Hong Kong Traditional Chinese learning edition
- `study-notes.json` and `study-notes.txt`: downloadable learning materials
- `study-notes-zh-HK.json` and `study-notes-zh-HK.txt`: Chinese learning materials
