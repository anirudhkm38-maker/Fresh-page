# Fresh Page

A calm single-page website for Anirudh, an engineer from Bangalore — part personal portfolio, part tiny tool: **Fresh Page** is a 3-minute daily reset for anyone carrying work stress. Speak it out, let it go, begin again tomorrow.

## What's inside

- `frontend/` — React (Create React App + Tailwind + framer-motion + lenis). The whole site: the four-flavor reset tool (daily, Sunday night, first week, for managers), the portfolio timeline, "My Year in 12 Small Wins", and the contact section.
- `backend/` — the Emergent FastAPI template. **Fresh Page doesn't use it** — the tool stores nothing on purpose.
- `frontend/public/demo-video.mp4` — the "See it in action" screen recording (voice denoised, compressed for phones).
- `frontend/public/og-image.jpg` — the social share card.
- `frontend/public/favicon.svg` — two overlapping circles: the brand mark.

## The privacy promise

Nothing you write in the reset is ever saved. No database, no localStorage, no cookies, no analytics on your words — text lives in memory only and clears when the flow ends.

## Run it locally

```bash
cd frontend
cp .env.example .env   # set REACT_APP_BACKEND_URL if you ever add a backend
yarn install
yarn start
```

Opens on http://localhost:3000. That's it — there is no backend to start.

## Credits

Built with Wispr Flow and Emergent.
