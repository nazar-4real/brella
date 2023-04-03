import { useState, useEffect } from 'react';

import FetchService from 'src/services/FetchService';

import Section from '../shared/Section';
import Spinner from '../shared/Spinner';

import { Title } from 'src/theme/Title';
import { Text } from 'src/theme/Text';
import { LazyImage } from '../shared/LazyImage';

import './blog.scss';

import blogCard1 from 'src/assets/images/blog/blog-card-1.jpg';
import blogCard2 from 'src/assets/images/blog/blog-card-2.jpg';
import blogCard3 from 'src/assets/images/blog/blog-card-3.jpg';

const Blog = () => {
  const fetchService = new FetchService();

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchService.getUsers(3)
      .then(res => {
        setArticles(res);
        setLoading(false);
      })
    // eslint-disable-next-line
  }, [setArticles]);

  const blogImages = [blogCard1, blogCard2, blogCard3];

  const articlesCards = articles && articles.map((item, i) => {
    const { username, company: { catchPhrase } } = item;

    return (
      <div
        className="blog__card"
        key={i}>
        <div className="blog__card-picture">
          <LazyImage
            className="blog__card-img"
            src={blogImages[i]}
            alt="Article about some event" />
        </div>
        <Text className="blog__card-tag">
          {username}
        </Text>
        <Title className="main-title">
          {catchPhrase}
        </Title>
      </div>
    )
  });

  return (
    <Section className="blog">
      <div className="blog__cards">
        {loading ? <Spinner /> : articlesCards}
      </div>
    </Section>
  );
};

export default Blog;
