import React from "react";
import Video from "../Components/Video";
import "../styles/Video.css";

const VideoContainer = ({ videos, selectVideo, addToList }) => {
  return (
    <div className="learn-container">
      {undefined === videos ||
        videos.map((video) => (
          <Video
            key={video.id}
            video={video}
            selectVideo={selectVideo}
            addToList={addToList}
          />
        ))}
    </div>
  );
};

export default VideoContainer;
