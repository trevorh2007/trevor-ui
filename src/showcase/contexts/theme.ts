import { createContext } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export type { Theme, ThemeContextType };

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
