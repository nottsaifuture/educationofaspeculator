# The Education of a Speculator — English Study Library

An interactive English learning companion inspired by Victor Niederhoffer's *The Education of a Speculator*.

Explore 48 lessons in eight learning modules and 16 chapter guides. The library includes search, self-check quizzes, bookmarks, reading progress, and downloadable study notes.

The writing consists of original summaries, interpretation, and practical learning exercises. Chapter labels are descriptive English translations of the Chinese edition. The website distinguishes book context from additional examples and exercises.

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
- `style.css`: responsive layout and visual styling
- `app.js`: navigation, search, quizzes, and browser storage
- `content.js`: lesson and chapter content
- `study-notes.json` and `study-notes.txt`: downloadable learning materials
