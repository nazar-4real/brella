import { forwardRef } from 'react';
import styled, { css } from 'styled-components';

const ThemedInput = styled.input`
  ${(props) => {
    const { background, title } = props.theme;

    return css`
      background: ${background};
      color: ${title};
    `
  }} 
`;

const FormField = forwardRef(({ ...props }, ref) => (
  <label className="form-label">
    <ThemedInput
      className="form-input"
      ref={ref}
      {...props} />
  </label>
))

export default FormField;