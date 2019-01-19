import React, { Component } from 'react';
import './ViewLecturesPage.css';

import VideoCard from '../Display/VideoCard/VideoCard.js';
import SlideView from '../Display/Slides/SlideView.js';

class ViewLecturesPage extends Component {


  // On Click ------------------------------------------------------------------

  onClick_SelectLecture = (lectureNumber) => {
    this.props.update(lectureNumber, this.props.selectedLectureTag);
  }

  // Render --------------------------------------------------------------------

  renderVideosSidebar = () => {
    let results = [];
    for (let i = 0; i < this.props.videos.length; i++) {
      let video = this.props.videos[i];

      let borderCSS;
      if (video['lectureNumber'] === this.props.lectureNumber) {
        borderCSS = "video_container primary_highlight_3_bg";
      } else {
        borderCSS = "video_container primary_color_6_hover_bg"
      }

      results.push(
        <div className={borderCSS} onClick={() => this.onClick_SelectLecture(video.lectureNumber)}>
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


  renderSlides = () => {
    return (
      <SlideView
        slideNumber={1}
        duration={5}
        summary={['summary point 1', 'summary point 2', 'summary point 3']}
        keywords={['keyword 1', 'keyword 2']}
        similarKeywords={['similar 1', 'similar 2']}
        coverPhoto="https://opencast-player-1.lt.ucsc.edu:8443/static/learn_tech/engage-player/49259965-3e53-419d-a60b-0d5bb7591fd4/attachment-5/screen_primary_1_000s_search.jpg"
      />
    );
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
                placeholder="Search by concept, keyword, or class"
                className="primary_highlight_3_border"
              />
              <button id="search_button" className="primary_highlight_3_border primary_highlight_3_hover_bg">
                <h1 id="search_button_text" className="primary_highlight_3_txt primary_color_1_hover_txt">&#x26B2;</h1>
              </button>
            </div>
          </div>

          <div id="slide_results_container">
            {this.renderSlides()}
          </div>
        </div>
      </div>
    );
  }
}

export default ViewLecturesPage;
