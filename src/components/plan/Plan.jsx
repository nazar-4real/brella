import { useState, useEffect } from 'react';
import styled from 'styled-components';

import FetchService from 'src/services/FetchService';

import Section from '../shared/Section';
import SectionInfo from '../shared/SectionInfo';
import Spinner from '../shared/Spinner';

import { Text } from 'src/theme/Text';

import './plan.scss';

import planImg from 'src/assets/images/plan/plan-img.svg';

const ThemedCardtext = styled.p.attrs({ className: 'plan__card-text' })`
  color: ${(props) => props.theme.title};
`;

const Plan = () => {
  const fetchService = new FetchService();

  const [users, setUsers] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetchService.getUsers(4)
      .then(res => {
        setUsers(res);
        setloading(false);
      })
    // eslint-disable-next-line
  }, [setUsers]);

  const planCards = users.map(card => {
    const { id, username, email } = card;

    return (
      <div className="plan__card" key={id} >
        <h2 className="plan__card-title">
          {username}
        </h2>
        <ThemedCardtext>
          {email}
        </ThemedCardtext>
      </div>
    )
  });

  return (
    <Section className="plan">
      <SectionInfo
        className="plan__info"
        subtitle="one plan, more coverage"
        title="No one can predict which health issues might come their way.">
        <Text>
          Our broad supplemental coverage gets rid of the guesswork and puts cash in your team’s pockets for most conditions that require urgent medical attention.
        </Text>
      </SectionInfo>
      <div className="plan__img">
        <img className="plan__img-pic" src={planImg} alt="" />
      </div>
      <div className="plan__cards">
        {loading ? <Spinner /> : planCards}
      </div>
    </Section>
  );
}

export default Plan;