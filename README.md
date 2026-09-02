# STET Studio

Marketing site for [stet.ng](https://stet.ng) — strategic brand architecture for growth-stage Nigerian businesses.

## Stack

- Vite + React + TypeScript
- React Router
- Tailwind CSS
- Deployed to GitHub Pages via `.github/workflows/deploy.yml`

## Local

```bash
npm install
npm run dev
```

## Production notes

- Contact form posts to Web3Forms from `src/pages/Contact.tsx`.
- `logo.png` and `og-image.png` live at the repo root and are copied into `dist/` during deploy.
- GitHub Pages has no server rewrite, so the workflow copies `dist/index.html` to `dist/404.html` so client routes survive refresh.
