import React, { Component } from "react";
import linkedin from '.././assets/img/linkedin-icon.png';
import facebook from '.././assets/img/facebook.png';
import twitter from '.././assets/img/twitter.png';
import insta from '.././assets/img/insta.png';
import up from '.././assets/img/arrow.png';
import '.././assets/styles.css';

export default class Footer extends Component {

  render() {
    return (
      <div className="footer">
          <div className="middle-icon">
            <a href="#" target="_blank">
              <img src={linkedin} style={{height:50+"px"}}></img>
            </a>
            <a href="#" target="_blank">
              <img src={facebook} style={{height:40+"px"}}></img>
            </a>
            <a href="#" target="_blank">
              <img src={twitter} style={{height:40+"px", marginLeft:6+"px"}}></img>
            </a>
            <a href="#" target="_blank">
              <img  src={insta} style={{height:40+"px", marginLeft:10+"px"}}></img>
            </a>
          </div>
          <div className="scrollToTop" >
            <a href="#"><img src={up} alt="up" style={{ marginTop: 2 +"rem" , marginBottom:2+"em",marginLeft:"auto", marginRight: "auto", display: "block", width: 2.5 + "em"}}></img></a>
          </div>
          <div>
              <p style={{ fontWeight:"lighter", textAlign:"center"}}>2019 ©  Copyright Play It Forward | All Rights Reserved.</p>
          </div>
      </div>
    );
  }
}
