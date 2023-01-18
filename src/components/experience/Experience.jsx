import Section from '../shared/Section';
import SectionInfo from '../shared/SectionInfo';
import SectionLink from '../shared/SectionLink';

import { Text } from 'src/theme/Text';

import './experience.scss';

import experienceImg from 'src/assets/images/experience/experience-img.png';

const Experience = () => (
  <Section className="experience">
    <div className="experience__img">
      <img className="experience__img-pic" src={experienceImg} alt="" />
    </div>
    <SectionInfo
      className="experience__info"
      subtitle="a better claims experience"
      title="Give your people a plan that pays in hours—not weeks.">
      <Text>
        Your team can’t wait for peace of mind. Brella pays on diagnosis, so members can file a claim sooner and get paid faster via our Member Portal or mobile app.
      </Text>
      <SectionLink text="Play video" />
    </SectionInfo>
  </Section>
)

export default Experience;