import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Section from '../Shared/Section';
import SectionInfo from '../Shared/SectionInfo';
import Spinner from '../Shared/Spinner';

import FetchService from '../../services/FetchService.js';

import './benefits.scss';

const Benefits = () => {

  const fetchService = new FetchService();

  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchService.getUsers(5)
      .then(response => {
        setLinks(response);
        setLoading(false);
      })
    // eslint-disable-next-line
  }, []);

  const linksList = links.map(link => {
    const { id, website, name } = link;

    return (
      <li
        className="benefits__list-item"
        key={id}>
        <Link
          className="benefits__list-link"
          to={website}>
          {name}
        </Link>
      </li >
    )
  });

  return (
    <Section className="benefits">
      {loading ? <Spinner /> : (
        <SectionInfo
          className="benefits__info"
          subtitle="brella brings"
          title="Customizable benefits">
          <ul className="benefits__list">
            {linksList}
          </ul>
        </SectionInfo>
      )}
      <div className="benefits__content">
        <div className="benefits__text">
          <p>
            Every Brella plan comes with a benefit for Moderate, Severe, and Catastrophic conditions. Employees can select the payout amounts that fit their needs and their budget.
          </p>
          <p>
            Employers can fund part or all of the premiums—or offer Brella as a voluntary benefit. The choice is up to you.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Benefits;