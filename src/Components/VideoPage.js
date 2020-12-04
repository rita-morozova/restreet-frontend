import React from 'react'
import ReactPlayer from 'react-player'
import NotesContainer from '../Containers/NotesContainer'
import '../styles/Video.css'

class VideoPage extends React.Component {

  render(){
    const {url, name, description} = this.props.selectedVideo
    return(
      <div>
        <br />
        <h2>{name}</h2>
        <div className='box'>
        <ReactPlayer url={this.props.selectedVideo.url} 
        width='850px'
        height='450px'
        origin='http://localhost:3000'
        className='video-lesson'
        />
        <h4>{description}</h4>
        <button onClick={() =>this.props.addToList(this.props.selectedVideo)}>Add To My List</button>
        <button onClick={this.props.goBackToAllVideos}>Go Back To All Lessons</button>
        </div>
        <NotesContainer video={this.props.selectedVideo} user={this.props.user}/>
      </div>
    )
  }
}

export default VideoPage