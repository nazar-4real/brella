
const FormField = ({ type = 'text', name, placeholder, inputRef = null }) => (
  <label className="form-label">
    <input
      className="form-input"
      type={type}
      name={name}
      placeholder={placeholder}
      ref={inputRef}
      required
    />
  </label>
)

export default FormField;