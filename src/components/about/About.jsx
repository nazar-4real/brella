import { useContext } from 'react';

import { ThemeContext } from 'src/context/ThemeContext';

import Section from '../shared/Section';
import SectionInfo from '../shared/SectionInfo';
import SectionLink from '../shared/SectionLink';

import { Text } from 'src/theme/Text';

import './about.scss';

import aboutChart from 'src/assets/images/about/about-chart.png';

const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Section
      className="about"
      style={{
        background: theme === 'dark' ? '#151515' : ''
      }}>
      <SectionInfo
        className="about__info"
        subtitle="Why Brella?"
        title="Today, any health insurance deductible can feel like a high deductible.">
        <Text>
          Brella's supplemental health plan enhances your health benefit strategy to ensure that health hardships don't become financial burdens.
        </Text>
        <SectionLink link="plan" text="See our plan" />
      </SectionInfo>
      <div className="about__chart">
        <img className="about__chart-img" src={aboutChart} alt="About chart" />
      </div>
    </Section>
  )
}

export default About;