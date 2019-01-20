import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Colors.css';


// Components
import Navbar from './Components/Navbar/Navbar.js';
import ClassesManager from './Components/ViewLecturesPage/ClassesManager.js';

import Ustra from './Helper/Ustra.js';         // For storing/maintaining State data across app


let fakeVideos = [
  {title: "Class 1", date: "03/24", numSlides: 5, keywords: ["differential equations", "power series"], lectureNumber: 1, coverPhoto: "https://opencast-player-1.lt.ucsc.edu:8443/static/learn_tech/engage-player/71b03908-f1f0-4775-b106-36e786238570/attachment-5/screen_primary_1_000s_search.jpg"},
  {title: "Class 2", date: "03/27", numSlides: 5, keywords: ["fuck if I know"], lectureNumber: 2, coverPhoto: "https://opencast-player-1.lt.ucsc.edu:8443/static/learn_tech/engage-player/5e48509c-4293-433c-8ee4-79243bdeca74/attachment-5/screen_primary_1_000s_search.jpg"},
  {title: "Class 3", date: "03/24", numSlides: 5, keywords: ["differential equations", "power series"], lectureNumber: 3, coverPhoto: "https://opencast-player-1.lt.ucsc.edu:8443/static/learn_tech/engage-player/71b03908-f1f0-4775-b106-36e786238570/attachment-5/screen_primary_1_000s_search.jpg"},
  {title: "Class 4", date: "04/01", numSlides: 5, keywords: ["some god damn magic"], lectureNumber: 4, coverPhoto: "https://opencast-player-1.lt.ucsc.edu:8443/static/learn_tech/engage-player/50b38bdd-c431-4953-95fd-a99992b8a425/attachment-5/screen_primary_1_000s_search.jpg"},
  {title: "Class 5", date: "03/27", numSlides: 5, keywords: ["fuck if I know"], lectureNumber: 5, coverPhoto: "https://opencast-player-1.lt.ucsc.edu:8443/static/learn_tech/engage-player/5e48509c-4293-433c-8ee4-79243bdeca74/attachment-5/screen_primary_1_000s_search.jpg"},
  {title: "Class 6", date: "03/24", numSlides: 5, keywords: ["differential equations", "power series"], lectureNumber: 6, coverPhoto: "https://opencast-player-1.lt.ucsc.edu:8443/static/learn_tech/engage-player/71b03908-f1f0-4775-b106-36e786238570/attachment-5/screen_primary_1_000s_search.jpg"},
];


// fake data -------------------------------------------------------------------


let fakeData = {
  "classes": [
    {
      "class_id": 1,
      "class_name": "Math 24",
      "lectures": [
        {
          "lecture_id": 1,
          "lecture_number": 1,
          "date": "01/23",
          "keywords": ["Syllabus", "Finals", "Grades"],
          "lecture_title": "Syllabus + Chapter 0",
          "cover_photo": "https://opencast-player-1.lt.ucsc.edu:8443/static/learn_tech/engage-player/71b03908-f1f0-4775-b106-36e786238570/attachment-5/screen_primary_1_000s_search.jpg",

          "slides": [
            {
              "slide_id": 1,
              "slide_number": 1,
              "slide_title": "Multivariate",
              "duration": 5,
              "transcription": "this is where the transcription goes",
              cover_photo:  "https://opencast-player-1.lt.ucsc.edu:8443/static/learn_tech/engage-player/71b03908-f1f0-4775-b106-36e786238570/attachment-5/screen_primary_1_000s_search.jpg",
              "summaries": ["Set you are mapping to y is the codomain", "A map is an association", "we just have to draw 2 axes" ],
              "keywords": [ "domain", "matrix", "vectors", "transformation" ],

              "related_content": {
                "keywords": ["related keyword 1"],
                "lectures": [{class_id: 1, lecture_id: 2, slide_id: 4}]
              }
            },

            {
              "slide_id": 2,
              "slide_number": 2,
              "slide_title": "Linear Transformations",
              "duration": 4.5,
              "transcription": "Linear transformations are ....",
              cover_photo:  "https://opencast-player-1.lt.ucsc.edu:8443/static/learn_tech/engage-player/71b03908-f1f0-4775-b106-36e786238570/attachment-5/screen_primary_1_000s_search.jpg",
              "summaries": [ "We have 2 vectors in our domain", "C is a scalar real number", "transformation is a mapping like a function" ],
              "keywords": ["linear", "dependant", "vector", "linear transformation"],
              "related_content": {
                "keywords": ["related keyword 1"],
                "lectures": [{class_id: 1, lecture_id: 2, slide_id: 2}]
              }
            },
            {
              "slide_id": 3,
              "slide_number": 3,
              "slide_title": "Visualizing Linear Transformations",
              "duration": 5,
              "transcription": "Here's how to render a linear transformation ....",
              cover_photo:  "https://opencast-player-1.lt.ucsc.edu:8443/static/learn_tech/engage-player/71b03908-f1f0-4775-b106-36e786238570/attachment-5/screen_primary_1_000s_search.jpg",
              "summaries": [ "One-dimensional space is simply the number line", "Linear Transformations of One Dimensional Space", "vector output vectors" ],
              "keywords": ["linear", "dependant", "vector", "linear transformation", "matrix"],
              "related_content": {
                "keywords": ["related keyword 1"],
                "lectures": [{class_id: 1, lecture_id: 2, slide_id: 2}]
              }
            },
            {
              "slide_id": 4,
              "slide_number": 4,
              "slide_title": "Matrixes",
              "duration": 3,
              "transcription": "Here's how to render a linear transformation ....",
              cover_photo:  "https://opencast-player-1.lt.ucsc.edu:8443/static/learn_tech/engage-player/71b03908-f1f0-4775-b106-36e786238570/attachment-5/screen_primary_1_000s_search.jpg",
              "summaries": [ "examples" ],
              "keywords": ["Matrix", "Linear Transformation", "Linearly Dependant"],
              "related_content": {
                "keywords": ["related keyword 1"],
                "lectures": [{class_id: 1, lecture_id: 2, slide_id: 2}]
              }
            },

            {
              "slide_id": 5,
              "slide_number": 5,
              "slide_title": "Products",
              "duration": 3,
              "transcription": "Here's how to render a linear transformation ....",
              cover_photo:  "https://opencast-player-1.lt.ucsc.edu:8443/static/learn_tech/engage-player/71b03908-f1f0-4775-b106-36e786238570/attachment-5/screen_primary_1_000s_search.jpg",
              "summaries": [ "Matrix multiplication is a linear transformation" ],
              "keywords": ["Matrix", "Linear Transformation", "Multiplication"],
              "related_content": {
                "keywords": ["related keyword 1"],
                "lectures": [{class_id: 1, lecture_id: 2, slide_id: 2}]
              }
            },

            {
              "slide_id": 6,
              "slide_number": 6,
              "slide_title": "Kernel",
              "duration": 3,
              "transcription": "Here's how to render a linear transformation ....",
              cover_photo:  "https://opencast-player-1.lt.ucsc.edu:8443/static/learn_tech/engage-player/71b03908-f1f0-4775-b106-36e786238570/attachment-5/screen_primary_1_000s_search.jpg",
              "summaries": [ "The null space is the solution to a problem", "The Kernel is the nullspace" ],
              "keywords": ["nullspace", "Independence", "Solution", "Matrix", "Sample Space"],
              "related_content": {
                "keywords": ["related keyword 1"],
                "lectures": [{class_id: 1, lecture_id: 2, slide_id: 2}]
              }
            },
          ]
        },

        {
          "lecture_id": 2,
          "lecture_number": 2,
          "date": "01/23",
          "keywords": ["Lecture Keyword 1", "Lecture Keyword 2", "Lecture Keyword 3"],
          "lecture_title": "Applications of Linear Transformations",
          "cover_photo": "https://opencast-player-1.lt.ucsc.edu:8443/static/learn_tech/engage-player/71b03908-f1f0-4775-b106-36e786238570/attachment-5/screen_primary_1_000s_search.jpg",

          "slides": [
            {
              "slide_id": 1,
              "slide_number": 1,
              "slide_title": "Scaling and Reflections",
              "duration": 2,
              "transcription": "this is where the transcription goes",
              "cover_photo": "https://opencast-player-1.lt.ucsc.edu:8443/static/learn_tech/engage-player/71b03908-f1f0-4775-b106-36e786238570/attachment-5/screen_primary_1_000s_search.jpg",
              "summaries": ["Linear transformations can scale and reflect matrixes" ],
              "keywords": [ "Linear Transformation", "Scaling", "Reflecting" ],

              "related_content": {
                "keywords": ["related keyword 1"],
                "lectures": [{class_id: 1, lecture_id: 2, slide_id: 2}, {class_id: 1, lecture_id: 1, slide_id: 2}]
              }
            },

            {
              "slide_id": 2,
              "slide_number": 2,
              "slide_title": "Rotations",
              "duration": 5,
              "transcription": "this is where the transcription goes",
              "cover_photo": "https://opencast-player-1.lt.ucsc.edu:8443/static/learn_tech/engage-player/71b03908-f1f0-4775-b106-36e786238570/attachment-5/screen_primary_1_000s_search.jpg",
              "summaries": ["Vectors have a magnitude and a direction", "Rotations are vectors" ],
              "keywords": [ "Rotations", "Linear Transformation", "Vectors" ],

              "related_content": {
                "keywords": ["related keyword 1"],
                "lectures": [{class_id: 1, lecture_id: 2, slide_id: 2}]
              }
            },

            {
              "slide_id": 3,
              "slide_number": 3,
              "slide_title": "Unit Vectors",
              "duration": 5,
              "transcription": "this is where the transcription goes",
              "cover_photo": "https://opencast-player-1.lt.ucsc.edu:8443/static/learn_tech/engage-player/71b03908-f1f0-4775-b106-36e786238570/attachment-5/screen_primary_1_000s_search.jpg",
              "summaries": ["Unit vectors have a magnitude of 1"],
              "keywords": [ "Vectors", "Unit Vector", "Magnitude" ],

              "related_content": {
                "keywords": ["related keyword 1"],
                "lectures": [{class_id: 1, lecture_id: 2, slide_id: 2}]
              }
            },

            {
              "slide_id": 4,
              "slide_number": 4,
              "slide_title": "Projections",
              "duration": 5,
              "transcription": "this is where the transcription goes",
              "cover_photo": "https://opencast-player-1.lt.ucsc.edu:8443/static/learn_tech/engage-player/71b03908-f1f0-4775-b106-36e786238570/attachment-5/screen_primary_1_000s_search.jpg",
              "summaries": ["Projections are based off perpendicular vectors" ],
              "keywords": [ "Linear", "Projection", "Vector" ],

              "related_content": {
                "keywords": ["related keyword 1"],
                "lectures": [{class_id: 1, lecture_id: 2, slide_id: 2}]
              }
            },

            {
              "slide_id": 5,
              "slide_number": 5,
              "slide_title": "More Linear",
              "duration": 1,
              "transcription": "this is where the transcription goes",
              "cover_photo": "https://opencast-player-1.lt.ucsc.edu:8443/static/learn_tech/engage-player/71b03908-f1f0-4775-b106-36e786238570/attachment-5/screen_primary_1_000s_search.jpg",
              "summaries": ["Linear is hard"],
              "keywords": [ "Linear"],

              "related_content": {
                "keywords": ["related keyword 1"],
                "lectures": [{class_id: 1, lecture_id: 2, slide_id: 2}]
              }
            },
          ]
        }
      ]
    }
  ]
}



// State Data Declaration ------------------------------------------------------
/*
  App uses USTRA for maintaining data across components
  Create a skeleton for what State data should look like
   - Make sure each item in state has a unique identifier key

  Pass skeleton to Ustra to build up paths so we can update state easily later
*/


// Path Tags

// App State --- |
var PT_currentPage = "currentPage";
var PT_appState = "appState";
var PT_selectedLectureNum = "selectedLectureNumber";
var PT_selectedClass = "selectedClass";

var PT_selectedClassID = "selectedClassID";
var PT_selectedLectureID = "selectedLectureID";


// Data Skeleton
let dataSkeleton = {

  // App State |
  [PT_appState]: {
    [PT_selectedClass]: "Math 24",
    [PT_selectedLectureNum]: 2,

    [PT_selectedClassID]: 1,
    [PT_selectedLectureID]: 1
  }


}


// create Ustra
var USTRA = new Ustra(dataSkeleton);


// App -------------------------------------------------------------------------

class App extends Component {

  constructor() {
    super();

    this.state = {
      truth: USTRA.get_truth()
    }
  }


  // Ustra Update --------------------------------------------------------------
  /*
    Functions for updating information
      -> pass updates to ustra, use results to update app.state
  */

  update = (value, path_tag) => {
    let new_state = USTRA.update(value, path_tag);
    this.setState({
      truth: new_state
    });
  }


  // Render --------------------------------------------------------------------

  render() {

    let truth = this.state.truth;

    return (
      <div className="APP CS_1">
        <div id="app_navbar_container">
          <Navbar/>
        </div>

        <div id="app_body_container" className="primary_color_2_bg">
          <ClassesManager
            courseTitle="Math 24"
            videos={fakeVideos}
            lectureNumber={truth[PT_appState][PT_selectedLectureNum]}

            classes={fakeData['classes']}
            update={this.update}
            selectedClassID={truth[PT_appState][PT_selectedClassID]}
            selectedClassIDTag={PT_selectedClassID}
            selectedLectureID={truth[PT_appState][PT_selectedLectureID]}
            selectedLectureIDTag ={PT_selectedLectureID}
            appStateTag={PT_appState}
          />
        </div>
      </div>
    );
  }
}

export default App;
