import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import '../../assets/styles/global.scss';

import arrow from '../../assets/images/arrow.svg';

const ToTopBtn = () => {

  const [show, setShow] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      return window.scrollY > 500 ? setShow(true) : setShow(false);
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

  return ReactDOM.createPortal(
    <>
      {show ? (
        <button className="totop-btn" onClick={toTop}>
          <img className="totop-btn__icon" src={arrow} alt="" />
        </button >
      ) : null}
    </>,
    document.body
  )
}

export default ToTopBtn;