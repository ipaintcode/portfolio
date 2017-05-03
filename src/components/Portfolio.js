import React, { Component } from 'react';
import Preview from './Preview/Preview';
import Card from './Card/Card';
import './Portfolio.css';

class Portfolio extends Component {
  render() {
    return (
      <section className="Portfolio">
        <Preview />
        <section className="cards">
          <Card repo={'condictor'} />
          <Card repo={'referendus'} />
          <Card repo={'steam-battle'} />
          <Card repo={'anikunchan'} />
        </section>
      </section>
    );
  }
}

export default Portfolio;
