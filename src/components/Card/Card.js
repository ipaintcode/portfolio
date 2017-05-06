/* eslint-disable max-len */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Topic from './Topic';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      desc: '',
      url: '',
      topics: [],
    };
  }

  componentWillMount() {
    fetch(`https://api.github.com/repos/gilmoreg/${this.props.repo}`, {
      headers: {
        Accept: 'application/vnd.github.mercy-preview+json',
      },
    })
    .then(res => res.json())
    .then((res) => {
      const fields = {};
      if (res) {
        if (res.html_url) fields.url = res.html_url;
        if (res.description) fields.description = res.description;
        if (res.topics) fields.topics = res.topics;
        this.setState(fields);
      }
    });
  }

  render() {
    let topics = [];
    if (this.state.topics.length) {
      topics = this.state.topics.map(t => <Topic topic={t} key={t} />);
    }

    return (
      <section className="Card col-5">
        <div className="card-title">{this.props.repo}</div>
        <img width="80%" height="100" src="" alt={this.props.repo} />
        {topics}
        <div id={`${this.props.repo}-description`}>
          {this.state.description}
        </div>
        <ul>
          <li><i className="fa fa-external-link" aria-hidden="true" /> <a target="_blank" rel="noopener noreferrer" href={`http://${this.props.repo}.gilmoreg.com`}>Demo</a></li>
          <li><i className="fa fa-github" aria-hidden="true" /> <a target="_blank" rel="noopener noreferrer" href={this.state.url}>Repo</a></li>
        </ul>
      </section>
    );
  }
}

Card.propTypes = {
  repo: PropTypes.string,
};

Card.defaultProps = {
  repo: '',
};

export default Card;
