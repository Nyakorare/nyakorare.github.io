import clsx from "clsx";
import type { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

type Props = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms (Animate.css duration stays ~0.65s) */
  delayMs?: number;
};

export function Reveal({ children, className, delayMs = 0 }: Props) {
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.08,
    rootMargin: "0px 0px -8% 0px",
  });

  const visible = reduced || inView;

  return (
    <div
      ref={ref}
      className={clsx(
        className,
        !visible && !reduced && "opacity-0",
        visible && !reduced && "animate__animated animate__fadeInUp"
      )}
      style={
        reduced
          ? undefined
          : { animationDelay: `${delayMs}ms`, animationDuration: "0.65s" }
      }
    >
      {children}
    </div>
  );
}
