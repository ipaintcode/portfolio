/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import './SteamBattle.css';

const SteamBattle = props => (
  <section>
    <img src="https://cloud.githubusercontent.com/assets/18176333/24309924/c9490b84-109b-11e7-8f7a-4d2e4ee1b365.png" alt="Steam Battle" />
    <h1>Steam Battle</h1>
    <p>My first <strong>React/Redux</strong> project. I never expected React to be so much fun!</p>
    <p>The major challenge on this project was struggling with the <strong>Steam API</strong>. It is a poor quality API: it is highly fragmented, outdated, and inadequately documented. It has multiple endpoints using different formats with no consistent return pattern. Although I think this project was successful in the end, I had to scrap many plans to make the scoring more complex and interesting due to limitations of the API.</p>
    <p>Since the Steam API does not support <strong>CORS</strong>, I had to create a backend proxy. Since I love <strong>Node</strong> so much, I was grateful for the chance to do so. Perhaps the greatest part of that was learning how to test network calls from the server side. The <strong>moxios</strong> library for <strong>axios</strong> made it simple in the end.</p>
    <p>On the front end, dealing with the Steam APIs rate limit meant that I had to throttle my network calls. I used <strong>lodash</strong> <strong>debounce</strong> to implement a custom type-ahead feature that tells you when you have a valid Steam ID as you type.</p>
    <p>My struggles with the Steam API certainly inspired me to write better APIs myself. It was a major factor in pushing me to try out <strong>GraphQL</strong> on my next project.</p>
    <ul>
      <li><i className="fa fa-external-link" aria-hidden="true" /> <a target="_blank" rel="noopener noreferrer" href={'http://steam-battle.gilmoreg.com'}>Demo</a></li>
      <li><i className="fa fa-github" aria-hidden="true" /> <a target="_blank" rel="noopener noreferrer" href={'http://github.com/gilmoreg/steam-battle'}>Repo</a></li>
      <li><button onClick={props.close}><i className="fa fa-times" aria-hidden="true" />Close</button></li>
    </ul>
  </section>
);

SteamBattle.propTypes = {
  close: PropTypes.func.isRequired,
};

export default SteamBattle;
