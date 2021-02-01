import React from "react";
import ReactPlayer from "react-player";
import NotesContainer from "../Containers/NotesContainer";
import "../styles/Video.css";
import { Button } from "semantic-ui-react";
import Loader from "./Loader";


class VideoPage extends React.Component {
  state = {
    showDescription: false,
    loaded: false,
  };

  seeDescription = () => {
    return (
      <div>
        <Button
          onClick={() =>
            this.setState({ showDescription: !this.state.showDescription })
          }
          style={{ backgroundColor: "#3970fa", color: "white" }}
        >
          {!this.state.showDescription
            ? "See Video Description"
            : "Hide Description"}
        </Button>
      </div>
    );
  };

  renderDescription = () => {
    return (
      <div className="description">{this.props.selectedVideo.description}</div>
    );
  };

  successState = () => {
    this.setState({ loaded: !this.state.loaded });
  };

  render() {
    const { name } = this.props.selectedVideo;
    return (
      <div className="video-page-main">
        <br />
        <h2 style={{ fontStyle: "italic" }}>{name}</h2>
        <div className="box">
          <div className="videoWrapper" style={{ aspectRatio: "3/4" }}>
            {!this.state.loaded ? <Loader /> : null}
            <ReactPlayer
              url={this.props.selectedVideo.url}
              width="60vw"
              height="40vw"
              onReady={this.successState}
              max-width="100%"
              controls={true}
              origin="https://re-street.herokuapp.com/"
              className="video-lesson"
            />
            <div className="video-buttons">
              <Button
                onClick={this.props.goBackToAllVideos}
                style={{ backgroundColor: "#3970fa", color: "white" }}
              >
                Go Back To All Lessons
              </Button>
              {this.seeDescription()}
              <Button
                onClick={() => this.props.addToList(this.props.selectedVideo)}
                style={{ backgroundColor: "#3970fa", color: "white" }}
              >
                Add To My Library
              </Button>
            </div>
            {this.state.showDescription && this.renderDescription()}
          </div>
        </div>
        <NotesContainer
          video={this.props.selectedVideo}
          user={this.props.user}
        />
      </div>
    );
  }
}

export default VideoPage;
