import React from 'react';
import PropTypes from 'prop-types';
import './Topic.css';

const Topic = props =>
  <span className="Topic">{props.topic}</span>;

Topic.defaultProps = {
  topic: '',
};

Topic.propTypes = {
  topic: PropTypes.string,
};

export default Topic;
