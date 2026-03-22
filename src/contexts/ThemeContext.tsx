import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { withThemeTransition } from "../utils/themeTransition";

type Theme = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  toggle: () => void;
} | null>(null);

const STORAGE_KEY = "portfolio-color-scheme";

function readStored(): Theme | null {
  const v = localStorage.getItem(STORAGE_KEY);
  if (v === "light" || v === "dark") return v;
  return null;
}

function getOsTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getInitialTheme(): Theme {
  const stored = readStored();
  if (stored) return stored;
  return getOsTheme();
}

function applyDataTheme(theme: Theme): void {
  document.documentElement.setAttribute(
    "data-theme",
    theme === "dark" ? "portfolioDark" : "portfolio"
  );
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  useEffect(() => {
    applyDataTheme(theme);
  }, [theme]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onOsChange = () => {
      if (localStorage.getItem(STORAGE_KEY)) return;
      const next = mq.matches ? "dark" : "light";
      withThemeTransition(() => {
        applyDataTheme(next);
        setTheme(next);
      });
    };
    mq.addEventListener("change", onOsChange);
    return () => mq.removeEventListener("change", onOsChange);
  }, []);

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next: Theme = current === "dark" ? "light" : "dark";
      withThemeTransition(() => {
        localStorage.setItem(STORAGE_KEY, next);
        applyDataTheme(next);
      });
      return next;
    });
  }, []);

  const value = useMemo(() => ({ theme, toggle }), [theme, toggle]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): { theme: Theme; toggle: () => void } {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
