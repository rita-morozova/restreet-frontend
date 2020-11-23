import React from 'react'
import Video from '../Components/Video'

class LearnContainer extends React.Component {

  state ={
    videos:[]
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/videos')
    .then(resp => resp.json())
    .then(data =>{
      this.setState({videos: data})
    })
  }

  render(){
    return(
      <div>
        {this.state.videos.map(video => <Video id={video.id} video={video}/>)}
      </div>
    )
  }
}

export default LearnContainer