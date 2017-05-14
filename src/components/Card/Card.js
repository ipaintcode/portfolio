/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = (props) => {
  let topics = [];
  if (props.topics && props.topics.length) {
    topics = props.topics.map(t => <li key={t}>{t.toUpperCase()}</li>);
  }

  let image = '';
  switch (props.repo) {
    case 'anikunchan': image = 'http://res.cloudinary.com/dk85nueap/image/upload/c_scale,h_200/v1494283259/Screen_Shot_2017-05-08_at_5.35.46_PM_ujgsri.png'; break;
    case 'condictor': image = 'http://res.cloudinary.com/dk85nueap/image/upload/v1494649577/condictor_1_ytegvq.jpg'; break;
    case 'referendus': image = 'http://res.cloudinary.com/dk85nueap/image/upload/c_scale,h_200/v1494639165/Screen_Shot_2017-05-12_at_8.32.11_PM_gkjp6c.png'; break;
    case 'steam-battle': image = 'http://res.cloudinary.com/dk85nueap/image/upload/c_scale,h_200/v1494638837/Screen_Shot_2017-05-12_at_8.26.35_PM_bbfk1a.png'; break;
    default:
  }

  return (
    <section className="Card col-5">
      <img src={image} alt={props.repo} />
      <div className="card-title">{props.repo.toUpperCase()}</div>
      <div id={`${props.repo}-description`} className="description">
        {props.description}
      </div>
      <ul className="topics-list">
        {topics}
      </ul>
      <button data-repo={props.repo} onClick={props.click}>Project Details</button>
    </section>
  );
};

Card.propTypes = {
  repo: PropTypes.string,
  screenshot: PropTypes.string,
  topics: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  click: PropTypes.func,
};

Card.defaultProps = {
  repo: '',
  screenshot: '',
  topics: [],
  description: '',
  click: () => ({}),
};

export default Card;
