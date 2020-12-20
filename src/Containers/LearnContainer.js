import React from 'react'
import VideoContainer from './VideoContainer'
import VideoPage from '../Components/VideoPage'

class LearnContainer extends React.Component {

  state = {
    selectedVideo: null
  }

  selectVideo= id => {
    this.setState({
      selectedVideo: this.props.videos.find(video => video.id === id)
    })
  }

  goBackToAllVideos = () => {
    this.setState({
      selectedVideo: null
    })
  }

  render() {
    const {videos, addToList, token} =this.props
    return(
      <div>
        {this.state.selectedVideo ? 
        <VideoPage selectedVideo={this.state.selectedVideo} user={this.props.user} goBackToAllVideos={this.goBackToAllVideos} addToList={addToList} token={token}/>
        :
        <VideoContainer videos={videos} selectVideo={this.selectVideo} addToList={addToList}/>
        }
      </div>
    )
  }
}

export default LearnContainer