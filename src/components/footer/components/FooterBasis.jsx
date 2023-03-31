import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { ThemeContext } from 'src/context/ThemeContext';

import Logo from '../../shared/Logo';
import Section from '../../shared/Section';

import { InputError } from 'src/components/shared/InputError';

import logo from 'src/assets/images/logo-white.svg';
import formArrow from 'src/assets/images/arrow.svg';
import { ReactComponent as Linkedin } from 'src/assets/images/social/linkedin.svg';
import { ReactComponent as Twitter } from 'src/assets/images/social/twitter.svg';
import { ReactComponent as Youtube } from 'src/assets/images/social/youtube.svg';

const FooterBasis = () => {
  const { theme } = useContext(ThemeContext);

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
          key={i}
          style={({ isActive }) => ({
            color: isActive ? '#96e6ca' : '#fff',
            borderColor: isActive ? '#96e6ca' : 'transparent'
          })}>
          {link}
        </NavLink>
      )
    });

    return (
      <div
        className="footer-basis__column"
        key={i}>
        <h5
          className="footer-basis__column-title"
          style={{
            color: theme === 'dark' ? '#96e6ca' : '#fff'
          }}>
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

  const onSubmitForm = () => {
    navigate('/confirmed');
    reset();
  }

  return (
    <Section className="footer-basis" style={{
      backgroundColor: theme !== 'dark' ? '#214e41' : ''
    }}>
      <Logo srcPath={logo} />
      {menuColumn}
      <div className="footer-basis__column">
        <h5
          className="footer-basis__column-title"
          style={{
            color: theme === 'dark' ? '#96e6ca' : '#fff'
          }}>
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
                required: !0
              })}
            />
            {errors.email && <InputError>Not enough characters</InputError>}
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