import React from 'react'
import ReactPlayer from 'react-player'
import {Button} from 'semantic-ui-react'
import  '../styles/Video.css'


class Video extends React.Component {

  render(){
    const {video} = this.props 

    const handleClick = () =>{
      this.props.selectVideo(video.id)
    }

    return(
      <div className='frame'>
        <ReactPlayer url={video.url} 
          light={true} 
          controls={true}
          width='550px'
          height='350px'
          origin='http://localhost:3000'
          className='standard'
          />
        <h4 className='video-name'>{video.name}</h4>
        <Button onClick={() => this.props.addToList(this.props.video)}>Add To My Library</Button>
        <Button onClick={handleClick}>See the lesson</Button>

        </div>
    )
  }
}

export default Video