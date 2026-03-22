# nyakorare.github.io

Personal portfolio (Vite + React + TypeScript).

## Local dev

From the repo root:

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`). **Do not** open `index.html` with Live Server or double‑click the file — the app loads `/src/main.tsx`, which only works through Vite’s dev server.

## GitHub Pages (avoid `main.tsx` / MIME errors)

The live site must be the **built** output in `dist/` (hashed `./assets/*.js`), **not** the repo root `index.html` that references `/src/main.tsx`.

1. **Repository → Settings → Pages → Build and deployment**
2. Set **Source** to **GitHub Actions** (not “Deploy from a branch” with folder `/` or `/root`).
3. Push to **`main`**, **`master`**, or **`dev`** — the workflow builds and deploys `dist/`.

If the console still shows **`main.tsx`**, GitHub is serving the **wrong** HTML. Fix step 2, then re-run the workflow (Actions tab).

## Build preview

```bash
npm run build
npm run preview
```
