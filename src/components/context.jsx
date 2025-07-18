"use client";
import { createContext, useState, useContext, useEffect } from "react";

const themeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (!!savedTheme) {
      setTheme(savedTheme);
    } 
  }, [theme]);

  useEffect(() => {
    if (theme==="dark") {
      document.documentElement.classList.add("dark");
    }
    else {
        document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");  
  };

  return (
    <themeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export const useTheme = () => useContext(themeContext);