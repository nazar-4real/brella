import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import FetchService from 'src/services/FetchService';

import { ThemeContext } from 'src/context/ThemeContext';

import SectionInfo from '../shared/SectionInfo';
import Spinner from '../shared/Spinner';

import { Text } from 'src/theme/Text';

import './benefits.scss';

const Benefits = () => {
  const fetchService = new FetchService();
  const { theme } = useContext(ThemeContext);

  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchService.getUsers(5)
      .then(response => {
        setLinks(response);
        setLoading(false);
      })
    // eslint-disable-next-line
  }, [setLinks]);

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

  const ThemedBenefits = styled.section`
    padding: 90px 0;

    &::before {
      background-color: ${theme === 'dark' ? '#122220' : ''};
    }

    &::after {
      background-color: ${theme === 'dark' ? '#052f23' : ''};
    }
  `;

  return (
    <ThemedBenefits className="benefits">
      <div className="container">
        <div className="benefits__body">
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
              <Text white>
                Every Brella plan comes with a benefit for Moderate, Severe, and Catastrophic conditions. Employees can select the payout amounts that fit their needs and their budget.
              </Text>
              <Text white>
                Employers can fund part or all of the premiums—or offer Brella as a voluntary benefit. The choice is up to you.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </ThemedBenefits>
  );
};

export default Benefits;