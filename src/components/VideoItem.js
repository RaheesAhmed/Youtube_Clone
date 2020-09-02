import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="grid">
      <div className="row " onClick={() => onVideoSelect(video)}>
        <div className="column" style={{ display: "flex" ,margin: '20px',width: '100%' }}>
          <img alt="thumbnails" src={video.snippet.thumbnails.default.url} />
          {/* <div className="header"> */}
          
          <h2 style={{paddingLeft:' 15px'}}>{video.snippet.title}</h2>
          {/* <div>
            <p>{video.snippet.description}</p>
          </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};
export default VideoItem;
