import React, { Component } from 'react';
import './SearchConcepts.css';

import SmallerVideoCard from '../Display/VideoCard/SmallerVideoCard.js';

class SearchConcepts extends Component {


  // Filtering + Sorting ------------------------------------------------------

  // filter out classes whose keywords don't include strings that match search text
  filterOutClasses = () => {
    let results = [];
    let classes = this.props.classes;
    let searchText = this.props.searchText;

    let resultClasses = [];
    let resultConcepts = [];

    // check every class to find every concept
    for (let i = 0; i < classes.length; i++) {

      let keywords = classes[i]['keywords'];
      let addedClass = false;
      for (let j = 0; j < keywords.length; j++) {
        if (keywords[j].indexOf(searchText) > -1) {
          resultConcepts.push(keywords[j]);

          if (!addedClass) {
            resultClasses.push(classes[i]);
            addedClass = true;
          }
        }
      }
    }

    return {classes: resultClasses, concepts: resultConcepts};
  }



  getAllRelaventLectures = (classes) => {

    let searchText = this.props.searchText;
    if (classes.length === 0) {return;}
    let results = [];
    for (let i = 0; i < classes.length; i++) {

      let lecture = classes[i]['lectures'];
      for (let j = 0; j < lecture.length; j++) {

        let keywords = lecture[j]['keywords'];

        for (let k = 0; k < keywords.length; k++) {

          let keyword = keywords[k];
          if (keyword[j].indexOf(searchText) > -1) {

            results.push(
              <div id="card_container">
                <SmallerVideoCard
                  className={lecture[j].class_name}
                  lectureTitle={lecture[j].lecture_title}
                  date={lecture[j].date}
                  coverPhoto={lecture[j].cover_photo}
                  keywords={lecture[j].keywords}
                  numKeywordsToRender={2}
                />
              </div>
            )
          }
        }
      }
    }

    return results;
  }

  // Render --------------------------------------------------------------------


  renderConcepts = (concepts) => {

    if (concepts.length === 0) { return; }
    let results = [];

    for (let i = 0; i < concepts.length && i < 20; i++) {
      results.push(
        <div id="concept_div" className="primary_highlight_3_bg primary_highlight_4_hover_bg">
          <h1 id="concept_text" className="primary_color_1_txt">{concepts[i]}</h1>
        </div>
      );
    }
    return (
      <div id="" className="concepts_container">
        {results}
      </div>
    )
  }


  renderClassNames = (classes) => {
    if (classes.length === 0) { return; }
    let results = [];

    for (let i = 0; i < classes.length; i++) {
      results.push(
        <div id="concept_div" className="primary_color_5_bg ">
          <h1 id="concept_text" className="primary_color_1_txt">{classes[i]['class_name']}</h1>
        </div>
      );
    }
    return (
      <div id="" className="concepts_container">
        {results}
      </div>
    )
  }


  renderLectures = (classes) => {
    let lectures = this.getAllRelaventLectures(classes);

    return (
      <div id="lectures_container">
        {lectures}
      </div>
    );
  }

  render() {

    let postFilter = this.filterOutClasses();
    let classes = postFilter['classes'];
    let concepts = postFilter['concepts'];

    return (
      <div id="SearchConcepts" className="">
        {this.renderConcepts(concepts)}
        {this.renderClassNames(classes)}
        <div id="boundary_line" className="primary_color_3_bg"></div>
        <h1 id="title">Related Lectures</h1>
        {this.renderLectures(classes)}
      </div>
    );
  }
}

export default SearchConcepts;
