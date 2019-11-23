import React, { Component } from "react";
import Card from "../components/Card";
export default class CardDisplay extends Component {
  
  render() {
    return (
      <div>
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}