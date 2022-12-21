import Section from "./Section";
import Button from "./Button";

import error404 from '../../assets/images/error-404.jpg';

const Page404 = () => (
  <Section className="page-404">
    <img className="page-404__img" src={error404} alt="404" />
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