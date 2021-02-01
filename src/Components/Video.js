import React from "react";
import ReactPlayer from "react-player";
import { Button } from "semantic-ui-react";
import "../styles/Video.css";

class Video extends React.Component {
  render() {
    const { video } = this.props;

    const handleClick = () => {
      this.props.selectVideo(video.id);
    };

    return (
    <div className="learn-videos">
      <div className="single-video">
        <div className="frame" >
          <ReactPlayer
            url={video.url}
            light={true}
            controls={true}
            width="300px"
            height="210px"
            origin="https://re-street.herokuapp.com/"
            className="standard"
          />
          <h4 style={{ fontWeight: "bold" }}>{video.name}</h4>
          <Button
            style={{ backgroundColor: "#3970fa", color: "white" }}
            onClick={() => this.props.addToList(this.props.video)}
          >
            Add To My Library
          </Button>
          <Button
            style={{ backgroundColor: "#3970fa", color: "white" }}
            onClick={handleClick}
          >
            See the lesson
          </Button>
        </div>
      </div>
    </div>
    );
  }
}

export default Video;
