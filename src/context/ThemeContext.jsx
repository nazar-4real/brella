import { createContext, useState } from 'react'

const ThemeContext = createContext();

const ThemeStore = ({ children }) => {
  const [theme, setTheme] = useState(
    window.localStorage.getItem('theme') ?? 'light'
  );

  const switchTheme = theme => {
    setTheme(theme);
    window.localStorage.setItem('theme', theme);
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        switchTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeStore }