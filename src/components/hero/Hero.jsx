import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { ThemeContext } from 'src/context/ThemeContext';

import Section from '../shared/Section';
import SectionInfo from '../shared/SectionInfo';

import { InputError } from '../shared/InputError';

import './hero.scss';

import benefitIcon1 from 'src/assets/images/hero/hero-benefit-icon-1.svg';
import benefitIcon2 from 'src/assets/images/hero/hero-benefit-icon-2.svg';
import benefitIcon3 from 'src/assets/images/hero/hero-benefit-icon-3.svg';

const Hero = () => {
  const { theme } = useContext(ThemeContext);

  const heroBenefitsData = [
    {
      benefitIcon: benefitIcon1,
      benefitTitle: 'More coverage',
      benefitText: 'Brella covers 13,000+ injuries and illnesses from concussions to cancer.'
    },
    {
      benefitIcon: benefitIcon2,
      benefitTitle: 'Less hassle',
      benefitText: 'One easy-to-manage plan with paperless install and online admin tools.'
    },
    {
      benefitIcon: benefitIcon3,
      benefitTitle: 'Faster benefits',
      benefitText: 'Brella pays claims in hours–not weeks so your people can rest easy.'
    },
  ];

  const heroBenefitsList = heroBenefitsData.map((heroBenefit, i) => {
    const { benefitIcon, benefitTitle, benefitText } = heroBenefit;

    return (
      <div
        className="hero__benefit"
        key={i}>
        <img
          className="hero__benefit-icon"
          src={benefitIcon}
          alt="Benefit" />
        <div className="hero__benefit-info">
          <h5 className="hero__benefit-title"
            style={{
              color: theme === 'dark' ? '#96e6ca' : ''
            }}>
            {benefitTitle}
          </h5>
          <p className="hero__benefit-text"
            style={{
              color: theme === 'dark' ? '#fff' : ''
            }}>
            {benefitText}
          </p>
        </div>
      </div>
    )
  });

  const navigate = useNavigate();
  const { register, handleSubmit, reset, clearErrors, formState: { errors } } = useForm();

  const onSubmitForm = data => {
    navigate('/confirmed');
    reset();
    alert(JSON.stringify(data));
  }

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setTimeout(() => {
        clearErrors();
      }, 2000)
    }
  })

  const themedSection = theme === 'dark' ? {
    backgroundColor: 'rgba(0, 0, 0, .6)',
    backgroundBlendMode: 'color'
  } : {
    backgroundColor: 'transparent'
  };

  return (
    <Section className="hero" style={themedSection}>
      <SectionInfo
        className="hero__info"
        isSubtitle={false}
        title="Give your team peace of mind with supplemental health insurance from Brella.">
        <p
          className="hero__text"
          style={{
            color: theme === 'dark' ? '#fff' : ''
          }}>
          I'm wondering...
        </p>
        <form className="form" onSubmit={handleSubmit(onSubmitForm)}>
          <label className="form-label">
            <input
              className="form-input"
              placeholder="Enter your request"
              style={{
                background: theme === 'dark' ? '#151515' : '',
                color: theme === 'dark' ? '#fff' : ''
              }}
              {...register('search', {
                required: !0
              })}
            />
            {errors.search && <InputError>This field is required</InputError>}
          </label>
          <button
            className="main-link"
            type="submit"
            style={{
              color: theme === 'dark' ? '#214e41' : '',
              background: theme === 'dark' ? '#96e6ca' : ''
            }}
          >
            Find out
          </button>
        </form>
      </SectionInfo>
      <div className="hero__benefits"
        style={{
          background: theme === 'dark' ? '#151515' : ''
        }}>
        {heroBenefitsList}
      </div>
    </Section>
  );
};

export default Hero;