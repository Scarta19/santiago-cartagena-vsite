# Santiago Cartagena — personal site

Landing page for Santiago Cartagena, AI & ML Engineer focused on fraud, risk and high-stakes decision systems.

## Stack

Next.js (App Router, fully static) · TypeScript · Tailwind CSS v4 · Motion · Vercel Analytics.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static production build
npm run lint
```

## Editing content

All copy lives in `src/content/site.ts`, separate from the components in `src/components/`.
Rules: only verifiable facts, no invented metrics, clients or testimonials, and no proprietary employer details.

Pending placeholders in `src/content/site.ts`:

- `contact.linkedin`: confirm the exact LinkedIn URL.
- `contact.scheduling`: add a Cal.com or Calendly link to show "Book a 30-min call".
- `contact.resume`: add `public/resume.pdf` and set it to `"/resume.pdf"` to show the resume buttons.

## Deploy

Import this repository in Vercel (framework preset: Next.js, no settings needed). Optional env var:
`NEXT_PUBLIC_SITE_URL` set to the custom domain once there is one. Enable Web Analytics in the Vercel project to
record the CTA click events.
