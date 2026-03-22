import { useEffect } from "react";

export function useThemeFromOs(): void {
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const apply = () => {
      document.documentElement.setAttribute(
        "data-theme",
        mq.matches ? "portfolioDark" : "portfolio"
      );
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);
}
