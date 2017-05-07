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

const fetchPreview = repo =>
  fetch(`https://kjhv7b3x01.execute-api.us-east-1.amazonaws.com/production/fetchRepo?repo=${repo}`)
    .then(res => res.json())
    .then(res => JSON.parse(res.body)[0])
    .then(res => ({
      name: repo,
      screenshots: res.screenshots,
      blog: res.blog,
    }))
    .catch(err => new Error(err));

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      selected: 2,
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
    const previews = repoNames.map(repo => fetchPreview(repo));
    Promise.all(previews)
    .then((res) => {
      if (res) {
        res.forEach((repoPreview) => {
          const reposCopy = this.state.repos;
          const index = reposCopy.findIndex(r => (r.name === repoPreview.name));
          if (index >= 0) {
            reposCopy[index].screenshots = repoPreview.screenshots;
            reposCopy[index].blog = repoPreview.blog;
          }
          this.setState({ repos: reposCopy });
        });
      }
    });
   /*
   Card `https://api.github.com/repos/gilmoreg/${this.props.repo}`
   Preview `https://kjhv7b3x01.execute-api.us-east-1.amazonaws.com/production/fetchRepo?repo=${this.props.repo}
   */
  }

  selectCard(e) {
    e.preventDefault();
  }

  render() {
    const children = this.state.repos.map((repo) => {
      const { name, topics, description } = repo;
      return <Card key={name} repo={name} topics={topics} description={description} click={this.selectCard} />;
    });

    let preview = null;
    if (this.state.selected && this.state.repos.length) {
      const repo = this.state.repos[this.state.selected];
      preview = <Preview key={`${repo.name}-preview`} repo={repo} />;
    }

    return (
      <section className="Portfolio">
        <section className="cards">
          {children[0]}
          {children[1]}
          {this.state.selected ? preview : ''}
          {children[2]}
          {children[3]}
        </section>
      </section>
    );
  }
}

export default Portfolio;
