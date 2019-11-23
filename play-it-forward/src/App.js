import React from 'react';
import Home from './containers/Home.js';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar.js';
import Footer from './components/Footer.js';
import LogIn from './components/LogIn.js';
import SignUp from './components/SignUp.js';
import About from './components/About.js';
import Contact from './components/Contact.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/logIn' component={LogIn} />
            <Route path='/signUp' component={SignUp} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
          </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
