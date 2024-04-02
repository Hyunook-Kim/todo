import { createContext, useContext, useEffect, useState } from "react";

// const DarkModeContext = createContext<{
//   isDarkMode: boolean;
//   toggleDarkMode: () => void;
// } | null>(null);

const DarkModeContext = createContext<{
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}>({ isDarkMode: false, toggleDarkMode: () => {} });
// TODO: Need to check again. (avoid null check)

export function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    updateDocumentElement(!isDarkMode);
  };

  useEffect(() => {
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setIsDarkMode(isDark);
    updateDocumentElement(isDark);
  }, []);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function updateDocumentElement(isDarkMode: boolean) {
  if (isDarkMode) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
}

export const useDarkMode = () => useContext(DarkModeContext);
