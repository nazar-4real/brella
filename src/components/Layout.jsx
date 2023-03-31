import { useState, useEffect, useContext } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { createGlobalStyle } from 'styled-components';

import { ThemeContext } from 'src/context/ThemeContext';

import Modal from './shared/Modal';
import Header from './header/Header';
import Footer from './footer/Footer';
import ToTopBtn from './shared/ToTopBtn';

const Layout = () => {
  const [modal, setModal] = useState(false);
  const location = useLocation();

  const { theme } = useContext(ThemeContext);

  const GlobalStyle = createGlobalStyle`
    body {
      &::-webkit-scrollbar {
        background: ${theme === 'dark' ? '#214e41' : '#fff'};
      }

      &::-webkit-scrollbar-thumb {
        background: ${theme === 'dark' ? '#43806c' : '#43806c'};
      }
    }
  `

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [location])

  return (
    <>
      <GlobalStyle />

      <Header setModal={setModal} />

      <main className="main">
        <Outlet />
      </main>

      <Footer />

      <Modal isOpen={modal} setModal={setModal} />

      <ToTopBtn />
    </>
  )
}

export default Layout;