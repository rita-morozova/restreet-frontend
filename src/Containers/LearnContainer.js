import React from 'react'
import Video from '../Components/Video'

class LearnContainer extends React.Component {

  render() {
    return(
      <div>
        {this.props.videos.map(video => <Video id={video.id} video={video} addToList={this.props.addToList}/>)}
      </div>
    )
  }
}

export default LearnContainer