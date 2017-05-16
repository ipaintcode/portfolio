import React, { Component } from 'react';
import Preview from './Preview/Preview';
import Card from './Card/Card';
import './Portfolio.css';

const fetchGithubRepo = repo =>
  fetch(`https://api.github.com/repos/gilmoreg/${repo}`, {
    headers: {
      Accept: 'application/vnd.github.mercy-preview+json',
    },
  })
  .then(res => res.json())
  .then(res => ({
    name: repo,
    description: res.description,
    topics: res.topics,
  }))
  .catch(err => new Error(err));

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      selected: -1,
    };
    this.selectCard = this.selectCard.bind(this);
  }

  componentWillMount() {
    const repoNames = ['condictor', 'steam-battle', 'referendus', 'anikunchan'];
    const repos = repoNames.map(repo => fetchGithubRepo(repo));
    Promise.all(repos)
    .then((res) => {
      this.setState({ repos: res });
    });
  }

  selectCard(e) {
    e.preventDefault();
    const repo = e.target.dataset.repo;
    const index = this.state.repos.findIndex(r => (r.name === repo));
    if (index >= 0) this.setState({ selected: index });
  }

  render() {
    const children = this.state.repos.map(repo =>
      <Card
        key={repo.name}
        repo={repo.name}
        // screenshot={repo.cardImage}
        topics={repo ? repo.topics : []}
        description={repo ? repo.description : []}
        click={this.selectCard}
      />,
    );

    let preview = null;
    if ((this.state.selected >= 0) && this.state.repos.length) {
      preview = <Preview repo={this.state.repos[this.state.selected]} />;
    }

    return (
      <section className="Portfolio">
        <section className="cards">
          {children[0]}
          {children[1]}
          {(this.state.selected >= 0) ? preview : ''}
          {children[2]}
          {children[3]}
        </section>
      </section>
    );
  }
}

export default Portfolio;
