import React from 'react';

const Section = ({ className, isContainer = true, children }) => (
  <section className={`section ${className}`}>
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
  </section>
)

export default Section;