# FE Civil Prep v2.0 — independent, offline-friendly FE Civil practice

**672 included original FE Civil questions**, covering all 14 subjects. These are **84 original standalone questions plus 588 original parameterized numerical/scenario variations** (84 template families × 7 variations). The bank is not copied from the user's FE practice book. Variations change problem values or scenario context; 672 does **not** mean 672 unrelated concepts. Subject coverage is introductory/intermediate and does not cover every NCEES subtopic equally. Explanations are short worked solutions with **subject-level handbook pointers, not page-level citations**. This is an independent educational product, not PrepFE or NCEES.

### Highlights

- 10 / 20 / 40 untimed practice sets, optional easy/medium/hard filters, subject-specific drills and weaker-subject practice.
- **20-question / 60-minute**, **40-question / 120-minute**, and **110-question / 320-minute** timed exams. Timed results show worked explanations only after the test is submitted.
- Full-length exams use an **approximate** NCEES subject distribution (110 counts: 9,5,6,9,4,7,5,6,6,11,11,11,11,9), not a claim to precisely reproduce NCEES item mix or alternative item types.
- Bookmarks, missed-question re-practice, flashcards, subject accuracy, seven-day activity chart, session history.
- Local-first storage, no user account, downloadable backups and CSV scores.
- **Optional** import of a personal JSON question pack; the practice book is **not needed**, and no book PDF or private questions are included in the public website files.

### Installing to a new GitHub Pages site

1. Make a **public** GitHub repository named `fe-civil-prep` (keep it separate from NutriTrack).
2. Extract the website ZIP and upload the **contents**, not the outer folder. `index.html`, `app.js`, `questions.json`, `topics.json`, `sw.js` and `styles.css` should be at repository root; `icons/` should be a subfolder.
3. Commit all files. Under **Settings → Pages**, select Deploy from a branch, `main`, `/(root)`; save.
4. Open `https://YOUR-USERNAME.github.io/fe-civil-prep/` in Safari on iPhone, Share → Add to Home Screen, then Add.

### Updating an existing FE Civil Prep deployment

1. **Back up progress first**: FE Civil Prep → Settings & backup → Export complete backup.
2. Delete neither your GitHub repository nor Home Screen app. From your repository upload and replace `app.js`, `questions.json`, `styles.css`, `index.html`, `sw.js`, `manifest.webmanifest`, `topics.json`, `README.md`, `START_HERE.txt`, and `icons/` items if changed. Commit.
3. Once Pages finishes publishing, open the website in Safari and refresh. Close/relaunch the Home Screen app to load the new question bank.
4. Your old saved history (localStorage `fecivilprep:local:v1`) is intentionally kept. Browser data is stored separately on iPhone and PC.

### Data and limitations

- No automatic synchronization between PC and phone: export/restore your JSON backup.
- The iPhone app requires HTTPS hosting to install with its service worker; simply opening `index.html` locally is not sufficient.
- Real FE exams can contain alternative item types and mix SI/USCS units. This app currently tests four-choice questions and uses primarily SI units, so it is **not a complete replica**.
- Questions were checked with programmatic formatting, duplicate-ID/option validation, and sample independent calculation checks; study material should still be corroborated against the official NCEES FE Reference Handbook.
- Official reference: https://ncees.org/exams/fe-exam/ and https://ncees.org/wp-content/uploads/FE-Civil-CBT-specs-1.pdf (NCEES FE Civil specs effective July 2020).
