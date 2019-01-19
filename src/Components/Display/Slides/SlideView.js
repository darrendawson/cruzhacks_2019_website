import React, { Component } from 'react';
import './SlideView.css';

import SlideViewCondensed from './Condensed/SlideViewCondensed.js';

class SlideView extends Component {
  render() {
    return (
      <div id="SlideView" className="">
        <SlideViewCondensed
          slideNumber={this.props.slideNumber}
          duration={this.props.duration}
          summary={this.props.summary}
          coverPhoto={this.props.coverPhoto}
          keywords={this.props.keywords}
          similarKeywords={this.props.similarKeywords}
          relatedLectures={[1]}
        />
      </div>
    );
  }
}

export default SlideView;
