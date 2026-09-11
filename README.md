# MANIK — Public Website (frontend)

This is the public-facing site. It fetches live data (products, categories,
projects) from the `manik-backend` API — it no longer uses hardcoded sample
data.

## Run it locally

```bash
npm install
cp .env.example .env
```

In `.env`, set `VITE_API_URL` to your backend's URL:
- Local testing: `http://localhost:5000`
- Live: your deployed Render/Railway backend URL

```bash
npm run dev
```

## Deploying to Vercel

In your Vercel project settings → **Environment Variables**, add:

```
VITE_API_URL = https://your-backend-url.onrender.com
```

(or wherever `manik-backend` ends up deployed). Without this set, the site
will show "Couldn't reach the server" instead of real content — that's
expected and by design, not a bug, until the backend is deployed and this
variable points at it.

## Where photos come from now

There are no demo/stock photos left in the code. Every product and project
photo comes from what's uploaded through the **admin dashboard**
(`manik-admin`). Until real photos are added there, the site shows a clean
"Photo pending" placeholder instead of a broken image or a fake stock photo.

## Architecture

- **This repo** — public site, read-only, no login
- **manik-backend** — the API + database this site fetches from
- **manik-admin** — private dashboard where products/projects/quotes are managed

All three are separate projects that work together.
