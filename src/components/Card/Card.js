/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = (props) => {
  let topics = [];
  if (props.topics && props.topics.length) {
    topics = props.topics.map(t => <li key={t}>{t.toUpperCase()}</li>);
  }

  return (
    <section className="Card col-5">
      <img src={props.screenshot} alt={props.repo} />
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
