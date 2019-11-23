import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./containers/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
        <Router>
          {/* <NavBar /> */}
          <Main />
          {/* <Footer /> */}
        </Router>
    </div>
  );
}

export default App;
