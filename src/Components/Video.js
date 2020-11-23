import React from 'react'
import ReactPlayer from 'react-player'

class Video extends React.Component {

  render(){
    return(
      <div>
        <ReactPlayer url={this.props.video.url} />
        <h2>{this.props.video.name}</h2>
        <h4>{this.props.video.description}</h4>
        <button>Add To My List</button>
      </div>
    )
  }
}

export default Video