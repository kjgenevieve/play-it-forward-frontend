import React from 'react';
import Home from './containers/Home.js';
import LogIn from './components/LogIn.js';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route ath='/logIn' component={LogIn} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
