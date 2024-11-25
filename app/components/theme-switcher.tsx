"use client";

import { useState, useEffect } from "react";
import styles from "./switch.module.css";

type ColorSchemePreference = "system" | "dark" | "light";

const STORAGE_KEY = "nextjs-blog-starter-theme";

const modes: ColorSchemePreference[] = ["system", "dark", "light"];

export default function ThemeSwitcher() {
  const [mode, setMode] = useState<ColorSchemePreference>(() => {
    if (typeof localStorage !== "undefined") {
      const storedMode = localStorage.getItem(
        STORAGE_KEY
      ) as ColorSchemePreference | null;
      return storedMode || "system";
    }
    return "system";
  });

  useEffect(() => {
    const root = document.documentElement;

    const applyTheme = (mode: ColorSchemePreference) => {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      const resolvedTheme =
        mode === "system" ? (systemPrefersDark ? "dark" : "light") : mode;

      root.classList.toggle("dark", resolvedTheme === "dark");
      root.classList.toggle("light", resolvedTheme === "light");
      root.setAttribute("data-mode", mode);
    };

    applyTheme(mode);

    localStorage.setItem(STORAGE_KEY, mode);

    /** Listener to update theme across tabs */
    const syncTheme = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        setMode(e.newValue as ColorSchemePreference);
      }
    };

    window.addEventListener("storage", syncTheme);

    return () => {
      window.removeEventListener("storage", syncTheme);
    };
  }, [mode]);

  const handleModeSwitch = () => {
    const currentIndex = modes.indexOf(mode);
    setMode(modes[(currentIndex + 1) % modes.length]);
  };

  return (
    <button
      className={styles.switch}
      onClick={handleModeSwitch}
      aria-label={`Switch to ${
        modes[(modes.indexOf(mode) + 1) % modes.length]
      } mode`}
    >
      {mode}
    </button>
  );
}
