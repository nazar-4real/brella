import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Modal from "./Shared/Modal";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import ToTopBtn from "./Shared/ToTopBtn";

import ErrorBoundary from "./Shared/ErrorBoundary";

const Layout = () => {
  const [modal, setModal] = useState(false);
  const location = useLocation();;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [location])

  return (
    <ErrorBoundary>
      <Header setModal={setModal} />

      <main className="main">
        <Outlet />
      </main>

      <Footer />

      <Modal isOpen={modal} setModal={setModal} />

      <ToTopBtn />
    </ErrorBoundary>
  )
}

export default Layout;