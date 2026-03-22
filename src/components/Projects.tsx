import { useCallback, useEffect, useMemo, useState } from "react";
import { Reveal } from "./Reveal";
import { site } from "../site";

const PER_PAGE = 3;

function isExternalHref(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function Projects() {
  const allProjects = useMemo(() => [...site.projects], []);
  const totalPages = Math.max(1, Math.ceil(allProjects.length / PER_PAGE));

  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage((p) => Math.min(p, totalPages));
  }, [totalPages]);

  const visible = useMemo(() => {
    const start = (page - 1) * PER_PAGE;
    return allProjects.slice(start, start + PER_PAGE);
  }, [allProjects, page]);

  const goPrev = useCallback(() => {
    setPage((p) => Math.max(1, p - 1));
  }, []);

  const goNext = useCallback(() => {
    setPage((p) => Math.min(totalPages, p + 1));
  }, [totalPages]);

  const showPagination = allProjects.length > PER_PAGE;

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 lg:py-24"
      aria-labelledby="projects-heading"
    >
      <Reveal>
        <div className="mb-8 max-w-lg sm:mb-10">
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
        {visible.map((p, i) => {
          const external = isExternalHref(p.href);
          const globalIndex = (page - 1) * PER_PAGE + i;
          return (
            <li key={`${p.title}-${globalIndex}`}>
              <Reveal delayMs={i * 60}>
                <a
                  href={p.href}
                  aria-label={p.label}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="card group relative flex h-full min-h-[12rem] flex-col overflow-hidden border border-base-300 bg-base-100 p-5 pb-7 shadow-none transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl sm:min-h-[14rem] sm:p-6 sm:pb-8"
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
                  <h3 className="relative z-[1] mt-2 font-display text-lg font-medium tracking-[-0.02em] transition-colors group-hover:text-primary sm:text-xl">
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

      {showPagination ? (
        <nav
          className="mt-8 flex w-full flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center sm:justify-between"
          aria-label="Projects pagination"
        >
          <p className="text-center text-sm text-base-content/60 sm:text-left">
            Showing{" "}
            <span className="font-medium text-base-content">
              {(page - 1) * PER_PAGE + 1}
            </span>
            –
            <span className="font-medium text-base-content">
              {Math.min(page * PER_PAGE, allProjects.length)}
            </span>{" "}
            of{" "}
            <span className="font-medium text-base-content">
              {allProjects.length}
            </span>
            <span className="sr-only">, </span>
            <span className="hidden sm:inline"> · </span>
            <span className="block sm:inline">Page {page} of {totalPages}</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-end">
            <button
              type="button"
              className="btn btn-sm min-w-[5.5rem] border-base-300 bg-base-100 sm:min-w-0"
              onClick={goPrev}
              disabled={page <= 1}
              aria-disabled={page <= 1}
            >
              Previous
            </button>
            <div
              className="flex flex-wrap justify-center gap-1.5"
              role="group"
              aria-label="Page numbers"
            >
              {Array.from({ length: totalPages }, (_, idx) => {
                const n = idx + 1;
                const active = n === page;
                return (
                  <button
                    key={n}
                    type="button"
                    className={[
                      "btn btn-sm min-h-9 min-w-9 px-0",
                      active
                        ? "btn-primary pointer-events-none"
                        : "btn-ghost border border-transparent hover:border-base-300",
                    ].join(" ")}
                    onClick={() => setPage(n)}
                    aria-label={`Page ${n}`}
                    aria-current={active ? "page" : undefined}
                  >
                    {n}
                  </button>
                );
              })}
            </div>
            <button
              type="button"
              className="btn btn-sm min-w-[5.5rem] border-base-300 bg-base-100 sm:min-w-0"
              onClick={goNext}
              disabled={page >= totalPages}
              aria-disabled={page >= totalPages}
            >
              Next
            </button>
          </div>
        </nav>
      ) : null}
    </section>
  );
}
