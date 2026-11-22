# FE Civil Prep 4.0 — exam-style practice update

This is an independently developed, offline-capable educational website for PC and iPhone. It is **not affiliated with NCEES or PrepFE**. No licensed or proprietary NCEES questions or handbook pages are bundled.

## Included

- **3,106 built-in questions**: all 3,000 questions from v3 are retained under their original IDs, plus 106 additional exam-style practice questions.
- Coverage across all **14 FE Civil knowledge areas**, with an approximately NCEES-weighted 110-question / 320-minute simulated exam.
- A 20-question / 60-minute timed study session and custom practice by subject, difficulty, or recently added exam-style problems.
- **84 new standalone numerical/scenario practice items** generated from **42 problem families** (two cases per family) plus **22 alternative-format items**. Some are distinct calculations and others are deliberate variations. All new content is original.
- Five supported answer formats: single-answer multiple choice, multiple-answer selection, numerical-entry (with tolerance), point-and-click diagram regions, and drag-to-order (with up/down controls for accessibility and iPhone).
- Original vector-style SVG diagrams for beams, trusses, soil layers, pipe reducers, water gates, survey layouts, pumps, and moment arms.
- Worked solutions and an exam-fidelity audit screen, accessible from the app dashboard or question library.
- An NCEES FE Reference Handbook **10.6 reference audit**: 83 of the 106 added items have inspected printed-page pointers; 23 items cover basic concepts/procedures not directly tabulated in the handbook. The older 3,000 questions still have broad, unverified topic references, not individually audited page numbers. An additional structural QA check compared 2,162 legacy numeric answer values against their selected options and found zero discrepancies; this does not independently validate the underlying calculations. The handbook is **not** included in the app due to NCEES copyright.

## What this update does NOT validate

Question difficulty has **not** been benchmarked independently against officially released NCEES questions or actual exam statistics. The "Easy / Medium / Hard" labels are instructional heuristics, not a scientifically calibrated predictor of FE exam difficulty or passing likelihood. The older 3,000 questions include many numerical variations of underlying templates and have not been individually peer-reviewed. NCEES also does not publish every item from live exams, so exact likeness cannot be guaranteed.

## UPDATE EXISTING GITHUB PAGES WEBSITE (recommended)

1. On your currently installed FE Civil Prep iPhone app, visit **Settings & backup → Export complete backup**. Save the JSON file securely in Files. Back up from the device that contains your scores.
2. On the PC, download and extract `FE_Civil_Prep_v4_GitHub_Update.zip`.
3. Open **GitHub Desktop** (https://desktop.github.com/) and clone your EXISTING `fe-civil-prep` repository. You do not need a new GitHub repository, Netlify account, or new hosting setup.
4. Copy the extracted updated files (`app.js`, `questions.json`, `styles.css`, `sw.js`, `README.md`, and optional `quality_audit.json`) into the local repository folder, replacing the old copies.
5. In GitHub Desktop, **Commit** the changed files and **Push origin**. GitHub Pages will redeploy your existing site automatically.
6. When GitHub Pages reports deployment complete, open `https://shalaxii.github.io/fe-civil-prep/` in Safari on iPhone and refresh; close and reopen the Home Screen web app. You should see 3,106 questions. The service worker cache is now v4, but it may take a fresh visit/relaunch for the update to activate.
7. Do not remove the Home Screen app or clear website data: existing saved sessions are stored locally. The existing storage key, session shape, and all older question IDs are preserved, but a backup is the safest precaution.

If you're already comfortable with git commands, clone/pull your existing repo, copy the updated files, `git add`, `git commit`, then `git push`.

Note: GitHub's browser-based "Upload files" sometimes rejects overwriting same-named files; using GitHub Desktop is more reliable for this multi-file update.

## NEW INSTALLATION

Use `FE_Civil_Prep_v4_Full_iPhone_App.zip`, extract its contents, upload the contents (not a parent folder) to your `fe-civil-prep` repository, then configure **Settings → Pages → Deploy from a branch → main → /(root)**. Open the live Pages address in iPhone Safari → Share → Add to Home Screen.

## STUDY

- Start with **Practice → Try a 20-question exam-style set** to focus on the new detailed questions.
- Go to **Exams → 110-question full simulation** for the subject-balanced timed mock test. It intentionally includes every supported answer format; this is a teaching choice, not a claimed official proportion of alternative items.
- Under **Question Library → Exam fidelity & handbook audit**, review included question format counts, page checks, and acknowledged limits.
- Multiple-correct/numerical/diagram/order questions: press **Check my answer** during untimed practice. During timed exams, answers remain hidden until submission. Tap numbered diagram locations; on iPhone, use the arrow controls to reorder drag/drop items.

## SOURCES (not bundled)

- NCEES FE Civil specifications: https://ncees.org/wp-content/uploads/FE-Civil-CBT-specs-1.pdf
- NCEES official FE exam page: https://ncees.org/exams/fe-exam/
- NCEES alternative item formats: https://ncees.org/computer-based-testing-cbt/
- Official FE Reference Handbook download: https://help.ncees.org/article/87-ncees-exam-reference-handbooks

## CHANGELOG

v4.0: added 106 exam-style questions, original diagrams, four alternative-format answer types, checked handbook references for the new material, improved exam item mix, improved scoring and review of multiple-answer types. The existing v3 original question bank and saved-data key remain unchanged.
