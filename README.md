# nyakorare.github.io

Personal portfolio (Vite + React + TypeScript).

## Stack

- **React** (UI)
- **Tailwind CSS** (layout, typography, utilities)
- **DaisyUI** (themes, buttons, cards on top of Tailwind)
- **Animate.css** (scroll-in animations, used with Intersection Observer)

## Local development

```bash
npm install
npm run dev
```

Build preview:

```bash
npm run build
npm run preview
```

## Free deploy (GitHub Pages)

This repo name (`username.github.io`) publishes to `https://nyakorare.github.io/` at the site root, so Vite `base` is set to `/`.

1. Push this repo to GitHub on branch **`main`** or **`master`** (the workflow listens to both).
2. In the repo on GitHub: **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).
4. Open the **Actions** tab and confirm the **Deploy to GitHub Pages** workflow run succeeds. The site URL appears in the workflow summary and on the Pages settings page.

First-time setup: GitHub may ask to approve workflow permissions once; accept **Read and write** for Pages if prompted.

If the workflow is missing, ensure `.github/workflows/deploy-pages.yml` is committed and pushed.
