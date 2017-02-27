import React from 'react';

function VideoThumbnail(props) {
  const elementStyle = {
    backgroundImage: 'url(' + props.poster + ')',
  };

  return (
    <div
      className="VideoThumbnail"
      onClick={props.onClick}
      style={elementStyle}>
      <h3 className="VideoThumbnail-title">{props.title}</h3>
    </div>
  );
}

export default VideoThumbnail;
