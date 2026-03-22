import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const dist = path.join(root, "dist");
const docs = path.join(root, "docs");

if (!fs.existsSync(dist)) {
  console.error("dist/ is missing. Run: npm run build");
  process.exit(1);
}

fs.rmSync(docs, { recursive: true, force: true });
fs.mkdirSync(docs, { recursive: true });
fs.cpSync(dist, docs, { recursive: true });
console.log("Synced dist/ -> docs/ (ready for GitHub Pages /docs folder deploy)");
