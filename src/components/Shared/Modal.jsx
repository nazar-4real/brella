import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import FormField from './FormField';

const Modal = ({ isOpen, setModal }) => {
  const inputRef = useRef();

  useEffect(() => {
    document.documentElement.style.overflow = `${isOpen ? 'hidden' : ''}`;
    document.body.style.marginRight = `${isOpen ? '7px' : ''}`;
  }, [isOpen]);

  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  });

  useEffect(() => {
    const closeOnEscape = e => e.key === 'Escape' ? setModal(false) : null;
    document.body.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.removeEventListener('keydown', closeOnEscape);
    }
  }, [setModal]);

  const closeModal = (e) => {
    if (e.target.matches('.modal') || e.target.closest('.modal-close')) {
      setModal(false);
    }
  }

  return ReactDOM.createPortal(
    <>
      {!isOpen ? null : (
        <section className="modal" onClick={closeModal}>
          <div className="modal-dialog">
            <h2 className="main-title">
              Fill out the form below
            </h2>
            <form className="form">
              <FormField
                name="name"
                placeholder="Enter your name..."
                ref={inputRef} />
              <FormField
                type="email"
                name="email"
                placeholder="Enter your email..." />
              <label className="form-label">
                <textarea
                  className="form-input"
                  placeholder="Enter your comment..."
                  required />
              </label>
              <button
                className="main-link"
                type="submit">
                Send
              </button>
            </form>
            <button className="modal-close">
              <span></span>
              <span></span>
            </button>
          </div>
        </section>
      )}
    </>,
    document.body
  )
}

export default Modal;