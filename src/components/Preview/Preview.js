import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Preview.css';

class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      html: '',
    };
  }

  componentWillMount() {
  }

  render() {
    return (
      <section className="Preview">
        <img width="100" height="100" src="" alt="screenshot 1" />
        <img width="100" height="100" src="" alt="screenshot 1" />
      </section>
    );
  }
}

Preview.defaultProps = {
  repo: '',
};

Preview.propTypes = {
  repo: PropTypes.string,
};

export default Preview;
