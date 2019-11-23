import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import About from "../components/About";
import SignUp from "../components/SignUp";
import LogIn from "../components/LogIn";

export default class Main extends Component {
  
  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <Home />
          )}
        />
        <Route
          exact
          path="/about"
          render={() => (
            <About />
          )}
        />
        <Route
          exact
          path="/signup"
          render={() => (
            <SignUp />
          )}
        />
        <Route
          exact
          path="/login"
          render={() => (
            <LogIn />
          )}
        />
      </div>
    );
  }
}