import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Colors.css';


// Components
import Navbar from './Components/Navbar/Navbar.js';
import ViewLecturesPage from './Components/ViewLecturesPage/ViewLecturesPage.js';

import Ustra from './Helper/Ustra.js';         // For storing/maintaining State data across app


let fakeVideos = [
  {title: "Class 1", date: "03/24", numSlides: 5, keywords: ["differential equations", "power series"], lectureNumber: 1, coverPhoto: "https://opencast-player-1.lt.ucsc.edu:8443/static/learn_tech/engage-player/71b03908-f1f0-4775-b106-36e786238570/attachment-5/screen_primary_1_000s_search.jpg"},
  {title: "Class 2", date: "03/27", numSlides: 5, keywords: ["fuck if I know"], lectureNumber: 2, coverPhoto: "https://opencast-player-1.lt.ucsc.edu:8443/static/learn_tech/engage-player/5e48509c-4293-433c-8ee4-79243bdeca74/attachment-5/screen_primary_1_000s_search.jpg"},
  {title: "Class 3", date: "03/24", numSlides: 5, keywords: ["differential equations", "power series"], lectureNumber: 3, coverPhoto: "https://opencast-player-1.lt.ucsc.edu:8443/static/learn_tech/engage-player/71b03908-f1f0-4775-b106-36e786238570/attachment-5/screen_primary_1_000s_search.jpg"},
  {title: "Class 4", date: "04/01", numSlides: 5, keywords: ["some god damn magic"], lectureNumber: 4, coverPhoto: "https://opencast-player-1.lt.ucsc.edu:8443/static/learn_tech/engage-player/50b38bdd-c431-4953-95fd-a99992b8a425/attachment-5/screen_primary_1_000s_search.jpg"},
  {title: "Class 5", date: "03/27", numSlides: 5, keywords: ["fuck if I know"], lectureNumber: 5, coverPhoto: "https://opencast-player-1.lt.ucsc.edu:8443/static/learn_tech/engage-player/5e48509c-4293-433c-8ee4-79243bdeca74/attachment-5/screen_primary_1_000s_search.jpg"},
  {title: "Class 6", date: "03/24", numSlides: 5, keywords: ["differential equations", "power series"], lectureNumber: 6, coverPhoto: "https://opencast-player-1.lt.ucsc.edu:8443/static/learn_tech/engage-player/71b03908-f1f0-4775-b106-36e786238570/attachment-5/screen_primary_1_000s_search.jpg"},
];


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





// Data Skeleton
let dataSkeleton = {

  // App State |
  [PT_appState]: {
    [PT_selectedClass]: "Math 24",
    [PT_selectedLectureNum]: 2
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
          <ViewLecturesPage
            courseTitle="Math 24"
            videos={fakeVideos}
            lectureNumber={truth[PT_appState][PT_selectedLectureNum]}

            update={this.update}
            selectedLectureTag={PT_selectedLectureNum}
          />
        </div>
      </div>
    );
  }
}

export default App;
