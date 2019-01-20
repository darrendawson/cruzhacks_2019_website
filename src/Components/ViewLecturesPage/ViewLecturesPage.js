import React, { Component } from 'react';
import './ViewLecturesPage.css';

import VideoCard from '../Display/VideoCard/VideoCard.js';
import SlideView from '../Display/Slides/SlideView.js';

class ViewLecturesPage extends Component {


  // On Click ------------------------------------------------------------------

  onClick_SelectLecture = (lectureID) => {
    this.props.update(lectureID, this.props.selectedLectureIDTag);
  }

  onClick_SelectNewLecture = (classID, lectureID) => {
    let newState = {
      [this.props.selectedClassIDTag]: classID,
      [this.props.selectedLectureIDTag]: lectureID
    }
    this.props.update(newState, this.props.appStateTag);
  }
  // Render --------------------------------------------------------------------

  renderVideosSidebar = () => {
    let results = [];
    for (let i = 0; i < this.props.videos.length; i++) {
      let video = this.props.videos[i];

      let borderCSS;
      if (video['lecture_id'] === this.props.selectedLectureID) {
        borderCSS = "video_container primary_highlight_3_bg";
      } else {
        borderCSS = "video_container primary_color_6_hover_bg"
      }

      results.push(
        <div className={borderCSS} onClick={() => this.onClick_SelectLecture(video.lecture_id)}>
          <VideoCard
            title={video.lecture_title}
            date={video.date}
            coverPhoto={video.cover_photo}
            keywords={video.keywords}
            numKeywordsToRender={2}
          />
        </div>
      );
    }
    return results;
  }


  renderSlides = () => {
    let results = [];
    for (let i = 0; i < this.props.slides.length; i++) {
      let slide = this.props.slides[i];

      results.push (
        <SlideView
          onClick_SelectNewLecture={this.onClick_SelectNewLecture}
          slideNumber={slide.slide_number}
          duration={slide.duration}
          summary={slide.summaries}
          keywords={slide.keywords}
          similarKeywords={slide.related_content.keywords}
          coverPhoto={slide.cover_photo}
          relatedLectures={slide.related_content.lectures}
          transcription={slide.transcription}
        />
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
