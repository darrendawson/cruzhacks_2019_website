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
  getSelectedClass = () => {
    for (let i = 0; i < this.props.classes.length; i++) {
      if (this.props.selectedClassID === this.props.classes[i]['class_id']) {
        return this.props.classes[i];
      }
    }
  }

  getSelectedLecture = (lectures) => {
    for (let i = 0; i < lectures.length; i++) {
      if (this.props.selectedLectureID === lectures[i]['lecture_id']) {
        return lectures[i];
      }
    }
  }

  // Render --------------------------------------------------------------------

  render() {

    let selectedClass = this.getSelectedClass();
    let lectures = selectedClass['lectures'];
    let slides = this.getSelectedLecture(lectures);

    return (
      <div id="ClassesManager">
        <ViewLecturesPage
          courseTitle={this.props.courseTitle}
          videos={lectures}
          lectureNumber={this.props.lectureNumber}
          slides={slides}

          classes={this.props.classes}
          update={this.props.update}
          selectedLectureTag={this.props.selectedLectureTag}
        />
      </div>
    );
  }
}

export default ClassesManager;
