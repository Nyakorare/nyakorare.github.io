/**
 * Runs a DOM update inside document.startViewTransition when supported
 * so light/dark theme switches animate smoothly (cross-fade on the root).
 * Respects prefers-reduced-motion (no transition API).
 */
export function withThemeTransition(update: () => void): void {
  if (typeof document === "undefined") {
    update();
    return;
  }

  if (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    update();
    return;
  }

  const doc = document as Document & {
    startViewTransition?: (callback: () => void) => { finished: Promise<void> };
  };

  if (typeof doc.startViewTransition === "function") {
    doc.startViewTransition(update);
  } else {
    update();
  }
}
