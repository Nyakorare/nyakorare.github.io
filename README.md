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

This repo publishes to `https://nyakorare.github.io/`. Vite `base` is **`./`** so the built bundle loads from `./assets/...`.

### Fix: `main.tsx` + “MIME type application/octet-stream”

If DevTools points at **`main.tsx:1`**, the live site is **not** running the production build. The **root** `index.html` is for **development** only; it loads **`/src/main.tsx`**. On GitHub Pages, `.tsx` is served as **`application/octet-stream`**, which browsers reject for `type="module"` scripts.

**Do this:**

1. **Settings → Pages → Build and deployment**
2. Set **Source** to **GitHub Actions** (not **Deploy from a branch**).
3. If you used **Deploy from a branch** with **Folder: / (root)** (or **main** at `/`), that published the **wrong** `index.html` — the one that references `main.tsx`. Switch to **GitHub Actions** as above.
4. Push **`main`** (or **`master`**) so `.github/workflows/deploy-pages.yml` runs. In **Actions**, open **Deploy to GitHub Pages** and confirm it **succeeds**. The live site is the **`npm run build`** output in **`dist/`**, uploaded by the workflow — not the files at the repo root.

`dist` is listed in `.gitignore`; you do **not** need to commit `dist/` when using Actions.

**Locally:** use **`npm run dev`** (Vite compiles TypeScript). Do not rely on **Live Server** or **File → Open** on `index.html` for the app; after a build, use **`npm run preview`**.

### Other script / MIME issues

- After changing `vite.config.ts` `base`, run **`npm run build`** and redeploy via Actions.
- Try a hard refresh or a private window if an old `index.html` is cached without matching `assets/*` files.

### Enable GitHub Actions deploy

1. Push to **`main`** or **`master`**.
2. **Settings → Pages → Source: GitHub Actions** (see above).
3. **Actions** → confirm **Deploy to GitHub Pages** completes; the site URL appears on the run and under **Settings → Pages**.

First-time setup: approve workflow permissions if GitHub asks; grant **Read and write** for Pages when prompted.

Ensure `.github/workflows/deploy-pages.yml` is on the default branch.
