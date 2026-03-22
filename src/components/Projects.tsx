import { useCallback, useEffect, useMemo, useState } from "react";
import { Reveal } from "./Reveal";
import { site } from "../site";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetailModal, type SiteProject } from "./ProjectDetailModal";

const PER_PAGE = 3;

export function Projects() {
  const allProjects = useMemo(() => [...site.projects], []);
  const totalPages = Math.max(1, Math.ceil(allProjects.length / PER_PAGE));

  const [page, setPage] = useState(1);
  const [detailProject, setDetailProject] = useState<SiteProject | null>(null);

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
      {detailProject ? (
        <ProjectDetailModal
          key={`${detailProject.title}-detail`}
          project={detailProject}
          onClose={() => setDetailProject(null)}
        />
      ) : null}

      <Reveal>
        <div className="mb-8 max-w-lg sm:mb-10">
          <h2
            id="projects-heading"
            className="section-heading-3d font-display text-3xl font-medium tracking-[-0.02em] sm:text-4xl"
          >
            Projects
          </h2>
          <p className="mt-2 text-base text-base-content/70">
            Selected work and experiments — Roblox profile:{" "}
            <a
              href={site.robloxProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline decoration-primary/30 underline-offset-2 transition-colors hover:decoration-primary"
            >
              Nyakorare
            </a>
            . Edit listings in{" "}
            <code className="rounded bg-base-200 px-1.5 py-0.5 text-sm text-base-content/80">
              src/site.ts
            </code>
            .
          </p>
        </div>
      </Reveal>

      <ul className="grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, i) => {
          const globalIndex = (page - 1) * PER_PAGE + i;
          return (
            <li key={`${p.title}-${globalIndex}`} className="flex h-full min-h-0">
              <Reveal delayMs={i * 60} className="h-full w-full min-w-0">
                <ProjectCard
                  project={p}
                  onOpenDetail={setDetailProject}
                />
              </Reveal>
            </li>
          );
        })}
      </ul>

      <Reveal>
        <div
          role="region"
          aria-labelledby="uptime-heading"
          className="elev-panel-soft mx-auto mt-8 flex max-w-xl flex-col gap-3 rounded-xl border border-base-300/80 bg-gradient-to-br from-base-100 to-base-200/40 p-3 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:p-4"
        >
          <div className="min-w-0 flex items-start gap-3">
            <span
              className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary"
              aria-hidden
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </span>
            <div>
              <h3
                id="uptime-heading"
                className="font-display text-sm font-semibold tracking-tight text-base-content"
              >
                Project uptime
              </h3>
              <p className="mt-0.5 text-xs leading-snug text-base-content/60">
                Live service status on UptimeRobot — opens in a new tab (embedding is
                blocked by their site policy).
              </p>
            </div>
          </div>
          <a
            href={site.uptimeStatusUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-3d-outline shrink-0 rounded-full border-base-300 bg-base-100 px-4 font-medium normal-case hover:border-primary/40 hover:bg-primary/10 sm:min-h-10 sm:px-5"
          >
            View status dashboard
            <span aria-hidden className="ml-1">
              ↗
            </span>
          </a>
        </div>
      </Reveal>

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
              className="btn btn-sm btn-3d-outline min-w-[5.5rem] border-base-300 bg-base-100 sm:min-w-0"
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
              className="btn btn-sm btn-3d-outline min-w-[5.5rem] border-base-300 bg-base-100 sm:min-w-0"
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
