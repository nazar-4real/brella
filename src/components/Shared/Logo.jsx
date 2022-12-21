import { Link } from 'react-router-dom';

import '../../assets/styles/global.scss';

const Logo = ({ hrefLink = '/', srcPath }) => (
  <Link className="logo" to={hrefLink}>
    <img className="logo__img" src={srcPath} alt="Logotype" />
  </Link>
)
export default Logo;