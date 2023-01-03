import CustomHelmet from '../Shared/CustomHelmet';

import Section from '../Shared/Section';
import SectionInfo from '../Shared/SectionInfo';

import Button from '../Shared/Button';

import './explore.scss';

import exploreImg from '../../assets/images/explore/explore-img.jpg';

const Explore = () => (
  <>
    <CustomHelmet title="About Us" />

    <Section className="explore" isContainer={false}>
      <div className="explore__picture">
        <img className="explore__img" src={exploreImg} alt="" />
      </div>
      <SectionInfo
        className="explore__info"
        isSubtitle={false}
        title="Ready to explore Brella’s supplemental health solution?">
        <h2 className="main-title">
          Let’s talk.
        </h2>
        <Button text="Get in touch" />
      </SectionInfo>
    </Section>
  </>
)

export default Explore;