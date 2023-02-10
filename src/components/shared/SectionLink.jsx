import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ThemeContext } from 'src/context/ThemeContext';

const SectionLink = ({ link = '/#', text }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Link
      className="section-link"
      to={link}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        color: theme === 'dark' ? '#96e6ca' : '',
        borderColor: theme === 'dark' ? '#96e6ca' : ''
      }}
    >
      {text}
    </Link>
  )
}

export default SectionLink;