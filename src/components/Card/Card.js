/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import Topic from './Topic';
import './Card.css';

const Card = (props) => {
  let topics = [];
  if (props.topics.length) {
    topics = props.topics.map(t => <Topic topic={t} key={t} />);
  }

  return (
    <section className="Card col-5" onClick={props.click}>
      <div className="card-title">{props.repo}</div>
      <img width="80%" height="100" src="" alt={props.repo} />
      {topics}
      <div id={`${props.repo}-description`}>
        {props.description}
      </div>
    </section>
  );
};

Card.propTypes = {
  repo: PropTypes.string,
  topics: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  click: PropTypes.func,
};

Card.defaultProps = {
  repo: '',
  topics: [],
  description: '',
  click: () => ({}),
};

export default Card;
