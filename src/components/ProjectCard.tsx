import {
  useLayoutEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import type { SiteProject } from "./ProjectDetailModal";

function isExternalHref(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}

type ProjectCardProps = {
  project: SiteProject;
  onOpenDetail: (p: SiteProject) => void;
};

export function ProjectCard({ project: p, onOpenDetail }: ProjectCardProps) {
  const external = isExternalHref(p.href);
  const hasSecondary =
    "secondaryHref" in p &&
    typeof p.secondaryHref === "string" &&
    p.secondaryHref.length > 0;

  const hasCover =
    "image" in p && typeof p.image === "string" && p.image.length > 0;

  const descRef = useRef<HTMLParagraphElement>(null);
  const [descOverflows, setDescOverflows] = useState(false);

  useLayoutEffect(() => {
    const el = descRef.current;
    if (!el) return;
    const measure = () => {
      setDescOverflows(el.scrollHeight > el.clientHeight + 1);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [p.description]);

  const cardClass =
    "card group elev-panel elev-panel-lift relative flex h-full min-h-[22rem] cursor-pointer flex-col overflow-hidden sm:min-h-[24rem]" +
    (hasCover ? " p-0" : " p-5 sm:p-6");

  const contentShell = hasCover
    ? "relative z-[1] flex min-h-0 flex-1 flex-col px-5 pb-5 pt-5 sm:px-6 sm:pb-6 sm:pt-6"
    : "relative z-[1] flex min-h-0 flex-1 flex-col";

  const onCardActivate = () => {
    onOpenDetail(p);
  };

  const onCardClick = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest("a")) {
      return;
    }
    onCardActivate();
  };

  return (
    <div className={cardClass} onClick={onCardClick}>
      <span
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />

      {hasCover ? (
        <div className="relative z-[1] h-40 shrink-0 overflow-hidden border-b border-base-300/80 bg-base-200/40 sm:h-44">
          <img
            src={p.image}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
      ) : null}

      <div className={contentShell}>
        <span className="relative z-[1] text-xs font-medium uppercase tracking-wider text-base-content/60">
          {p.meta}
          {external ? (
            <span className="ml-2 text-[0.65rem] font-normal normal-case text-base-content/50">
              ↗
            </span>
          ) : null}
        </span>

        <h3 className="relative z-[1] mt-2 line-clamp-2 min-h-[2.5rem] font-display text-lg font-medium leading-snug tracking-[-0.02em] transition-colors group-hover:text-primary sm:text-xl">
          {p.title}
        </h3>

        <div className="relative z-[1] mt-2 min-h-0 flex-1">
          <p
            ref={descRef}
            className="line-clamp-3 text-sm leading-relaxed text-base-content/70"
          >
            {p.description}
          </p>
          <div className="mt-1.5 min-h-[1.375rem]">
            {descOverflows ? (
              <span
                aria-hidden
                className="text-sm font-semibold text-primary underline decoration-primary/35 underline-offset-2"
              >
                See more
              </span>
            ) : null}
          </div>
        </div>

        {"tags" in p && p.tags && p.tags.length > 0 ? (
          <div className="relative z-[1] mt-3 max-h-[2.85rem] overflow-hidden sm:mt-4">
            <ul
              className="flex list-none flex-wrap gap-1.5 p-0"
              aria-label="Technologies"
            >
              {p.tags.map((t) => (
                <li key={t}>
                  <span className="inline-block rounded-full bg-base-200 px-2 py-0.5 text-[0.7rem] font-medium text-base-content/80">
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="relative z-[1] mt-auto flex flex-col gap-3 pt-4">
          {hasSecondary ? (
            <div className="flex flex-wrap gap-2" onClick={(e) => e.stopPropagation()}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={p.label}
                className="btn btn-sm btn-3d-primary rounded-full border-0 bg-base-content px-4 text-base-100 hover:bg-base-content/90"
              >
                Web app
              </a>
              <a
                href={p.secondaryHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={
                  "secondaryLabel" in p && p.secondaryLabel
                    ? p.secondaryLabel
                    : "API"
                }
                className="btn btn-sm btn-outline btn-3d-outline rounded-full border-base-300 bg-transparent px-4 hover:border-primary/40 hover:bg-primary/10"
              >
                API
              </a>
            </div>
          ) : (
            <a
              href={p.href}
              aria-label={p.label}
              className="btn btn-sm btn-3d-outline inline-flex w-fit items-center gap-1 rounded-full border border-base-300 bg-base-100 font-medium normal-case text-base-content hover:border-primary/40 hover:bg-primary/10"
              onClick={(e) => e.stopPropagation()}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {external ? "Open project" : "Details"}
              <span aria-hidden className="text-lg leading-none text-primary">
                →
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
