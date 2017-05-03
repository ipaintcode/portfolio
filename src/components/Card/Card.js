import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      desc: '',
      url: '',

    };
  }

  componentWillMount() {
    fetch(`https://api.github.com/repos/gilmoreg/${this.props.repo}`)
    .then(res => res.json())
    .then((res) => {
      const fields = {};
      if (res && res.html_url) fields.url = res.html_url;
      if (res && res.description) fields.description = res.description;
      this.setState(fields);
    });
  }

  render() {
    return (
      <section className="Card col-2">
        <div>{this.props.repo}</div>
        <img width="80%" height="100" src="" alt={this.props.repo} />
        <div id={`${this.props.repo}-description`}>
          {this.state.description}
        </div>
        <ul>
          <li><a target="_blank" rel="noopener noreferrer" href={`http://${this.props.repo}.gilmoreg.com`}>Demo</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href={this.state.url}>Repo</a></li>
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
