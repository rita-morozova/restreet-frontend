import React from "react";
import VideoContainer from "./VideoContainer";
import VideoPage from "../Components/VideoPage";

class LearnContainer extends React.Component {
  render() {
    const {
      videos,
      addToList,
      selectedVideo,
      selectVideo,
      goBackToAllVideos,
    } = this.props;
    return (
      <div>
        {selectedVideo ? (
          <VideoPage
            key={selectedVideo.id}
            selectedVideo={selectedVideo}
            user={this.props.user}
            goBackToAllVideos={goBackToAllVideos}
            addToList={addToList}
          />
        ) : (
          <VideoContainer
            videos={videos}
            selectVideo={selectVideo}
            addToList={addToList}
          />
        )}
      </div>
    );
  }
}

export default LearnContainer;
