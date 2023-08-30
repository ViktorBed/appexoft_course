import React, { useState } from "react";

const themeContent = createContent();
function Context({ children }) {
  const [theme, setTheme] = useState("Light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <themeContent.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeContent.Provider>
  );
}

export { Context, themeContent };
