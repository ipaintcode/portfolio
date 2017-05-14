/* eslint-disable max-len */
import React from 'react';
import './Referendus.css';

const Referendus = () => (
  <section>
    <h1>Referendus</h1>
    <img src="https://cloud.githubusercontent.com/assets/18176333/22914304/5e6e4e3e-f235-11e6-8c51-b1622ae48f38.png" alt="Referendus" />
    <p>My first fullstack project as a Thinkful student. I really wanted to challenge myself to make a complicated back end, with flexible endpoints including authentication. I think I was able to take a relatively complicated problem and rationally organize it.</p>
    <p>One challenge I encountered was that due to security concerns clipboard functions must be invoked a very short time after the user action that triggers them, meaning that I could not wait for the network. This meant that I had to develop a local cache that would mirror the server’s data and keep them in sync, so that the user would be getting accurate results when copying to the clipboard. I toyed with using LocalStorage for this, but it turned out that memory was sufficient. I did however use LocalStorage to store the user’s format choice; why not use the knowledge I’d gained?</p>
    <ul>
      <li><i className="fa fa-external-link" aria-hidden="true" /> <a target="_blank" rel="noopener noreferrer" href={'http://referendus.gilmoreg.com'}>Demo</a></li>
      <li><i className="fa fa-github" aria-hidden="true" /> <a target="_blank" rel="noopener noreferrer" href={'http://github.com/gilmoreg/referendus'}>Repo</a></li>
    </ul>
  </section>
);

export default Referendus;
