import SectionSubtitle from './SectionSubtitle';

import '../../assets/styles/global.scss';

const SectionInfo = ({ className, isSubtitle = true, subtitle, title, children }) => (
  <div className={className}>
    {isSubtitle ? <SectionSubtitle subtitleText={subtitle} /> : null}
    <h2 className="main-title">
      {title}
    </h2>
    {children}
  </div>
)

export default SectionInfo;