import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Colors.css';


// Components
import Navbar from './Components/Navbar/Navbar.js';


class App extends Component {
  render() {
    return (
      <div className="APP CS_1">
        <div id="app_navbar_container">
          <Navbar/>
        </div>

        <div id="app_body_container" className="primary_color_2_bg"></div>
      </div>
    );
  }
}

export default App;
