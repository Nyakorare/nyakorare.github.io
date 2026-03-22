import { site } from "../site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-base-300 py-8 text-sm text-base-content/70">
      <p className="m-0">© {year} {site.name}</p>
      <p className="m-0 opacity-75">
        React · Tailwind · DaisyUI · Animate.css
      </p>
    </footer>
  );
}
