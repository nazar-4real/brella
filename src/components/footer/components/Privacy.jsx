import { Link } from "react-router-dom";

import Section from "../../Shared/Section";

const Privacy = () => {
  const date = new Date().getFullYear();

  const privacyText = [
    'Brella is a limited benefit policy; it is not a substitute for health insurance. The information provided on this website is illustrative only. A complete description of benefits, limitations, and exclusions are provided in your certificate of Insurance and applicable Riders. For a summary of limitations and exclusions, see our FAQ. Payout values listed do not guarantee an amount to be paid for listed conditions. Product not available in all states. All coverage is subject to the terms and conditions of the master group policy.',
    'Brella is underwritten by Greenhouse Life Insurance Company (NAIC 80055). Form No. PFSB11-TX',
    'Reach us by mail at 2093 Philadelphia Pike #2496, Claymont, DE 19703 and by phone at'
  ];

  const privacyLinksData = [
    {
      nameUrl: 'Privacy',
      refUrl: '/privacy',
    },
    {
      nameUrl: 'Terms of Service',
      refUrl: '/terms'
    }
  ];

  const privacyContent = privacyText.map((text, i) => (
    <p key={i}>
      {text}
    </p>
  ));

  const privacyLinks = privacyLinksData.map((link, i) => {
    const { nameUrl: name, refUrl: url } = link;

    return (
      <li
        className="copyright__link-item"
        key={i}>
        <Link
          className="copyright__link"
          to={url}>
          {name}
        </Link>
      </li>
    )
  });

  return (
    <Section className="privacy">
      <div className="privacy__text">
        {privacyContent}
      </div>
      <div className="copyright">
        <p className="copyright__text">
          © {date} Brella Insurance Inc. All Rights Reserved.
          <br />
          Developed by <a href="https://github.com/nazar-4real" target="_blank" rel="noreferrer noopener">
            Nazar Marusyk
          </a>
        </p>
        <ul className="copyright__links">
          {privacyLinks}
        </ul>
      </div>
    </Section>
  );
}

export default Privacy;