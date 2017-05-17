/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import './Condictor.css';

const Condictor = props => (
  <section className="Condictor">
    <img src="http://res.cloudinary.com/dk85nueap/image/upload/v1494963896/condictor_montage_udqqmv.jpg" alt="Condictor" />
    <h1>Condictor</h1>
    <p>As this was my final project as a <strong>Thinkful</strong> student, I really wanted to shoot for the moon on this one. I challenged myself to pick up several frameworks and libraries outside the curriculum and broaden my knowledge as much as possible.</p>
    <p>I decided early that I would try out <strong>GraphQL</strong> and that turned out to be an amazing adventure of highs and lows! The server side implementation was unexpectedly easy; the challenges really came on the client side. I was drawn to <strong>Apollo Client</strong> and I tried hard to make it work, but ultimately decided that this project wasn’t a good fit. I learned a ton about <strong>Redux</strong> trying to make it play along with Apollo, and I experienced some of the pains of dealing with emerging technology (at one point discovering the source of a problem in a change that wasn’t documented outside of the changelog). In the end it made more sense for me to use <strong>Lokka</strong> in my Redux actions, but I was grateful for the experience.</p>
    <p>I also had quite the journey troubleshooting a <strong>Passport</strong> problem (which turned out to be, as it so often is, a simple mistake in what looked like solid code). It was at this point that I learned about using <strong>Chrome DevTools</strong> to debug <strong>Node</strong>. I was stepping through the <strong>Express</strong> and <strong>Passport</strong> source line by line trying to discover the problem. I got to see how Express middleware layers work in practice - quite an educational experience!</p>
    <p>To push myself even further, I deployed this project using <strong>Docker</strong>, and not only that, but building and deploying the Docker image through <strong>Travis CI</strong>. Getting that to work was so satisfying!</p>
    <ul>
      <li><i className="fa fa-external-link" aria-hidden="true" /> <a target="_blank" rel="noopener noreferrer" href={'http://condictor.gilmoreg.com'}>Demo</a></li>
      <li><i className="fa fa-github" aria-hidden="true" /> <a target="_blank" rel="noopener noreferrer" href={'http://github.com/gilmoreg/condictor'}>Repo</a></li>
      <li><button onClick={props.close}><i className="fa fa-times" aria-hidden="true" />Close</button></li>
    </ul>
  </section>
);

Condictor.propTypes = {
  close: PropTypes.func.isRequired,
};

export default Condictor;
