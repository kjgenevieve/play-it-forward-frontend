import React, { Component } from "react";
export default class Card extends Component {
  componentDidMount() {
    console.log(this.props)
  }

  renderData = () => {
    if (this.props.event) {
      return(
        <div>
          <div class="row">
              <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">{this.props.event.name}</h5>
                    <p class="card-text">{this.props.event.description}</p>
                    <h5 class="btn btn-primary">{this.props.event.date} | {this.props.event.location} </h5>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">{this.props.event.name}</h5>
                    <p class="card-text">{this.props.event.description}</p>
                    <h5 class="btn btn-primary">{this.props.event.date} | {this.props.event.location} </h5>
                  </div>
                </div>
              </div>
            </div>
        </div>
      )
    } else if (this.props.nonProfit) {
      return(
        <div>
          <div class="row">
              <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">{this.props.event.name}</h5>
                    <p class="card-text">{this.props.event.description}</p>
                    <h5 class="btn btn-primary">{this.props.event.date} | {this.props.event.location} </h5>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">{this.props.nonProfit.name}</h5>
                    <p class="card-text">{this.props.nonProfit.description}</p>
                    <h5 class="btn btn-primary">{this.props.nonProfit.mission}</h5>
                    <h5 class="btn btn-primary">{this.props.nonProfit.adress}</h5>
                  </div>
                </div>
              </div>
            </div>
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
