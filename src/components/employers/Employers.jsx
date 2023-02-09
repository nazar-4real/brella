import { useContext } from 'react';

import { ThemeContext } from 'src/context/ThemeContext';

import Section from '../shared/Section';
import SectionInfo from '../shared/SectionInfo';
import SectionLink from '../shared/SectionLink';

import { Text } from 'src/theme/Text';

import './employers.scss';

const Employers = () => {
  const { theme } = useContext(ThemeContext);

  const themedSection = theme === 'dark' ? {
    backgroundColor: 'rgba(0, 0, 0, .6)',
    backgroundBlendMode: 'color'
  } : {
    backgroundColor: 'transparent'
  };

  return (
    <Section className="employers" style={themedSection}>
      <SectionInfo
        className="employers__info"
        subtitle="for employers"
        title="Easy enrollment meets simple administration.">
        <Text>
          Brella brings 100% paperless implementation, enrollment, and admin. Plug into our platforms or we’ll plug into yours.
        </Text>
        <SectionLink text="Learn more" />
      </SectionInfo>
    </Section>
  )
}

export default Employers;