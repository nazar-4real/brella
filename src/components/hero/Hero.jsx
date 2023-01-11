import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import CustomHelmet from '../Shared/CustomHelmet';

import Section from '../Shared/Section';
import SectionInfo from '../Shared/SectionInfo';

import './hero.scss';

import benefitIcon1 from 'src/assets/images/hero/hero-benefit-icon-1.svg';
import benefitIcon2 from 'src/assets/images/hero/hero-benefit-icon-2.svg';
import benefitIcon3 from 'src/assets/images/hero/hero-benefit-icon-3.svg';

export const InputError = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: crimson;
  margin: 5px 0 0 17px;
`;

const Hero = () => {

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
          <h5 className="hero__benefit-title">
            {benefitTitle}
          </h5>
          <p className="hero__benefit-text">
            {benefitText}
          </p>
        </div>
      </div>
    )
  });

  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmitForm = data => {
    navigate('/confirmed');
    reset();
  }

  return (
    <>
      <CustomHelmet title="Brella" />

      <Section className="hero">
        <SectionInfo
          className="hero__info"
          isSubtitle={false}
          title="Give your team peace of mind with supplemental health insurance from Brella.">
          <p className="hero__text">
            I'm wondering...
          </p>
          <form className="form" onSubmit={handleSubmit(onSubmitForm)}>
            <label className="form-label">
              <input
                className="form-input"
                placeholder="Enter your request"
                {...register('search', {
                  required: !0
                })}
              />
              {errors.search && <InputError>This field is required</InputError>}
            </label>
            <button
              className="main-link"
              type="submit"
            >
              Find out
            </button>
          </form>
        </SectionInfo>
        <div className="hero__benefits">
          {heroBenefitsList}
        </div>
      </Section>
    </>
  );
};

export default Hero;