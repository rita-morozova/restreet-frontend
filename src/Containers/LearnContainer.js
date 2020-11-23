import React from 'react'
import Video from '../Components/Video'

class LearnContainer extends React.Component {

  state ={
    videos:[],
    favVideos: [],
    userid: null,
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/videos')
    .then(resp => resp.json())
    .then(data =>{
      this.setState({videos: data})
    })
  }

  addToList = (video) => {
    fetch('http://localhost:3000/favvideos',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(({user_id: this.props.user.id, video_id: video.id}))
    })
    .then(res => res.json())
    .then(data => {
      // this.setState({user:data.user})
      this.setState({
        favVideos: [...this.state.favVideos, data]
     })
      })
    }

  render() {
    return(
      <div>
        {this.state.videos.map(video => <Video id={video.id} video={video} addToList={this.addToList}/>)}
      </div>
    )
  }
}

export default LearnContainer