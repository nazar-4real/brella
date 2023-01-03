import CustomHelmet from '../Shared/CustomHelmet';

import Pride from '../pride/Pride';

import Section from '../Shared/Section';
import SectionInfo from '../Shared/SectionInfo';
import SectionLink from '../Shared/SectionLink';

import './experience.scss';

import experienceImg from '../../assets/images/experience/experience-img.png';

const Experience = () => (
  <>
    <CustomHelmet title="Members" />

    <Section className="experience">
      <div className="experience__img">
        <img className="experience__img-pic" src={experienceImg} alt="" />
      </div>
      <SectionInfo
        className="experience__info"
        subtitle="a better claims experience"
        title="Give your people a plan that pays in hours—not weeks.">
        <p className="main-text">
          Your team can’t wait for peace of mind. Brella pays on diagnosis, so members can file a claim sooner and get paid faster via our Member Portal or mobile app.
        </p>
        <SectionLink text="Play video" />
      </SectionInfo>
    </Section>

    <Pride />
  </>
)

export default Experience;