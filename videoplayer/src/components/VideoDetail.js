import React from 'react';

const VideoDetail = ({video}) => {
  if(!video){
    return <div>Loading...</div>
  }

  return (
    <div>
      <div className = 'ui segment'>
        <h3 className = 'ui header'>{video.snippet.title}</h3>
        <p className = 'description'>{video.snippet.description}</p>
      </div>
    </div>
  );
}

export default VideoDetail;
