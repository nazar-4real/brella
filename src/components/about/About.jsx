import Section from '../Shared/Section';
import SectionInfo from '../Shared/SectionInfo';
import SectionLink from '../Shared/SectionLink';

import './about.scss';

import aboutChart from 'src/assets/images/about/about-chart.png';

const About = () => (
  <Section className="about">
    <SectionInfo
      className="about__info"
      subtitle="Why Brella?"
      title="Today, any health insurance deductible can feel like a high deductible.">
      <p className="main-text">
        Brella's supplemental health plan enhances your health benefit strategy to ensure that health hardships don't become financial burdens.
      </p>
      <SectionLink link="plan" text="See our plan" />
    </SectionInfo>
    <div className="about__chart">
      <img className="about__chart-img" src={aboutChart} alt="About chart" />
    </div>
  </Section >
)

export default About;