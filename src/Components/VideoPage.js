import React from 'react'
import ReactPlayer from 'react-player'
import NotesContainer from '../Containers/NotesContainer'
import '../styles/Video.css'
import {Button} from 'semantic-ui-react'

class VideoPage extends React.Component {

  state={
    showDescription: false,
  }

  seeDescription = () =>{
    return(
      <div>
        <Button onClick={() => this.setState({showDescription: !this.state.showDescription})}>
          {!this.state.showDescription ? 'See Video Description' : 'Hide Description'}
        </Button>
      </div>
    )
  }

  renderDescription = () =>{
    return(
      <div className='description'>
        {this.props.selectedVideo.description}
      </div>
    )
  }

  render(){
    const {name} = this.props.selectedVideo
    return(
      <div>
        <br />
          <h2>{name}</h2>
            <div className='box'>
               <div className='videoWrapper' style={{aspectRatio: '3/4'}}>
                  <ReactPlayer url={this.props.selectedVideo.url} 
                    width='850px'
                    height='450px'
                 // width='100%'
                 // height='100%'
                   max-width = '100%'
                   controls={true}
                   origin='http://localhost:3000'
                   className='video-lesson'
                  />
              <div className='video-buttons'>
                 <Button onClick={this.props.goBackToAllVideos}>Go Back To All Lessons</Button>
                 {this.seeDescription()}
                 <Button onClick={() =>this.props.addToList(this.props.selectedVideo)}>Add To My Library</Button>
              </div>
           {this.state.showDescription && this.renderDescription()}
            </div>
        </div>
        <NotesContainer video={this.props.selectedVideo} user={this.props.user}/>
      </div>
    )
  }
}

export default VideoPage