import { useEffect, useRef } from "react";
import { site, type SiteCertification } from "../site";

export type CertificationsModalProps = {
  open: boolean;
  onClose: () => void;
};

export function CertificationsModal({
  open,
  onClose,
}: CertificationsModalProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (open) {
      if (!el.open) el.showModal();
    } else if (el.open) {
      el.close();
    }
  }, [open]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const syncParent = () => {
      onClose();
    };
    el.addEventListener("close", syncParent);
    return () => el.removeEventListener("close", syncParent);
  }, [onClose]);

  const items = site.certifications as readonly SiteCertification[];

  return (
    <dialog
      ref={ref}
      className="modal modal-bottom sm:modal-middle z-[110]"
      aria-labelledby="certifications-modal-title"
      aria-modal="true"
    >
      <div className="modal-box modal-box-3d relative max-w-xl border border-base-300 bg-base-100 p-6 pt-10 sm:p-8 sm:pt-12">
        <form
          method="dialog"
          className="absolute right-3 top-3 z-10 sm:right-4 sm:top-4"
        >
          <button
            type="submit"
            aria-label="Close"
            className="btn-close-3d flex h-10 w-10 items-center justify-center rounded-lg border border-t-base-200 border-b-[3px] border-b-base-content/20 border-l-base-300 border-r-base-300 bg-gradient-to-b from-base-100 to-base-300/45 text-lg font-light leading-none text-base-content outline-none ring-base-content/10 transition-[transform,box-shadow,filter] hover:brightness-105 focus-visible:ring-2 dark:border-b-base-content/30 dark:from-base-200 dark:to-base-300/60"
          >
            <span aria-hidden className="-mt-0.5">
              ×
            </span>
          </button>
        </form>
        <h2
          id="certifications-modal-title"
          className="section-heading-3d font-display text-2xl font-medium tracking-[-0.02em] sm:text-3xl"
        >
          Certifications
        </h2>
        <p className="mt-2 text-base text-base-content/70">
          Professional credentials and exams completed.
        </p>
        <ul className="mt-6 flex list-none flex-col gap-4 p-0">
          {items.map((c) => (
            <li
              key={`${c.title}-${c.issuer ?? ""}-${c.year ?? ""}`}
              className="rounded-xl border border-base-300/80 bg-base-200/40 px-4 py-3 sm:px-5 sm:py-4"
            >
              {c.href ? (
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block font-display text-lg font-medium text-primary hover:underline"
                >
                  {c.title}
                  <span className="ml-1 inline text-base-content/50 no-underline transition group-hover:text-primary">
                    ↗
                  </span>
                </a>
              ) : (
                <p className="font-display text-lg font-medium text-base-content">
                  {c.title}
                </p>
              )}
              <p className="mt-1 text-sm text-base-content/65">
                {[c.issuer, c.year].filter(Boolean).join(" · ")}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button type="submit" className="cursor-default" aria-label="Close">
          &nbsp;
        </button>
      </form>
    </dialog>
  );
}
