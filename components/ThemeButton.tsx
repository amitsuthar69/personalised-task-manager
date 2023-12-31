"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="flex items-center justify-center rounded-lg transition-colors dark:hover:bg-zinc-500"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
      {resolvedTheme === "dark" ? (
        <SunIcon className="h-7 w-7 text-orange-300" />
      ) : (
        <MoonIcon className="h-6 w-6 text-slate-100" />
      )}
    </button>
  );
};

export default ThemeButton;
