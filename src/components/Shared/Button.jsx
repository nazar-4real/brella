import { Link } from 'react-router-dom';

import '../../assets/styles/global.scss';

const Button = ({ text, reference = '/#', onClick = null }) => (
  <Link
    className="main-link"
    to={reference}
    onClick={onClick}
  >
    {text}
  </Link>
)

export default Button;