import { useEffect, useRef, useContext } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useForm } from 'react-hook-form';

import { ThemeContext } from 'src/context/ThemeContext';

import { ModalDialog } from 'src/theme/ModalDialog';
import { Title } from 'src/theme/Title';
import FormField from './FormField';

import { InputError } from './InputError';

const CloseBtn = styled.button.attrs({ className: 'modal-close' })`
  span {
    background: ${(props) => props.theme.title}
  }
`;

const Modal = ({ isOpen, setModal }) => {
  const { theme } = useContext(ThemeContext);

  const bodyRef = useRef(document.body);
  const bodyComp = bodyRef.current;

  useEffect(() => {
    bodyComp.style.overflow = `${isOpen ? 'hidden' : ''}`;
    window.matchMedia('(min-width: 991px)').matches && (
      bodyComp.style.cssText = (isOpen ? `
        margin-right: 7px;
        overflow: hidden;
      ` : ``)
    );
    // eslint-disable-next-line
  }, [isOpen]);

  useEffect(() => {
    const closeOnEscape = e => e.key === 'Escape' ? setModal(false) : null;
    bodyComp.addEventListener('keydown', closeOnEscape);

    return () => {
      bodyComp.removeEventListener('keydown', closeOnEscape);
    }
    // eslint-disable-next-line
  }, [isOpen]);

  const closeModal = (e) => {
    (e.target.matches('.modal') || e.target.closest('.modal-close')) && setModal(false);
  }

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const navigate = useNavigate();

  const onSubmit = data => {
    const isCorrectData = window.confirm('Your data is correct?\n' + JSON.stringify(data));
    if (isCorrectData) {
      reset();
      setModal(false);
      navigate('/confirmed');
    } else {
      setModal(true);
    }
  }

  useEffect(() => {
    reset();
    // eslint-disable-next-line
  }, [isOpen])

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
          <ModalDialog className="modal-dialog">
            <Title className="main-title">
              Fill out the form below
            </Title>
            <form
              className="form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <FormField
                type="text"
                name="name"
                placeholder="Enter your name..."
                fieldError={errors.name && <InputError>This field is mandatory</InputError>}
                {...rest}
                ref={(e) => {
                  ref(e);
                  inputRef.current = e;
                }}
              />
              <FormField
                type="email"
                name="email"
                placeholder="Enter your email..."
                fieldError={errors.email && <InputError>Incorrect email</InputError>}
                {...register('email', {
                  required: !0
                })} />
              <label className="form-label">
                <textarea
                  className="form-input"
                  placeholder="Enter your comment..."
                  style={{
                    background: theme === 'dark' ? '#151515' : '',
                    color: theme === 'dark' ? '#96e6ca' : ''
                  }}
                  {...register('comment', {
                    required: !0
                  })} />
                {errors.comment && <InputError>The field is mandatory</InputError>}
              </label>
              <button
                className="main-link"
                type="submit"
                style={{
                  backgroundColor: theme === 'dark' ? '#96e6ca' : '',
                  color: theme === 'dark' ? '#214e41' : ''
                }}>
                Send
              </button>
            </form>
            <CloseBtn>
              <span></span>
              <span></span>
            </CloseBtn>
          </ModalDialog>
        </section>
      )
      }
    </>,
    document.body
  )
}

export default Modal;