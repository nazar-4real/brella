import { forwardRef } from "react";

const FormField = forwardRef(({ type = 'text', name, placeholder }, ref) => (
  <label className="form-label">
    <input
      className="form-input"
      type={type}
      name={name}
      placeholder={placeholder}
      ref={ref}
      required
    />
  </label>
))

export default FormField;