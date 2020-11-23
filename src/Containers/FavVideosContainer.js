import React from 'react'
import ReactPlayer from 'react-player'

class FavVideosContainer extends React.Component {

  render(){
    return(
      <div>
        <h1>My Library</h1>
        {this.props.videos.map(video => (
          <li>
            <ReactPlayer url={video.url} />
            {video.name}
          </li>
        ))}
      </div>
    )
  }
}

export default FavVideosContainer