import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useForm } from 'react-hook-form';

import FormField from './FormField';

const Error = styled.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: crimson;
  margin: -13px 0 10px;

  @media (max-width: 768px) {
    margin-top: -8px;
    font-size: 8px;
  }
`;

const Modal = ({ isOpen, setModal }) => {

  useEffect(() => {
    if (window.matchMedia('(min-width: 992px)').matches) {
      document.documentElement.style.overflow = `${isOpen ? 'hidden' : ''}`;
      document.body.style.marginRight = `${isOpen ? '7px' : ''}`;
    }
  }, [isOpen]);

  useEffect(() => {
    const closeOnEscape = e => e.key === 'Escape' ? setModal(false) : null;
    document.body.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.removeEventListener('keydown', closeOnEscape);
    }
  }, [setModal]);

  const closeModal = (e) => {
    (e.target.matches('.modal') || e.target.closest('.modal-close')) && setModal(false);
  }

  const { register, handleSubmit, reset, clearErrors, formState: { errors } } = useForm();

  const navigate = useNavigate();

  const onSubmit = () => {
    reset();
    setModal(false);
    navigate('/confirmed');
  }

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setTimeout(() => {
        clearErrors();
      }, 2000)
    }
  })

  const inputRef = useRef(null);
  const { ref, ...rest } = register('name', {
    required: !0
  });

  useEffect(() => {
    inputRef.current && inputRef.current.focus()
  }, [isOpen])

  return createPortal(
    <>
      {!isOpen ? null : (
        <section className="modal" onClick={closeModal}>
          <div className="modal-dialog">
            <h2 className="main-title">
              Fill out the form below
            </h2>
            <form
              className="form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <FormField
                type="text"
                name="name"
                placeholder="Enter your name..."
                {...rest}
                ref={(e) => {
                  ref(e);
                  inputRef.current = e;
                }}
              />
              {errors.name && <Error>The field is mandatory</Error>}
              <FormField
                type="email"
                name="email"
                placeholder="Enter your email..."
                {...register('email', {
                  required: !0,
                  minLength: 3
                })} />
              {errors.email && <Error>The field is mandatory</Error>}
              <label className="form-label">
                <textarea
                  className="form-input"
                  placeholder="Enter your comment..."
                  {...register('comment', {
                    required: !0
                  })} />
              </label>
              {errors.comment && <Error>The field is mandatory</Error>}
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