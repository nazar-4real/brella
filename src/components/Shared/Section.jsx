const Section = ({ className, isContainer = true, children, style }) => (
  <section className={`section ${className}`} style={style}>
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