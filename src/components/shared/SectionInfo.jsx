import { useContext } from 'react';

import { ThemeContext } from 'src/context/ThemeContext';

import SectionSubtitle from './SectionSubtitle';

import 'src/assets/styles/global.scss';

const SectionInfo = ({ className, isSubtitle = true, subtitle, title, children, style }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={className} style={style}>
      {isSubtitle ? <SectionSubtitle subtitleText={subtitle} /> : null}
      <h2
        className="main-title"
        style={{
          color: theme === 'dark' ? '#77c1a7' : ''
        }}
      >
        {title}
      </h2>
      {children}
    </div>
  )
}

export default SectionInfo;