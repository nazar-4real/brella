

const Image = ({ className, src, alt, ...props }) => (
  <img
    className={`lazy-img ${className}`}
    src={src}
    alt={alt}
    {...props} />
)

export default Image