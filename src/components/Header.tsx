import clsx from "clsx";
import { useScrollHeader } from "../hooks/useScrollHeader";
import { site } from "../site";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export function Header() {
  const scrolled = useScrollHeader();

  return (
    <header
      className={clsx(
        "fixed top-0 z-50 w-full transition-[border-color,background-color] duration-300",
        "bg-base-100/75 backdrop-blur-md",
        scrolled && "border-b border-base-300"
      )}
    >
      <nav
        className="mx-auto flex h-[4.25rem] max-w-content items-center justify-between gap-6 px-6 lg:px-10"
        aria-label="Primary"
      >
        <a
          href="#"
          className="text-sm font-semibold tracking-tight text-base-content transition-colors hover:text-primary"
        >
          {site.nameShort}
        </a>
        <ul className="flex list-none gap-8 p-0 m-0">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="group relative text-sm font-medium text-base-content/60 transition-colors hover:text-base-content"
              >
                {label}
                <span
                  className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100"
                  aria-hidden
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
