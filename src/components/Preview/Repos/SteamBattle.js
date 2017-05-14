/* eslint-disable max-len */
import React from 'react';
import './SteamBattle.css';

const SteamBattle = () => (
  <section>
    <h1>Steam Battle</h1>
    <img src="https://cloud.githubusercontent.com/assets/18176333/24309924/c9490b84-109b-11e7-8f7a-4d2e4ee1b365.png" alt="Steam Battle" />
    <p>Enter two Steam IDs (in any of the accepted formats) and see which gamer is more hardcore! Steam Battle will calculate a score based on the number of games owned and hours played; time played in the last two weeks counts for double!</p>
    <p>If you dont know any Steam users you can just hit Random to see a battle between two random players!</p>
    <ul>
      <li><i className="fa fa-external-link" aria-hidden="true" /> <a target="_blank" rel="noopener noreferrer" href={'http://steam-battle.gilmoreg.com'}>Demo</a></li>
      <li><i className="fa fa-github" aria-hidden="true" /> <a target="_blank" rel="noopener noreferrer" href={'http://github.com/gilmoreg/steam-battle'}>Repo</a></li>
    </ul>
  </section>
);

export default SteamBattle;
