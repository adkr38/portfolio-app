import { useState, createContext, ReactNode } from "react";

interface IThemeContext {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: "light",
  toggleTheme: () => {},
});

type ThemeProps = {
  children: ReactNode;
};

const Theme = ({ children }: ThemeProps) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default Theme;
