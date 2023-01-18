import styled from 'styled-components'

export const Text = styled.p.attrs({ className: 'main-text' })`
  color: ${(props) => props.white ? '#fff' : props.theme.text} !important;
`;