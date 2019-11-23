import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/img/logo.png';


function Navbar() {
  const nav = {
    fontSize:"25px",
    marginRight:"10px",
    fontFamily:"monospace",
  }
  const navRight = {
    fontSize:"25px",
    fontFamily:"monospace",
  }

  return (
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link id="link" to="/" class="nav-brand" target="_blank">
        <span class="sr-only">(current)</span>
        <img src={logo} style={{height:7+"em", marginLeft:20+"px", marginRight:30+"px"}}></img>
      </Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link class="nav-link" id="link" to="/logIn" style={nav}>Login/SignUp</Link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" style={nav}>Volunteers</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" style={nav}>Companies</a>
          </li>
          <li class="nav-item dropdown" style={navRight}>
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              About US
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={nav}>
              <Link class="dropdown-item" id="link" to="/about">Our Mission</Link>
              <Link class="dropdown-item" id="link" to="/about">Staff</Link>
              <Link class="dropdown-item" id="link" to="/about">News</Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  );
}

export default Navbar;
