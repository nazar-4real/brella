import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ThemeContext } from 'src/context/ThemeContext';

import 'src/assets/styles/global.scss';

const Button = ({ text, reference = '/#', onClick = null }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Link
      className="main-link"
      to={reference}
      onClick={onClick}
      style={{
        background: theme === 'dark' ? '#96e6ca' : '#43806c',
        color: theme === 'dark' ? '#214e41' : '#fff'
      }}
    >
      {text}
    </Link>
  )
}

export default Button;