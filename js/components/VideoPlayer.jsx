import React, {Component} from 'react';
import animateScrollTo from 'animated-scroll-to';

class VideoPlayer extends Component {
  componentDidMount() {
    const videoItemElement = document.getElementById("videoPlayer-" + this.props.videoId);
    animateScrollTo(videoItemElement.offsetTop, {speed: 2000, minDuration: 300, maxDuration:3000});
  }

  render() {
    const videoElementStyle = {paddingBottom: ((this.props.videoHeight/this.props.videoWidth) * 100) + "%"};
    return (
      <div id={"videoPlayer-" + this.props.videoId} className="VideoPlayer" style={videoElementStyle}>
        <iframe
          src={"https://player.vimeo.com/video/" + this.props.videoId + "?autoplay=1"}
          frameborder="0"
          webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      </div>
    );
  }
}
export default VideoPlayer;
