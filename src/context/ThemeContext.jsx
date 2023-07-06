"use client";

import { createContext, useState } from "react";
import { THEME } from "@/constants/themeMode";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(THEME.dark);

  const toggle = () => {
    const currentMode = mode === THEME.dark ? THEME.light : THEME.dark;

    setMode(currentMode);
  };

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
