/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Topic from './Topic';
import './Card.css';

class Card extends Component {
  render() {
    let topics = [];
    if (this.props.topics.length) {
      topics = this.props.topics.map(t => <Topic topic={t} key={t} />);
    }

    return (
      <section className="Card col-5">
        <div className="card-title">{this.props.repo}</div>
        <img width="80%" height="100" src="" alt={this.props.repo} />
        {topics}
        <div id={`${this.props.repo}-description`}>
          {this.props.description}
        </div>
        <button data-repo={this.props.repo} onClick={this.props.click}>Click me</button>
      </section>
    );
  }
}

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
