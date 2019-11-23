import React, { Component } from "react";
import Mission from '../components/Mission';
import Search from '../components/Search';
import CardDisplay from './CardDisplay';
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
      }, () => console.log(this.state))
    })
  }

  render() {
    return (
      <div>
        <Mission />
        <Search />
        <CardDisplay />
        <CardDisplay />
      </div>
    );
  }
}