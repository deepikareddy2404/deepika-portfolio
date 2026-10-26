# Deepika Reddy Seelam — Portfolio (MERN)

A resume-linked portfolio built entirely from real content — no invented
projects, stats, certifications, or links.

## ⚠️ One-time setup: make the contact form actually work

The contact form now sends real emails via Web3Forms (a free service —
50MB/month free tier, no credit card). Without this step, submitting the
form shows a clear "not configured" message instead of pretending to send.

**1. Get a free access key** (takes ~30 seconds, no account needed):
   - Go to https://web3forms.com
   - Enter your email address
   - Check your inbox — the access key arrives instantly

**2. Add it to the project:**
   ```bash
   cd client
   cp .env.example .env
   ```
   Open `.env` and paste your key:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your-actual-key-here
   ```

**3. Restart the dev server** if it was already running (`Ctrl+C`, then
`npm run dev` again) — Vite only reads `.env` on startup.

Once set up: when someone submits the form, Web3Forms emails the message
(name, email, content) straight to the inbox you registered — no database,
no backend, no data stored anywhere except in that email.

**If you deploy** (Vercel/Netlify/etc.), add `VITE_WEB3FORMS_ACCESS_KEY` as
an environment variable in your hosting dashboard — `.env` files aren't
deployed, only read locally.

## What's in this version
- GitHub dashboard section removed (plain profile links remain in footer/
  contact/project modals)
- Warm premium color palette, refined cards, scroll-spy nav, side dot nav
- Real profile photo, real resume content throughout
- Working contact form (once the access key above is set)

## Run it locally

```bash
cd client
npm install
npm run dev
```

Visit http://localhost:5173

## Deploy
Static build — works on Vercel, Netlify, or GitHub Pages. Remember to set
the `VITE_WEB3FORMS_ACCESS_KEY` environment variable in your hosting
dashboard after deploying.
