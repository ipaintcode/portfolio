/* eslint-disable max-len */
import React from 'react';
import './Referendus.css';

const Referendus = () => (
  <section>
    <img src="https://cloud.githubusercontent.com/assets/18176333/22914304/5e6e4e3e-f235-11e6-8c51-b1622ae48f38.png" alt="Referendus" />
    <h1>Referendus</h1>
    <p>My first fullstack project as a <strong>Thinkful</strong> student. I really wanted to challenge myself to make a complicated back end, with flexible endpoints including authentication. I think I was able to take a relatively complicated problem and rationally organize it.</p>
    <p>One challenge I encountered was that due to security concerns clipboard functions must be invoked a very short time after the user action that triggers them, meaning that I could not wait for the network. This meant that I had to develop a local cache that would mirror the server’s data and keep them in sync, so that the user would be getting accurate results when copying to the clipboard. I toyed with using <strong>LocalStorage</strong> for this, but it turned out that memory was sufficient. I did however use LocalStorage to store the user’s format choice.</p>
    <p>Since I used <strong>Bootstrap</strong> for this project, I was able to focus more of my development time on the Javascript on both the front and back end. This project is where I really got my feet wet with <strong>Passport</strong> and session management. I also gained a ton of testing experience with this project; I learned to write tests for <strong>MongoDB</strong> transactions, <strong>Express</strong> endpoints, including asynchronous code. All of this knowledge carried forward into my later projects where I switched testing frameworks.</p>
    <ul>
      <li><i className="fa fa-external-link" aria-hidden="true" /> <a target="_blank" rel="noopener noreferrer" href={'http://referendus.gilmoreg.com'}>Demo</a></li>
      <li><i className="fa fa-github" aria-hidden="true" /> <a target="_blank" rel="noopener noreferrer" href={'http://github.com/gilmoreg/referendus'}>Repo</a></li>
    </ul>
  </section>
);

export default Referendus;
