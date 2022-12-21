import React from 'react';
import { Link } from 'react-router-dom';

const SectionLink = ({ link = '/#', text }) => (
  <Link
    className="section-link"
    to={link}
    onClick={() => window.scrollTo({ top: 0 })}>
    {text}
  </Link>
)
export default SectionLink;