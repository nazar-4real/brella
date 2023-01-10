import { useState, useEffect } from 'react';

import CustomHelmet from '../Shared/CustomHelmet';

import FetchService from 'src/services/FetchService';

import Section from '../Shared/Section';
import SectionInfo from '../Shared/SectionInfo';
import Spinner from '../Shared/Spinner';

import './plan.scss';

import planImg from 'src/assets/images/plan/plan-img.svg';

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
        <p className="plan__card-text">
          {email}
        </p>
      </div>
    )
  });

  return (
    <>
      <CustomHelmet title="Our Plan" />

      <Section className="plan">
        <SectionInfo
          className="plan__info"
          subtitle="one plan, more coverage"
          title="No one can predict which health issues might come their way.">
          <p className="main-text">
            Our broad supplemental coverage gets rid of the guesswork and puts cash in your team’s pockets for most conditions that require urgent medical attention.
          </p>
        </SectionInfo>
        <div className="plan__img">
          <img className="plan__img-pic" src={planImg} alt="" />
        </div>
        <div className="plan__cards">
          {loading ? <Spinner /> : planCards}
        </div>
      </Section>
    </>
  );
}

export default Plan;