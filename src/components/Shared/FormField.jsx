import { forwardRef } from "react";

const FormField = forwardRef(({ type = 'text', name, placeholder }, inputRef) => (
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
))

export default FormField;