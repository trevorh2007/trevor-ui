import React, { useEffect, useState } from 'react';
import { ThemeContext, type Theme } from './theme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check localStorage for saved theme preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('demo-theme') as Theme;
      return savedTheme || 'light';
    }
    return 'light';
  });

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('demo-theme', newTheme);
      return newTheme;
    });
  };

  // Apply theme class to both html and root elements
  useEffect(() => {
    const html = document.documentElement;
    const rootElement = document.getElementById('root');

    // Apply to HTML element for Tailwind dark mode
    html.classList.remove('light', 'dark');
    html.classList.add(theme);

    // Also apply to root element for custom CSS
    if (rootElement) {
      rootElement.classList.remove('light', 'dark');
      rootElement.classList.add(theme);
    }
  }, [theme]);

  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
