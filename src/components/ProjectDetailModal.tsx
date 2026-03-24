import { useEffect, useMemo, useRef, useState } from "react";
import { site } from "../site";

export type SiteProject = (typeof site.projects)[number];

type ProjectDetailModalProps = {
  project: SiteProject;
  onClose: () => void;
};

function isExternalHref(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}

type ProjectItem = {
  readonly title: string;
  readonly description: string;
  readonly meta: string;
  readonly href: string;
  readonly tags?: readonly string[];
  readonly image?: string;
};

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const [subProjectIndex, setSubProjectIndex] = useState(0);

  const hasSubProjects =
    "subProjects" in project &&
    Array.isArray(project.subProjects) &&
    project.subProjects.length > 0;

  const activeProject = useMemo<ProjectItem>(() => {
    if (hasSubProjects) {
      return project.subProjects[subProjectIndex] as ProjectItem;
    }
    return project as ProjectItem;
  }, [hasSubProjects, project, subProjectIndex]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!el.open) el.showModal();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const sync = () => {
      onClose();
    };
    el.addEventListener("close", sync);
    return () => el.removeEventListener("close", sync);
  }, [onClose]);

  useEffect(() => {
    setSubProjectIndex(0);
  }, [project]);

  const hasCover =
    typeof activeProject.image === "string" && activeProject.image.length > 0;
  const hasSecondary =
    "secondaryHref" in project &&
    typeof project.secondaryHref === "string" &&
    project.secondaryHref.length > 0;
  const external = isExternalHref(activeProject.href);
  const canPrev = hasSubProjects && subProjectIndex > 0;
  const canNext =
    hasSubProjects &&
    "subProjects" in project &&
    Array.isArray(project.subProjects) &&
    subProjectIndex < project.subProjects.length - 1;

  return (
    <dialog
      ref={ref}
      className="modal modal-bottom sm:modal-middle z-[110]"
      aria-labelledby="project-detail-title"
      aria-modal="true"
    >
      <div className="modal-box modal-box-3d relative max-h-[85vh] max-w-lg overflow-y-auto border border-base-300 bg-base-100 p-6 pt-14 sm:p-8 sm:pt-16">
        <form method="dialog" className="absolute right-3 top-3 z-20 sm:right-4 sm:top-4">
          <button
            type="submit"
            aria-label="Close"
            className="btn-close-3d flex h-10 w-10 items-center justify-center rounded-lg border border-t-base-200 border-b-[3px] border-b-base-content/20 border-l-base-300 border-r-base-300 bg-gradient-to-b from-base-100 to-base-300/45 text-lg font-light leading-none text-base-content outline-none ring-base-content/10 transition-[transform,box-shadow,filter] hover:brightness-105 focus-visible:ring-2 motion-safe:active:translate-y-[3px] dark:border-b-base-content/30 dark:from-base-200 dark:to-base-300/60"
          >
            <span aria-hidden className="-mt-0.5">
              ×
            </span>
          </button>
        </form>

        {hasCover ? (
          <div className="relative -mx-6 -mt-2 mb-6 sm:-mx-8">
            <div className="overflow-hidden rounded-2xl border border-base-300/70 bg-gradient-to-br from-base-200/80 to-base-300/40 p-1.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_16px_48px_-16px_rgba(0,0,0,0.45)] ring-1 ring-base-content/[0.06] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_20px_50px_-12px_rgba(0,0,0,0.65)]">
              <div className="relative overflow-hidden rounded-xl bg-base-200/30">
                <div className="aspect-[16/9] w-full sm:aspect-[2/1]">
                  <img
                    src={activeProject.image}
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base-100/90 via-base-100/10 to-transparent opacity-95 dark:from-base-100/95"
                  aria-hidden
                />
              </div>
            </div>
          </div>
        ) : null}

        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
          {activeProject.meta}
        </p>
        <h2
          id="project-detail-title"
          className="mt-1 font-display text-2xl font-medium tracking-[-0.02em] sm:text-3xl"
        >
          {activeProject.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-base-content/80">
          {activeProject.description}
        </p>

        {activeProject.tags && activeProject.tags.length > 0 ? (
          <ul
            className="mt-5 flex list-none flex-wrap gap-1.5 p-0"
            aria-label="Technologies"
          >
            {activeProject.tags.map((t) => (
              <li
                key={t}
                className="rounded-full bg-base-200 px-2.5 py-1 text-xs font-medium text-base-content/85"
              >
                {t}
              </li>
            ))}
          </ul>
        ) : null}

        {hasSubProjects ? (
          <div className="mt-5 flex items-center justify-between gap-2 rounded-xl border border-base-300/70 bg-base-200/40 p-2">
            <button
              type="button"
              className="btn btn-sm btn-3d-outline rounded-full border-base-300 bg-base-100 px-4"
              onClick={() => setSubProjectIndex((i) => i - 1)}
              disabled={!canPrev}
              aria-disabled={!canPrev}
            >
              Previous
            </button>
            <p className="text-xs font-medium text-base-content/70">
              {"subProjects" in project && Array.isArray(project.subProjects)
                ? `Project ${subProjectIndex + 1} of ${project.subProjects.length}`
                : null}
            </p>
            <button
              type="button"
              className="btn btn-sm btn-3d-outline rounded-full border-base-300 bg-base-100 px-4"
              onClick={() => setSubProjectIndex((i) => i + 1)}
              disabled={!canNext}
              aria-disabled={!canNext}
            >
              Next
            </button>
          </div>
        ) : null}

        <div className="modal-action mt-6 flex-wrap justify-start gap-2 p-0">
          {hasSecondary ? (
            <>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-3d-primary rounded-full border-0 bg-base-content text-base-100 hover:bg-base-content/90"
              >
                Web app
              </a>
              <a
                href={project.secondaryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-3d-outline rounded-full border-base-300 bg-transparent hover:border-primary/40 hover:bg-primary/10"
              >
                API
              </a>
            </>
          ) : (
            <a
              href={activeProject.href}
              className={
                external
                  ? "btn btn-3d-primary rounded-full border-0 bg-base-content text-base-100 hover:bg-base-content/90"
                  : "btn btn-3d-outline rounded-full border-base-300 bg-base-100 hover:border-primary/40 hover:bg-primary/10"
              }
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {external ? "Open project" : "View details"}
              {external ? (
                <span aria-hidden className="ml-1">
                  ↗
                </span>
              ) : null}
            </a>
          )}
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button type="submit" className="cursor-default" aria-label="Close">
          &nbsp;
        </button>
      </form>
    </dialog>
  );
}
