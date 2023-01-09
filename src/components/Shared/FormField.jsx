import { forwardRef } from "react";

const FormField = forwardRef(({ ...props }, ref) => (
  <label className="form-label">
    <input
      className="form-input"
      ref={ref}
      {...props} />
  </label>
))

export default FormField;