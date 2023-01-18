import { useState, useEffect, useContext, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { ThemeContext } from 'src/context/ThemeContext';

import Logo from '../shared/Logo';
import Button from '../shared/Button';

import { HeaderThemed } from 'src/theme/Header';
import { NavLinkThemed } from 'src/theme/Header';

import { ThemedNav } from 'src/theme/Nav';

import './header.scss';

import logo from 'src/assets/images/logo.svg';
import logoThemed from 'src/assets/images/logo-themed.svg';

const Header = ({ setModal }) => {
  const { theme, switchTheme } = useContext(ThemeContext);

  const linksData = [
    { label: 'Our Plan', url: '/plan' },
    { label: 'Employers', url: '/employers' },
    { label: 'Brokers', url: '/brokers' },
    { label: 'Members', url: '/members' },
    { label: 'About', url: '/about' },
    { label: 'Blog', url: '/blog' }
  ];

  const renderLinks = linksData.map((link, i) => {
    const { label: linkText, url: linkRef } = link;

    return (
      <li className="nav__item"
        key={i}>
        <NavLinkThemed
          to={linkRef}
        >
          {linkText}
        </NavLinkThemed>
      </li >
    )
  });

  const handleModal = (e) => {
    e.preventDefault();
    setModal(true);
  }

  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(showMenu => !showMenu);
  }

  useEffect(() => {
    document.documentElement.style.overflow = showMenu ? 'hidden' : '';
  }, [showMenu]);

  const location = useLocation();

  useEffect(() => {
    setShowMenu(false);
  }, [location]);

  const headerRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 1) {
        headerRef.current.style.cssText = 'padding: 10px 0; box-shadow: 0 3px 10px -2px rgba(255, 255, 255, .5);';
      } else {
        headerRef.current.style.cssText = '';
      }
    })
    // eslint-disable-next-line
  }, [window.scrollY])

  return (
    <HeaderThemed className="header" ref={headerRef}>
      <div className="container">
        <div className="header__body">
          <Logo srcPath={theme === 'dark' ? logoThemed : logo} />
          <ThemedNav className={`${showMenu ? 'show' : ''} `}>
            <div className="nav__inner">
              <ul className="nav__list">
                {renderLinks}
              </ul>
            </div>
            <button className="nav_close" onClick={handleMenu}>
              <span></span>
              <span></span>
            </button>
          </ThemedNav>
          <input
            id="theme-switch"
            type="checkbox"
            defaultChecked={theme === 'dark'}
          />
          <label
            className="theme-handler"
            htmlFor="theme-switch"
            onClick={() => switchTheme(theme === 'dark' ? 'light' : 'dark')}
            style={{
              borderColor: theme === 'dark' ? '#77c1a7' : '#43806c'
            }}
          >
            <span className="theme-handler_lever"></span>
          </label>
          <div className="header__actions">
            <Button
              text="Request a demo"
              onClick={handleModal} />
          </div>
          <button className="burger" onClick={handleMenu}>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </HeaderThemed >
  )
}

export default Header;