import React, { Component } from 'react';
import './Navbar.css';


class Navbar extends Component {
  render() {
    return (
      <div id="NAVBAR" className="primary_highlight_3_bg primary_highlight_5_border">
        <h1 className="title_text primary_color_1_txt">Scholar Ship</h1>

        <div id="links_container">
          <h2 className="link_text primary_color_2_txt primary_color_1_hover_txt">Search</h2>
          <h2 className="link_text primary_color_2_txt primary_color_1_hover_txt">Profile</h2>
        </div>
      </div>
    );
  }
}

export default Navbar;
