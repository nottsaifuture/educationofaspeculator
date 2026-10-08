# The Education of a Speculator — English Study Library

An interactive English learning companion inspired by Victor Niederhoffer's *The Education of a Speculator*.

Explore 48 lessons in eight learning modules and 16 chapter guides. Every lesson includes an extended sourced real-world case: background, a three-stage narrative, outcome and aftermath, a lesson-specific analysis, and a reflection question. Eleven events and research examples are examined from different angles.

Use the **繁體中文（香港） / English** button to switch the whole learning library, including quizzes, cases, chapter guides, and downloads. Language preference, bookmarks and progress are saved locally and shared between the language versions.

The writing consists of original summaries, interpretation, and practical learning exercises. Chapter labels are descriptive English translations of the Chinese edition. The website distinguishes book context from additional examples and exercises.

## Interactive learning

- Three slider experiments explore capital exposure, expected net payoff and observation counts. These use illustrative assumptions, not market predictions.
- Browse eleven documented cases in the home-page spotlight.
- Filter lessons by module or reading status, and expand or collapse each module.
- Each lesson offers an experiment and a private reflection notebook. Notes are stored in the browser, shared between language versions, and removed if browser data is cleared.
- Tabs support keyboard navigation and the design respects reduced-motion preferences.

## Visual learning

Every lesson pairs one of 17 chapter/opening illustrations with a separate illustration beside its real-world case. The 16 chapter cards each have a distinct cover. Eleven case illustrations are shared across the 48 lessons. A home-page visual shelf and accessible image viewer let readers explore the theme, use arrow keys to browse and jump to a related lesson. Module cards and the other pages also include relevant artwork. Images are labelled as AI-generated concepts, not historical photographs. Eight hypothetical decision scenarios, bilingual feedback, keyboard-accessible recall cards, in-page shortcuts and an unread-lesson picker make the library more interactive.

Artwork prompts and generation details are saved in `assets/art/prompts.json` and `assets/art/chapter-prompts.json`. Website assets use compressed WebP files.

## Case charts

Four documented cases include selectable bar charts and accessible data tables: LTCM (capital normalised from its reported August loss), the psychology replication project, Buffett’s fund wager, and the two Deep Blue matches. Captions distinguish reported figures from calculations and explain limitations.

## Education and privacy

The About page explains educational use, investment risks, independent status and third-party copyright. It also explains local browser storage, shared-device access, deleting saved data, GitHub Pages IP logging and external links. There are currently no accounts, payment forms, analytics scripts or advertising trackers. Update this notice when the site’s data practices change.

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
- `chapter-art.js`: chapter artwork, thematic captions and keyboard-accessible image viewer
- `visual.js`: illustrations, decision scenarios, recall cards and lesson discovery
- `assets/art/`: generated case illustrations and their prompt set
- `case-charts.js`: historical case charts and data tables
- `experience.js`: learning experiments, filters, case browsing and reflection notebooks
- `app.js`: navigation, search, quizzes, and browser storage
- `content.js`: lesson and chapter content
- `content-zh-HK.js`: Hong Kong Traditional Chinese learning edition
- `study-notes.json` and `study-notes.txt`: downloadable learning materials
- `study-notes-zh-HK.json` and `study-notes-zh-HK.txt`: Chinese learning materials
