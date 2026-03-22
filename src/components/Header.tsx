import clsx from "clsx";
import { useScrollHeader } from "../hooks/useScrollHeader";
import { site } from "../site";
import { ThemeToggle } from "./ThemeToggle";

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
        className="mx-auto flex min-h-[4.25rem] max-w-content flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 sm:px-6 lg:px-10"
        aria-label="Primary"
      >
        <a
          href="#"
          className="text-sm font-semibold tracking-tight text-base-content transition-colors hover:text-primary"
        >
          {site.nameShort}
        </a>
        <div className="flex w-full min-w-0 flex-wrap items-center justify-end gap-3 sm:w-auto sm:flex-1 sm:gap-4 md:gap-6">
          <ul className="flex flex-1 list-none flex-wrap justify-end gap-x-4 gap-y-1 p-0 m-0 sm:gap-x-6 md:gap-x-8">
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
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
