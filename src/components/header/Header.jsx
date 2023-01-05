import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import Logo from '../Shared/Logo';
import Button from '../Shared/Button';

import './header.scss';

import logo from '../../assets/images/logo.svg';

const Header = ({ setModal }) => {

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
        <NavLink
          className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
          to={linkRef}>
          {linkText}
        </NavLink>
      </li>
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
    document.documentElement.style.overflow = `${showMenu ? 'hidden' : ''}`;
  }, [showMenu]);

  const location = useLocation();

  useEffect(() => {
    setShowMenu(false);
  }, [location]);

  const [theme, setTheme] = useState('light');
  const bodyRef = useRef(document.body);

  useEffect(() => {
    bodyRef.current.setAttribute('data-theme', theme);
  }, [theme]);

  const changeTheme = () => {
    bodyRef.current.getAttribute('data-theme') === 'light'
      ? setTheme('dark')
      : setTheme('light');
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__body">
          <Logo srcPath={logo} />
          <nav className={`nav ${showMenu ? 'show' : ''}`}>
            <ul className="nav__list">
              {renderLinks}
            </ul>
            <button className="nav_close" onClick={handleMenu}>
              <span></span>
              <span></span>
            </button>
          </nav>
          <input id="theme-switch" type="checkbox" />
          <label
            className="theme-handler"
            htmlFor="theme-switch"
            onClick={changeTheme}>
            <span className="theme-handler_lever"></span>
          </label>
          <div className="header__actions">
            <Button text="Request a demo" onClick={handleModal} />
          </div>
          <button className="burger" onClick={handleMenu}>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header;