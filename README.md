# JobHuntingGround

A privacy-first, local-first workspace for tracking job applications, interview
feedback and the CV, cover-letter and portfolio versions used for each
submission.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Privacy boundary

The public repository contains application code and fictional demo data only.
Real CVs, cover letters, application notes and private URLs must stay in the
ignored `.private/` directory or in browser-local storage. Do not commit those
files. The first version is local-first; use export/import for backup before
moving to another browser or device.

## Two modes

This project has two deliberately separate modes:

### Shareable framework

The GitHub repository is the reusable application framework. It may contain
the UI, data types, import/export behaviour, documentation and fictional demo
records. Other users can clone it and add their own private records.

### Private local workspace

Your personal records live only on your machine in `.private/` and in this
browser's local storage. This includes real applications, CV and cover-letter
references, portfolio URLs, notes, interview feedback and version history.

To load a private dataset locally:

1. Run `npm run dev`.
2. Open the local URL shown by Next.js.
3. Open **Applications** and choose **Import**.
4. Select a private JSON export from `.private/`.

The browser cannot automatically read a Windows folder, so importing is an
explicit local action. Imported records are then persisted in browser storage;
they are not sent to GitHub, Vercel or a project backend.

Before pushing changes, check that private files remain ignored:

```bash
git status --short
git check-ignore -v .private/applications.seed.json
```

Never use `NEXT_PUBLIC_` environment variables for CVs, cover letters, notes,
private links or other sensitive information. Values with that prefix are
included in the browser bundle.

## Product scope

The tracker uses five stages: first filter, meet-up, task or senior review,
final interview or team sync, and offer. It also records version history and
turns interview feedback into improvement actions for future applications.
