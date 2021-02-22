import React, { Component } from "react";
import Mission from '../components/Mission';
import Search from '../components/Search';
import CardDisplay from './CardDisplay';
import Card from '.././components/Card';
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      allEvents: {},
      allNonProfits: {}
    };
  }

  componentDidMount() {
    this.fetchForCardDisplays();
  }

  fetchForCardDisplays = () => {
    const urls = [
      "http://localhost:3000/events",
      "http://localhost:3000/nonprofits"
    ]

    Promise.all(
      urls.map(url =>
        fetch(url)
        .then(res => res.json())
        .catch(error => console.log("There was a problem!", error))
      )
    ).then(data => {
      this.setState({
        allEvents: data[0],
        allNonProfits: data[1]
      })
    })
  }

  render() {
    return (
      <div>
        <Mission />
        <Search />
        <h2>Events</h2>
        <Card/>
        <CardDisplay events={this.state.allEvents}/>
        <h2>Non-Profits</h2>
        <CardDisplay nonProfits={this.state.allNonProfits}/>
      </div>
    );
  }
}
