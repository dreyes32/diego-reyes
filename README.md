# Diego Reyes — Portfolio

Personal site for AI engineering, machine learning, computer vision, and research work.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- React Three Fiber

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Update content

All copy lives in `src/content/`:

- `site.ts` — name, positioning, navigation, LinkedIn / GitHub / email, resume flag
- `experience.ts` — roles
- `projects.ts` — featured work and case studies
- `research.ts` — research entries
- `skills.ts` — skill groups and education

Do not invent metrics, repositories, or screenshots. If a field is empty, leave it out of the UI.

## Resume

Place the real PDF at `public/resume.pdf`, then set `resumeAvailable: true` in `src/content/site.ts`.

## Deploy

Live site: [https://dreyesgomez.vercel.app](https://dreyesgomez.vercel.app)
