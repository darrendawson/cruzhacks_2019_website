import React, { Component } from 'react';
import './VideoCard.css';


class VideoCard extends Component {

  renderKeywords = () => {
    let results = [];

    for (let i = 0; i < this.props.numKeywordsToRender && i < this.props.keywords.length; i++) {
      results.push(
        <div className="keyword_container primary_highlight_4_bg">
          <h2 className="keyword_text primary_color_3_txt">{this.props.keywords[i]}</h2>
        </div>
      );
    }

    return results;
  }


  render() {
    return (
      <div id="VideoCard" className="">
        <div id="title_row_container">
          <h1 id="title_text" className="primary_color_3_txt">{this.props.title}</h1>
          <h1 id="date_text" className="primary_color_4_txt">{this.props.date}</h1>
        </div>
        <img id="cover_photo" src={this.props.coverPhoto}/>
        <div id="keywords_row">
          {this.renderKeywords()}
        </div>
      </div>
    );
  }
}

export default VideoCard;
