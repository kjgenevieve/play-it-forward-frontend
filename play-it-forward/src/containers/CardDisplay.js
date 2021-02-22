import React, { Component } from "react";
import Card from "../components/Card";
export default class CardDisplay extends Component {
  renderCards = () => {
    let props = this.props;
    if (props.events) {
      if (props.events.length > 0) {
        return props.events.map(event => {
          return(
            <Card event={event}/>
          )}
        )
      }
    } else if (props.nonProfits) {
      if (props.nonProfits.length > 0) {
        return props.nonProfits.map(nonProfit => {
          return(
            <Card nonProfit={nonProfit}/>
          )}
        )
      }
    }
  }
    
  render() {
    return (
      <div>
        {this.renderCards()}
      </div>
    );
  }
}