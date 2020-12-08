import React from 'react'
import ReactPlayer from 'react-player'
import {Button} from 'semantic-ui-react'
import '../styles/Video.css'

class FavVideosContainer extends React.Component {

 

  render(){
    return(
      <div className='favorites-main' style={{marginTop: '0px'}}>
        {!this.props.videos.length > 0 ?
          <h2 className='empty-library'>Your Library Is Empty</h2>
         :
        <> 
         <div className='favorites'>
            <h1 style={{color: '#44484b'}}>Your Library</h1>
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
      </>
      }
  </div>
    )
  }
}

export default FavVideosContainer