import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Colors.css';


// Components
import Navbar from './Components/Navbar/Navbar.js';
import ViewLecturesPage from './Components/ViewLecturesPage/ViewLecturesPage.js';


let fakeVideos = [
  {title: "Class 1", date: "03/24", numSlides: 5, keywords: ["differential equations", "power series"], lectureNumber: 1, coverPhoto: "https://opencast-player-1.lt.ucsc.edu:8443/static/learn_tech/engage-player/71b03908-f1f0-4775-b106-36e786238570/attachment-5/screen_primary_1_000s_search.jpg"},
  {title: "Class 2", date: "03/27", numSlides: 5, keywords: ["fuck if I know"], lectureNumber: 2, coverPhoto: "https://opencast-player-1.lt.ucsc.edu:8443/static/learn_tech/engage-player/5e48509c-4293-433c-8ee4-79243bdeca74/attachment-5/screen_primary_1_000s_search.jpg"},
  {title: "Class 3", date: "03/24", numSlides: 5, keywords: ["differential equations", "power series"], lectureNumber: 3, coverPhoto: "https://opencast-player-1.lt.ucsc.edu:8443/static/learn_tech/engage-player/71b03908-f1f0-4775-b106-36e786238570/attachment-5/screen_primary_1_000s_search.jpg"},
  {title: "Class 4", date: "04/01", numSlides: 5, keywords: ["some god damn magic"], lectureNumber: 4, coverPhoto: "https://opencast-player-1.lt.ucsc.edu:8443/static/learn_tech/engage-player/50b38bdd-c431-4953-95fd-a99992b8a425/attachment-5/screen_primary_1_000s_search.jpg"},
  {title: "Class 5", date: "03/27", numSlides: 5, keywords: ["fuck if I know"], lectureNumber: 5, coverPhoto: "https://opencast-player-1.lt.ucsc.edu:8443/static/learn_tech/engage-player/5e48509c-4293-433c-8ee4-79243bdeca74/attachment-5/screen_primary_1_000s_search.jpg"},
  {title: "Class 6", date: "03/24", numSlides: 5, keywords: ["differential equations", "power series"], lectureNumber: 6, coverPhoto: "https://opencast-player-1.lt.ucsc.edu:8443/static/learn_tech/engage-player/71b03908-f1f0-4775-b106-36e786238570/attachment-5/screen_primary_1_000s_search.jpg"},
];

class App extends Component {
  render() {
    return (
      <div className="APP CS_1">
        <div id="app_navbar_container">
          <Navbar/>
        </div>

        <div id="app_body_container" className="primary_color_2_bg">
          <ViewLecturesPage
            courseTitle="Math 24"
            lectureNumber={5}
            videos={fakeVideos}
          />
        </div>
      </div>
    );
  }
}

export default App;
