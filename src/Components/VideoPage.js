import React from 'react'
import ReactPlayer from 'react-player'
import NotesContainer from '../Containers/NotesContainer'

class VideoPage extends React.Component {

  render(){
    const {url, name, description} = this.props.selectedVideo
    return(
      <div>
        <ReactPlayer url={this.props.selectedVideo.url} />
        <h2>{name}</h2>
        <h4>{description}</h4>
        <button onClick={() =>this.props.addToList(this.props.selectedVideo)}>Add To My List</button>
        <button onClick={this.props.goBackToAllVideos}>Go Back To All Lessons</button>
        <NotesContainer user={this.props.user} video={this.props.selectedVideo} />
      </div>
    )
  }
}

export default VideoPage