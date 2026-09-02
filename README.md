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

## Product scope

The tracker uses five stages: first filter, meet-up, task or senior review,
final interview or team sync, and offer. It also records version history and
turns interview feedback into improvement actions for future applications.
