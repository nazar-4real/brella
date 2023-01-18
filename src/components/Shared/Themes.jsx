import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'

import { ThemeContext } from 'src/context/ThemeContext'

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

const Themes = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={themes[theme]}>
      {children}
    </ThemeProvider>
  );
};

export default Themes