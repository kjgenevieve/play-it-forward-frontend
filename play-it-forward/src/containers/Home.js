import React, { Component } from "react";
import Mission from '../components/Mission';
import Search from '../components/Search';
import CardDisplay from './CardDisplay';
export default class Home extends Component {
  
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
