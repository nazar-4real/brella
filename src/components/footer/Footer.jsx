import { useContext } from 'react';

import { ThemeContext } from 'src/context/ThemeContext';

import FooterBasis from './components/FooterBasis';
import Privacy from './components/Privacy';

import './footer.scss';

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer
      className="footer"
      style={{
        background: theme === 'dark' ? '#151515' : '',
        borderTop: theme === 'dark' ? '1px solid rgba(255, 255, 255, .5)' : 'none'
      }}
    >
      <FooterBasis />
      <Privacy />
    </footer>
  )
}

export default Footer;