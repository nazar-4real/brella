import Section from './Section';
import Button from './Button';
import { LazyImage } from './LazyImage';

import error404 from 'src/assets/images/error-404.png';

const Page404 = () => (
  <Section className="page-404">
    <div className="page-404__pic">
      <LazyImage
        className="page-404__img"
        src={error404}
        alt="Page not found or not created yet" />
    </div>
    <div className="page-404__info">
      <h1 className="page-404__title">
        Oops! Page Not Found
      </h1>
      <div className="page-404__actions">
        <Button text="Back to homepage" reference='/#' />
      </div>
    </div>
  </Section>
)

export default Page404;