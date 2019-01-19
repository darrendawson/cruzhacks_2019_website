import React, { Component } from 'react';
import './ViewLecturesPage.css';

import VideoCard from '../Display/VideoCard/VideoCard.js';

class ViewLecturesPage extends Component {


  renderVideosSidebar = () => {
    let results = [];
    for (let i = 0; i < this.props.videos.length; i++) {
      let video = this.props.videos[i];
      let borderCSS = (video['lectureNumber'] === this.props.lectureNumber) ? "selected_video_border": "";

      results.push(
        <div className="video_container primary_color_6_hover_bg">
          <VideoCard
            title={video.title}
            date={video.date}
            coverPhoto={video.coverPhoto}
            keywords={video.keywords}
            numKeywordsToRender={2}
          />
        </div>
      );
    }
    return results;
  }


  render() {
    return (
      <div id="ViewLecturesPage" className="">
        <div id="sidebar_container" className="primary_color_5_bg">
          {this.renderVideosSidebar()}
        </div>

        <div id="body_container" className="">
          <div id="top_row" className="primary_color_3_border">
            <div className="flex_grouping_row">
              <h1 id="course_title">{this.props.courseTitle}: </h1>
              <h1 id="lecture_title" className="primary_highlight_3_txt">Lecture {this.props.lectureNumber}</h1>
            </div>

            <div className="flex_grouping_row">
              <input
                id="search_input"
                placeholder="Search by concept"
                className="primary_highlight_3_border"
              />
              <button id="search_button" className="primary_highlight_3_border primary_highlight_3_hover_bg">
                <h1 id="search_button_text" className="primary_highlight_3_txt primary_color_1_hover_txt">&#x26B2;</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewLecturesPage;
