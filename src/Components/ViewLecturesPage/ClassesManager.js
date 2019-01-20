/*
  - <ClassesManager/> is a UI-less component that serves as a convience layer for <ViewLecturesPage/>
  - this component handles all the logic of what classes, lectures, and slides should be passed through

*/

import React, { Component } from 'react';
import './ViewLecturesPage.css'
import ViewLecturesPage from './ViewLecturesPage.js';

class ClassesManager extends Component {


  // get -----------------------------------------------------------------------

  // classes is an array of all classes (with their lectures and slides contained)
  // getSelectedClass searches the array and returns the class that is selected
  getSpecificClass = (classID) => {
    for (let i = 0; i < this.props.classes.length; i++) {
      if (classID === this.props.classes[i]['class_id']) {
        return this.props.classes[i];
      }
    }
  }

  getSpecificLecture = (lectures, lectureID) => {
    for (let i = 0; i < lectures.length; i++) {
      if (lectureID === lectures[i]['lecture_id']) {
        return lectures[i];
      }
    }
  }


  addRecommendedLecturesToSlides = (slides) => {

    for (let i = 0; i < slides.length; i++) {

      let recommended = slides[i]['related_content']['lectures'];
      let lectures = [];

      for (let j = 0; j < recommended.length; j++) {

        // find the lecture we want
        let classID = recommended[j]['class_id'];
        let lectureID = recommended[j]['lecture_id'];
        let course = this.getSpecificClass(classID);
        let lecture = this.getSpecificLecture(course['lectures'], lectureID);
        lecture['class_id'] = classID;
        lecture['class_name'] = course['class_name'];
        lectures.push(lecture);
      }

      slides[i]['related_content']['lectures'] = lectures;
    }

    return slides;
  }

  // Render --------------------------------------------------------------------

  render() {

    let selectedClass = this.getSpecificClass(this.props.selectedClassID);
    let possibleLectures = selectedClass['lectures'];
    let selectedLecture = this.getSpecificLecture(possibleLectures, this.props.selectedLectureID);
    let slides = selectedLecture['slides'];
    slides = this.addRecommendedLecturesToSlides(slides);

    return (
      <div id="ClassesManager">
        <ViewLecturesPage
          courseTitle={this.props.courseTitle}
          videos={possibleLectures}
          lectureNumber={this.props.lectureNumber}
          slides={slides}

          classes={this.props.classes}
          update={this.props.update}
          selectedClassID={this.props.selectedClassID}
          selectedClassIDTag={this.props.selectedClassIDTag}
          selectedLectureID={this.props.selectedLectureID}
          selectedLectureIDTag={this.props.selectedLectureIDTag}
          appStateTag={this.props.appStateTag}

          renderSearchResults={true}
        />
      </div>
    );
  }
}

export default ClassesManager;
