import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

import 'src/assets/styles/global.scss';

import arrow from 'src/assets/images/arrow.svg';

const ToTopBtn = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      return window.scrollY > 300 ? setShow(true) : setShow(false);
    };

    window.addEventListener('scroll', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  };

  return createPortal(
    <>
      {show ? (
        <button className="totop-btn" onClick={toTop}>
          <img className="totop-btn__icon" src={arrow} alt="To top" />
        </button >
      ) : null}
    </>,
    document.body
  )
}

export default ToTopBtn;