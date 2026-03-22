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

This repo name (`username.github.io`) publishes to `https://nyakorare.github.io/` at the site root. Vite `base` is **`./`** (relative) so `/assets/...` scripts and styles resolve correctly on GitHub Pages (including if you ever use a project URL like `…/repo-name/`).

### “MIME type application/octet-stream” / module script failed

- **Do not** open `dist/index.html` with **File → Open** (`file://`). Browsers block ES modules or mis-detect MIME types. Use `npm run preview` or any local HTTP server after `npm run build`.
- After changing `vite.config.ts` `base`, run **`npm run build`** again and redeploy so `index.html` and hashed `assets/*` files stay in sync.
- If you deploy a **project** site at `https://<user>.github.io/<repo>/` instead of a user site, keep `base: "./"` (current setup) or set `base: "/<repo>/"` explicitly.

1. Push this repo to GitHub on branch **`main`** or **`master`** (the workflow listens to both).
2. In the repo on GitHub: **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).
4. Open the **Actions** tab and confirm the **Deploy to GitHub Pages** workflow run succeeds. The site URL appears in the workflow summary and on the Pages settings page.

First-time setup: GitHub may ask to approve workflow permissions once; accept **Read and write** for Pages if prompted.

If the workflow is missing, ensure `.github/workflows/deploy-pages.yml` is committed and pushed.
