import React, { Component } from 'react';
import './SmallerVideoCard.css';


class SmallerVideoCard extends Component {
  render() {
    return (
      <div id="SmallerVideoCard" className="primary_color_3_border">
        <h2 className="primary_color_5_txt">{this.props.className}</h2>
        <img id="cover_photo" src={this.props.coverPhoto}/>
        <h2 className="primary_color_5_txt">{this.props.lectureTitle}</h2>
      </div>
    );
  }
}

export default SmallerVideoCard;
