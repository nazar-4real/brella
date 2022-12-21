import { Link } from 'react-router-dom';

import '../../assets/styles/global.scss';

const Logo = ({ hrefLink = '/', srcPath }) => (
  <Link className="logo" to={hrefLink} style={{ border: '1px solid red', padding: '7px' }}>
    <img className="logo__img" src={srcPath} alt="Logotype" />
  </Link>
)
export default Logo;