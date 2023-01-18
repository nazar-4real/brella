import styled from 'styled-components';

export const ThemedNav = styled.nav.attrs({ className: 'nav' })`
  background: ${(props) => props.theme.background};
`;