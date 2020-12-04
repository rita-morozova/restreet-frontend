import React from 'react'
import ReactPlayer from 'react-player'
import  '../styles/Video.css'


class Video extends React.Component {

  render(){
    const {video} = this.props 

    const handleClick = () =>{
      this.props.selectVideo(video.id)
    }

    return(
      <div>
        <ReactPlayer url={video.url} 
          light={true} 
          width='550px'
          height='300px'
          origin='http://localhost:3000'
          className='standard'
          />
        <h4>{video.name}</h4>
        <button onClick={() => this.props.addToList(this.props.video)}>Add To My List</button>
        <button onClick={handleClick}>Go to this lesson</button>

        </div>
    )
  }
}

export default Video