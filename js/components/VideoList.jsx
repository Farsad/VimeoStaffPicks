import React, {Component} from 'react';
import Loading from './Loading.jsx';
import Error from './Error.jsx';
import VideoItem from './VideoItem.jsx';
import {getChannelVideos} from '../model';

class VideoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selected: -1,
      loadingState: 'loading'
    };
    this.onSelectVideoItem = this.onSelectVideoItem.bind(this);
  }

  componentDidMount() {
    getChannelVideos('staffpicks')
      .then((json) => {
        this.setState({videos: json});
      })
      .catch((ex) => {
        this.setState({loadingState: 'error'});
      });
  }

  onSelectVideoItem(idx) {
    this.setState({selected: idx});
  }

  render() {
    return (
      <div>
        {this.state.videos.length ?
          <div className="VideoList">
            {this.state.videos.map(((video, idx) => {
              return <VideoItem idx={idx} onSelect={this.onSelectVideoItem} key={video.id} videoData={video} selected={this.state.selected == idx}/>
            }))}
          </div>
          :
          (this.state.loadingState == 'loading' ?
              <Loading message="Loading Vimeo staffpick channel"/>
              :
              <Error message="Ops! There is an error in Loading Data."/>
          )
        }
      </div>
    );
  }
}

export default VideoList;
