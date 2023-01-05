import { useForm } from 'react-hook-form';

import { Link, NavLink, useNavigate } from 'react-router-dom';

import Logo from '../../Shared/Logo';
import Section from '../../Shared/Section';

import logo from '../../../assets/images/logo-white.svg';
import formArrow from '../../../assets/images/arrow.svg';
import { ReactComponent as Linkedin } from '../../../assets/images/social/linkedin.svg';
import { ReactComponent as Twitter } from '../../../assets/images/social/twitter.svg';
import { ReactComponent as Youtube } from '../../../assets/images/social/youtube.svg';

import { InputError } from '../../hero/Hero';

const FooterBasis = () => {
  const menuData = [
    {
      menuTitle: 'Join Brella',
      menuLinks: [
        { linkName: 'Our Plan', linkUrl: '/plan' },
        { linkName: 'Employers', linkUrl: '/employers' },
        { linkName: 'Brokers', linkUrl: '/brokers' },
        { linkName: 'Members', linkUrl: '/members' }

      ]
    },
    {
      menuTitle: 'Company',
      menuLinks: [
        { linkName: 'About', linkUrl: '/about' },
        { linkName: 'Blog', linkUrl: '/blog' },
        { linkName: 'Careers', linkUrl: '/careers' },
        { linkName: 'Contact', linkUrl: '/contact' }
      ]
    }
  ];

  const socialIcons = [
    {
      socialIcon: <Linkedin />,
      socialName: 'linkedin'
    },
    {
      socialIcon: <Twitter />,
      socialName: 'twitter'
    },
    {
      socialIcon: <Youtube />,
      socialName: 'youtube'
    }
  ];

  const menuColumn = menuData.map((menu, i) => {
    const menuLinks = menu.menuLinks.map((menuLink, i) => {
      const { linkName: link, linkUrl: url } = menuLink;

      return (
        <NavLink
          className={({ isActive }) => isActive ? 'footer-nav__link active-link' : 'footer-nav__link'}
          to={url}
          key={i} >
          {link}
        </NavLink>
      )
    });

    return (
      <div
        className="footer-basis__column"
        key={i}>
        <h5 className="footer-basis__column-title">
          {menu.menuTitle}
        </h5>
        <div className="footer-nav">
          {menuLinks}
        </div>
      </div>
    )
  });

  const socialMedia = socialIcons.map((item, i) => {
    const { socialIcon: icon, socialName: name } = item;

    return (
      <Link
        className={`social__link ${name}`}
        to="/#"
        key={i}>
        {icon}
      </Link>
    )
  });

  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmitForm = data => {
    navigate('/confirmed');
    console.log(JSON.stringify(data));
    reset();
  }

  return (
    <Section className="footer-basis">
      <Logo srcPath={logo} />
      {menuColumn}
      <div className="footer-basis__column">
        <h5 className="footer-basis__column-title">
          Get the latest
        </h5>
        <p className="footer-text">
          Sign up to receive benefits news and insights in your inbox once a month.
        </p>
        <form className="form" onSubmit={handleSubmit(onSubmitForm)}>
          <label className="form-label">
            <input
              className="form-input"
              placeholder="Email*"
              {...register('email', {
                required: !0,
                minLength: 5
              })}
            />
            {errors.email && <InputError>This field is required</InputError>}
          </label>
          <button
            className="form-submit"
            type="submit">
            <img
              className="form-icon"
              src={formArrow}
              alt="Submit arrow" />
          </button>
        </form>
        <div className="social">
          {socialMedia}
        </div>
      </div>
    </Section>
  );
};

export default FooterBasis;