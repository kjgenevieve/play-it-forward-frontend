import React, { Component } from "react";
export default class Card extends Component {
  componentDidMount() {
    console.log(this.props)
  }

  renderData = () => {
    if (this.props.event) {
      return(
        <div>
          <div className="row" style={{marginLeft:"auto", marginRight:"auto"}}>
            <div className="col" >
                <div class="card" style={{ margin:1+"em"}}>
                  <div class="card-body">
                    <h5 class="card-title">{this.props.event.name}</h5>
                    <p class="card-text">{this.props.event.description}</p>
                    <h5 class="card-link">{this.props.event.date} | {this.props.event.location}</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="card" style={{ margin:1+"em"}}>
                  <div class="card" style={{ margin:1+"em"}}>
                    <div class="card-body">
                      <h5 class="card-title">{this.props.event.name}</h5>
                      <p class="card-text">{this.props.event.description}</p>
                      <h5 class="card-link">{this.props.event.date} | {this.props.event.location}</h5>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
      )
    } else if (this.props.nonProfit) {
      return(
        <div>
          <div className="row" style={{marginLeft:"auto", marginRight:"auto"}}>
            <div className="col" >
                <div class="card" style={{ margin:1+"em"}}>
                  <div class="card-body">
                    <h5 class="card-title">{this.props.event.name}</h5>
                    <p class="card-text">{this.props.event.description}</p>
                    <h5 class="card-link">{this.props.event.date} | {this.props.event.location}</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="card" style={{ margin:1+"em"}}>
                  <div class="card" style={{ margin:1+"em"}}>
                    <div class="card-body">
                      <h5 class="card-title">{this.props.event.name}</h5>
                      <p class="card-text">{this.props.event.description}</p>
                      <h5 class="card-link">{this.props.nonProfit.mission}</h5>
                      <p class="card-link">{this.props.nonProfit.adress}</p>
                    </div>
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
