import React from "react";
import ReactPlayer from "react-player";
import { Button } from "semantic-ui-react";
import "../styles/Video.css";
import VideoPage from "../Components/VideoPage";


const FavVideosContainer = ({
  videos,
  deleteFromList,
  selectedVideo,
  selectVideo,
  goBackToAllVideos,
  addToList,
  user,
}) => {
  return (
    <div className="favorites-main" style={{ marginTop: "0px" }}>
      {undefined === videos || videos.length === 0 ? (
        <h2 className="empty-library">Your Library Is Empty</h2>
      ) : (
        <>
          {selectedVideo ? (
            <VideoPage
              key={selectedVideo.id}
              selectedVideo={selectedVideo}
              user={user}
              goBackToAllVideos={goBackToAllVideos}
              addToList={addToList}
            />
          ) : (
            <>
              <div className="favorites">
                <h1 style={{ color: "#44484b" }}>Your Library</h1>
                <div className="list">
                  {undefined === videos ||
                    videos.map((video) => (
                      <span key={video.id} className="videoCards">
                        <ReactPlayer
                          url={video.url}
                          light={true}
                          controls={true}
                          width="300px"
                          height="210px"
                          origin="https://re-street.herokuapp.com/"
                        />
                        <h3> {video.name}</h3>
                        <Button
                          style={{ backgroundColor: "#3970fa", color: "white" }}
                          onClick={() => deleteFromList(video)}
                        >
                          Delete
                        </Button>
                        <Button
                          style={{ backgroundColor: "#3970fa", color: "white" }}
                          onClick={() => selectVideo(video.id)}
                        >
                          See Lesson
                        </Button>
                      </span>
                    ))}
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default FavVideosContainer;
