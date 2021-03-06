/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = (props) => {
  let topics = [];
  // console.log('Card', props);
  if (props.topics.length) {
    topics = props.topics.map(t => <span key={t}>{t} </span>);
  }

  return (
    <section className="Card col-5">
      <img src={props.screenshot} alt={props.repo} />
      <div className="card-title">{props.repo.toUpperCase()}</div>
      <div id={`${props.repo}-description`} className="description">
        {props.description}
      </div>
      <span>Technologies: </span>{topics}
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
