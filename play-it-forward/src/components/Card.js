import React, { Component } from "react";
export default class Card extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  
  renderData = () => {
    if (this.props.event) {
      return(
        <div>
          <h3>{this.props.event.name}</h3>
          <h4>{this.props.event.description}</h4>
          <h4>{this.props.event.date}</h4>
          <h4>{this.props.event.location}</h4>
        </div>
      )
    } else if (this.props.nonProfit) {
      return(
        <div>
          <h3>{this.props.nonProfit.name}</h3>
          <h4>{this.props.nonProfit.description}</h4>
          <h4>{this.props.nonProfit.mission}</h4>
          <h4>{this.props.nonProfit.address}</h4>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderData()}
      </div>
    );
  }
}