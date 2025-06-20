// import { createContext, useEffect, useState } from "react";
// import ThemeProvider from "./components/ThemeContext";

// export const ThemeContext = createContext();

// const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState("light");

//   useEffect(() => {
//     document.body.classList.remove("light", "dark");
//     document.body.classList.add(theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === "light" ? "dark" : "light"));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export default ThemeProvider;


// ThemeContext.js
// ThemeContext.jsx
import React, { createContext, useState, useEffect } from "react";
export const ThemeContext = createContext();
// import ThemeProvider from "./components/ThemeContext";
// import ThemeProvider from "./components/ThemeContext"; 


const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
