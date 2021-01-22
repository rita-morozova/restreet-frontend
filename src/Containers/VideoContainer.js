import React from "react";
import Video from "../Components/Video";
import "../styles/Video.css";

const VideoContainer = ({ videos, selectVideo, addToList }) => {
  const randomVideos = videos.sort(() => Math.random() - 0.5);

  return (
    <div className="learn-container">
      {randomVideos.map((video) => (
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
