import React from 'react'
import ReactPlayer from 'react-player'
import VideoPage from '../Components/VideoPage'
import {Button} from 'semantic-ui-react'
import '../styles/Video.css'

class FavVideosContainer extends React.Component {

 

  render(){
    return(
      <div className='favorites'>
        <h1>My Library</h1>
          <div className='list'>
        {this.props.videos.map(video => (
          <span key={video.id} className='videoCards'>
            <ReactPlayer url={video.url} 
              light={true} 
              controls={true}
              width='300px'
              height='210px'
              origin='http://localhost:3000'
             />
             <h3> {video.name}</h3>
            <Button style={{backgroundColor: '#3970fa', color: 'white'}} onClick={() => this.props.deleteFromList(video)}>Delete</Button>
            <Button style={{backgroundColor: '#3970fa', color: 'white'}} >See the lesson</Button>
         </span>
        ))}
         </div>
      </div>
    )
  }
}

export default FavVideosContainer