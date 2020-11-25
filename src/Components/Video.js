import React from 'react'
import ReactPlayer from 'react-player'

class Video extends React.Component {

  render(){
    const {video} = this.props 

    const handleClick = () =>{
      this.props.selectVideo(video.id)
    }
    
    return(
      <div>
        <ReactPlayer url={video.url} />
        <h2>{video.name}</h2>
        <h4>{video.description}</h4>
        <button onClick={() =>this.props.addToList(this.props.video)}>Add To My List</button>
        <button onClick={handleClick}>Go to this lesson</button>
      </div>
    )
  }
}

export default Video