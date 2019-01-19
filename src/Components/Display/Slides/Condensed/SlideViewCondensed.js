import React, { Component } from 'react';
import './SlideViewCondensed.css';

import VideoCard from '../../VideoCard/VideoCard.js';

class SlideViewCondensed extends Component {


  constructor() {
    super();

    this.state = {
      expanded: false
    };
  }


  // On Click ------------------------------------------------------------------

  onClick_ToggleExpanded = () => {
    this.setState({expanded: !this.state.expanded})
  }


  // Render --------------------------------------------------------------------

  renderKeywords = (keywords) => {
    let results = [];

    for (let i = 0; i < keywords.length; i++) {
      results.push(
        <div className="keyword_container primary_highlight_4_bg">
          <h2 className="keyword_text primary_color_3_txt">{keywords[i]}</h2>
        </div>
      );
    }

    return (
      <div id="keywords_row">
        {results}
      </div>
    );
  }

  renderSummary = () => {
    let results = [];
    for (let i = 0; i < this.props.summary.length; i++) {
      results.push(
        <p className="summary_text"> - {this.props.summary[i]}</p>
      );
    }
    return results;
  }


  renderTranscript = () => {
    if (this.state.expanded) {
      return (
        <div id="transcript_container">
          <p>Lorem Ipsum</p>
        </div>
      );
    }
  }

  renderRelatedLectures = () => {
    let video = {
      title: "title",
      date: "01/01",
      keywords: ["k1", "k2"],
      numKeywordsToRender:2
    };

    if (this.state.expanded) {

      let results = [];
      for (let i = 0; i < this.props.relatedLectures.length; i++) {
        results.push(
          <VideoCard
            title={video.title}
            date={video.date}
            coverPhoto={video.coverPhoto}
            keywords={video.keywords}
            numKeywordsToRender={2}
          />
        );
      }

      return results;
    }
  }

  render() {
    return (
      <div
        id="SlideViewCondensed"
        className=""
        onClick={this.onClick_ToggleExpanded}>
        <div className="half_container_column primary_color_3_border">
          <div id="about_slide_container">
            <img id="cover_photo" src={this.props.coverPhoto}/>
            <div className="slide_summary_container">
              <div id="title_row">
                <h1 id="slide_title">Slide {this.props.slideNumber}</h1>
                <h1>{this.props.duration} min</h1>
              </div>
              {this.renderSummary()}
              {this.renderKeywords(this.props.keywords)}
            </div>
          </div>

          {this.renderTranscript()}
        </div>

        <div className="half_container primary_color_3_border">
          <div className="flex_column">
            <h1 id="slide_title">Related Content</h1>
            <h2>Keywords</h2>
            {this.renderKeywords(this.props.similarKeywords)}
            {this.renderRelatedLectures()}
          </div>

        </div>
      </div>
    );
  }
}

export default SlideViewCondensed;