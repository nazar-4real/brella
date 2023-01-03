import CustomHelmet from '../Shared/CustomHelmet';

import Section from '../Shared/Section';
import SectionInfo from '../Shared/SectionInfo';
import SectionLink from '../Shared/SectionLink';

import './employers.scss';

const Employers = () => (
  <>
    <CustomHelmet title="Employers" />

    <Section className="employers">
      <SectionInfo
        className="employers__info"
        subtitle="for employers"
        title="Easy enrollment meets simple administration.">
        <p className="main-text">
          Brella brings 100% paperless implementation, enrollment, and admin. Plug into our platforms or we’ll plug into yours.
        </p>
        <SectionLink text="Learn more" />
      </SectionInfo>
    </Section>
  </>
)

export default Employers;