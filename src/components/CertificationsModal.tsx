import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
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
  const reduceMotion = useReducedMotion();

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

  const panelVariants = {
    closed: reduceMotion
      ? { opacity: 0 }
      : {
          opacity: 0,
          rotateX: 20,
          rotateY: -16,
          scale: 0.86,
          y: 48,
        },
    open: {
      opacity: 1,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      y: 0,
    },
  };

  return (
    <dialog
      ref={ref}
      className="modal modal-bottom sm:modal-middle z-[110] [perspective:1400px]"
      aria-labelledby="certifications-modal-title"
      aria-modal="true"
    >
      <motion.div
        className="modal-box modal-box-3d relative max-h-[min(92vh,56rem)] max-w-4xl overflow-y-auto border border-base-300 bg-base-100 p-6 pt-10 sm:p-8 sm:pt-12"
        style={{ transformStyle: "preserve-3d" }}
        variants={panelVariants}
        initial="closed"
        animate={open ? "open" : "closed"}
        transition={
          reduceMotion
            ? { duration: 0.12 }
            : {
                type: "spring",
                stiffness: 340,
                damping: 30,
                mass: 0.65,
                opacity: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
              }
        }
      >
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
        <ul className="mt-6 flex list-none flex-col gap-3 p-0 sm:gap-4">
          {items.map((c, i) => (
            <li
              key={`${c.title}-${c.issuer ?? ""}-${c.year ?? ""}-${i}`}
              className="rounded-xl border border-base-300/80 bg-base-200/40 px-4 py-3.5 sm:px-5 sm:py-4"
            >
              {c.href ? (
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block font-display text-base font-medium leading-snug text-primary hover:underline sm:text-lg"
                >
                  {c.title}
                  <span className="ml-1 inline text-base-content/50 no-underline transition group-hover:text-primary">
                    ↗
                  </span>
                </a>
              ) : (
                <p className="font-display text-base font-medium leading-snug text-base-content sm:text-lg">
                  {c.title}
                </p>
              )}
              {(c.issuer || c.year) && (
                <p className="mt-1.5 text-sm leading-relaxed text-base-content/65">
                  {c.issuer && (
                    <>
                      <span className="font-medium text-base-content/55">
                        Source:{" "}
                      </span>
                      {c.issuer}
                    </>
                  )}
                  {c.issuer && c.year ? " · " : ""}
                  {c.year}
                </p>
              )}
            </li>
          ))}
        </ul>
      </motion.div>
      <form method="dialog" className="modal-backdrop">
        <button type="submit" className="cursor-default" aria-label="Close">
          &nbsp;
        </button>
      </form>
    </dialog>
  );
}
