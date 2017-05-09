/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import './Preview.css';

const Preview = (props) => {
  let screenshots = [];
  console.log('Preview repo', props.repo);
  if (props.repo.screenshots) {
    screenshots = props.repo.screenshots.map(ss =>
      <img key={`${Math.random()}`} src={ss} alt={props.repo.name} width="600" />);
  }

  let paragraphs = [];
  if (props.repo.blog) {
    paragraphs = props.repo.blog.map(bp =>
      <ReactMarkdown source={bp || ''} key={`${Math.random()}`} />,
    );
  }

  return (
    <section className="Preview">
      {screenshots}
      <h3>{props.repo.name}</h3>
      <ul>
        <li><i className="fa fa-external-link" aria-hidden="true" /> <a target="_blank" rel="noopener noreferrer" href={`http://${props.repo.name}.gilmoreg.com`}>Demo</a></li>
        <li><i className="fa fa-github" aria-hidden="true" /> <a target="_blank" rel="noopener noreferrer" href={`http://github.com/gilmoreg/${props.repo.name}`}>Repo</a></li>
      </ul>
      {paragraphs}
    </section>
  );
};

Preview.defaultProps = {
  repo: {},
};

Preview.propTypes = {
  repo: PropTypes.shape({
    topics: PropTypes.array,
    description: PropTypes.string,
    name: PropTypes.string,
    screenshots: PropTypes.array,
    blog: PropTypes.array,
  }),
};

export default Preview;
