import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderThemed = styled.header`
  background: ${(props) => props.theme.background};
`;

export const NavLinkThemed = styled(NavLink).attrs({ className: 'nav-link' })`
  color: ${(props) => props.theme.link};

  &.active {
    border-color: ${(props) => props.theme.activeLink};
    color: ${(props) => props.theme.activeLink};
  }
`;