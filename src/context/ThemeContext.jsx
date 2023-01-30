import { createContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'

const themes = {
  dark: {
    background: '#151515',
    title: '#96e6ca',
    text: 'rgba(255, 255, 255, .8)',
    link: '#77c1a7',
    activeLink: '#00ca84'
  },
  light: {
    background: '#fff',
    title: '#214e41',
    text: '#757575',
    link: '#43806c',
    activeLink: '#1c9a6e'
  }
}

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
      <ThemeProvider theme={themes[theme]}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeStore }