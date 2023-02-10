import { useContext } from 'react';

import { ThemeContext } from 'src/context/ThemeContext';

import 'src/assets/styles/global.scss';

const SectionSubtitle = ({ subtitleText }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <h5
      className="section-subtitle"
      style={{
        color: theme === 'dark' ? '#fff' : ''
      }}
    >
      {subtitleText}
    </h5>
  )
}
export default SectionSubtitle;