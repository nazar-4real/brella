import styled from 'styled-components';

const ThemedSection = styled.section.attrs({ className: 'section' })`
  background-color: ${(props) => props.theme.background}
`;

const Section = ({ className, isContainer = true, children, style }) => {
  return (
    <ThemedSection className={`section ${className}`} style={style}>
      {
        isContainer ? (
          <div className="container">
            <div className={`${className}__body`}>
              {children}
            </div>
          </div>
        ) : (
          <div className={`${className}__body`}>
            {children}
          </div>
        )
      }
    </ThemedSection>
  )
}

export default Section;