import { useContext } from 'react';

import { ThemeContext } from 'src/context/ThemeContext';

import Section from '../shared/Section';
import SectionInfo from '../shared/SectionInfo';
import Button from '../shared/Button';

import './explore.scss';

import exploreImg from 'src/assets/images/explore/explore-img.jpg';

const Explore = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Section className="explore" isContainer={false}>
      <div className="explore__picture" style={{
        backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, .6)' : ''
      }}>
        <img
          className="explore__img"
          src={exploreImg}
          alt="Explore this topic"
          style={{
            filter: `brightness(${theme === 'dark' ? '.6' : 1})`
          }} />
      </div>
      <SectionInfo
        className="explore__info"
        isSubtitle={false}
        title="Ready to explore Brella’s supplemental health solution?"
        style={{
          background: theme === 'dark' ? '#052f23' : ''
        }}>
        <h2
          className="main-title"
          style={{
            color: theme === 'dark' ? '#96e6ca' : ''
          }}>
          Let’s talk.
        </h2>
        <Button text="Get in touch" />
      </SectionInfo>
    </Section>
  )
}

export default Explore;