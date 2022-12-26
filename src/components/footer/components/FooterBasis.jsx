import { NavLink } from 'react-router-dom';

import Logo from '../../Shared/Logo';
import Section from '../../Shared/Section';
import FormField from '../../Shared/FormField';

import logo from '../../../assets/images/logo-white.svg';
import formArrow from '../../../assets/images/arrow.svg';
import { ReactComponent as Linkedin } from '../../../assets/images/social/linkedin.svg';
import { ReactComponent as Twitter } from '../../../assets/images/social/twitter.svg';
import { ReactComponent as Youtube } from '../../../assets/images/social/youtube.svg';

const FooterBasis = () => {
  const menuData = [
    {
      menuTitle: 'Join Brella',
      menuLinks: [
        { linkName: 'Our Plan', linkUrl: '/plan' },
        { linkName: 'Employers', linkUrl: '/employers' },
        { linkName: 'Brokers', linkUrl: '/benefits' },
        { linkName: 'Members', linkUrl: '/experience' }

      ]
    },
    {
      menuTitle: 'Company',
      menuLinks: [
        { linkName: 'About', linkUrl: '/explore' },
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
      <a
        className={`social__link ${name}`}
        href="/"
        key={i}>
        {icon}
      </a>
    )
  });

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
        <form className="form">
          <FormField
            name="search"
            placeholder="Email *" />
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