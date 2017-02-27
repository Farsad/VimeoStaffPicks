import React, {Component} from 'react';
import VideoThumbnail from './VideoThumbnail.jsx';
import VideoPlayer from './VideoPlayer.jsx';


class VideoItem extends Component {

  constructor(props) {
    super(props);
    this.handleThumbnailClick = this.handleThumbnailClick.bind(this);
  }

  handleThumbnailClick() {
    this.props.onSelect(this.props.idx);
  }

  render() {
    return (
      <div className={"VideoList-item" + (this.props.selected ? " is-expanded": "")}>
        {!this.props.selected ?
          <VideoThumbnail
            onClick={this.handleThumbnailClick}
            poster={this.props.videoData.thumbnail_large}
            title={this.props.videoData.title}
          />
          :
          <VideoPlayer
            videoId={this.props.videoData.id}
            videoHeight={this.props.videoData.height}
            videoWidth={this.props.videoData.width}/>
        }
      </div>
    );
  }
}

export default VideoItem;
