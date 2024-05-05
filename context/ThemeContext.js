// themes/ThemeContext.js
import React, { createContext, useState } from 'react';
import brightTheme from '../themes/brightTheme';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(brightTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};