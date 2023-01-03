import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomHelmet from '../Shared/CustomHelmet';

import About from '../about/About';

import Section from '../Shared/Section';
import SectionInfo from '../Shared/SectionInfo';
import FormField from '../Shared/FormField';

import './hero.scss';

import benefitIcon1 from '../../assets/images/hero/hero-benefit-icon-1.svg';
import benefitIcon2 from '../../assets/images/hero/hero-benefit-icon-2.svg';
import benefitIcon3 from '../../assets/images/hero/hero-benefit-icon-3.svg';

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
  const inputRef = useRef();

  const handleSearch = e => {
    e.preventDefault();

    inputRef.current.value = '';
    navigate('/confirmed');
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
          <form className="form" onSubmit={handleSearch}>
            <FormField
              placeholder="how Brella's plan works"
              name="search"
              ref={inputRef} />
            <button
              className="main-link"
              type="submit">
              Find out
            </button>
          </form>
        </SectionInfo>
        <div className="hero__benefits">
          {heroBenefitsList}
        </div>
      </Section>

      <About />
    </>
  );
};

export default Hero;