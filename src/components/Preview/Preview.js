/* eslint-disable no-underscore-dangle */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Anikunchan from './Repos/Anikunchan';
import Condictor from './Repos/Condictor';
import Referendus from './Repos/Referendus';
import SteamBattle from './Repos/SteamBattle';
import './Preview.css';

const Preview = (props) => {
  let repo;
  switch (props.repo.name) {
    case 'anikunchan': repo = <Anikunchan />; break;
    case 'condictor': repo = <Condictor />; break;
    case 'referendus': repo = <Referendus />; break;
    case 'steam-battle': repo = <SteamBattle />; break;
    default: return null;
  }

  return (
    <section className="Preview">
      {repo}
    </section>
  );
};

Preview.defaultProps = {
  repo: {},
};

Preview.propTypes = {
  repo: PropTypes.object,
};

export default Preview;
