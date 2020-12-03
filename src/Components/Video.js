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
      <div className='standard'>
        <ReactPlayer url={video.url} 
          light={true} 
          width='300px'
          height='180px'
          origin='http://localhost:3000'
          />
        <h2>{video.name}</h2>
        <button onClick={() => this.props.addToList(this.props.video)}>Add To My List</button>
        <button onClick={handleClick}>Go to this lesson</button>

        </div>
    )
  }
}

export default Video