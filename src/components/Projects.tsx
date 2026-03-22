import { Reveal } from "./Reveal";
import { site } from "../site";

function isExternalHref(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function Projects() {
  return (
    <section
      id="projects"
      className="py-16 lg:py-24"
      aria-labelledby="projects-heading"
    >
      <Reveal>
        <div className="mb-10 max-w-lg">
          <h2
            id="projects-heading"
            className="font-display text-3xl font-medium tracking-[-0.02em] sm:text-4xl"
          >
            Projects
          </h2>
          <p className="mt-2 text-base text-base-content/70">
            Selected work and experiments — update listings in{" "}
            <code className="rounded bg-base-200 px-1.5 py-0.5 text-sm text-base-content/80">
              src/site.ts
            </code>
            .
          </p>
        </div>
      </Reveal>
      <ul className="grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
        {site.projects.map((p, i) => {
          const external = isExternalHref(p.href);
          return (
            <li key={p.title}>
              <Reveal delayMs={i * 60}>
                <a
                  href={p.href}
                  aria-label={p.label}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="card group relative flex h-full min-h-[14rem] flex-col overflow-hidden border border-base-300 bg-base-100 p-6 pb-8 shadow-none transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
                >
                  <span
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden
                  />
                  <span className="relative z-[1] text-xs font-medium uppercase tracking-wider text-base-content/60">
                    {p.meta}
                    {external ? (
                      <span className="ml-2 text-[0.65rem] font-normal normal-case text-base-content/50">
                        ↗
                      </span>
                    ) : null}
                  </span>
                  <h3 className="relative z-[1] mt-2 font-display text-xl font-medium tracking-[-0.02em] transition-colors group-hover:text-primary">
                    {p.title}
                  </h3>
                  <p className="relative z-[1] mt-2 flex-1 text-sm text-base-content/70">
                    {p.description}
                  </p>
                  {"tags" in p && p.tags && p.tags.length > 0 ? (
                    <ul
                      className="relative z-[1] mt-4 flex flex-wrap gap-1.5"
                      aria-label="Technologies"
                    >
                      {p.tags.map((t) => (
                        <li
                          key={t}
                          className="rounded-full bg-base-200 px-2 py-0.5 text-[0.7rem] font-medium text-base-content/80"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <span
                    className="relative z-[1] mt-6 inline-block text-xl text-primary transition-transform duration-300 group-hover:translate-x-1.5"
                    aria-hidden
                  >
                    →
                  </span>
                </a>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
