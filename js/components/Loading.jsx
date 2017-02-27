import React from 'react';

function Loading(props){
    return (
      <div className="Loading">
        <div className="Loading-circle Loading-circle1"></div>
        <div className="Loading-circle Loading-circle2"></div>
        <div className="Loading-circle Loading-circle3"></div>
        <div className="Loading-message">{props.message}</div>
      </div>
    );
}

export default Loading;
