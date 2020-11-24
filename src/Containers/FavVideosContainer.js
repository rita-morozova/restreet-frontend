import React from 'react'
import ReactPlayer from 'react-player'

class FavVideosContainer extends React.Component {

  render(){
    return(
      <div>
        <h1>My Library</h1>
        {this.props.videos.map(video => (
          <span key={video.id}>
              <h1> {video.name}</h1>
            <ReactPlayer url={video.url} />
            <button onClick={() => this.props.deleteFromList(video)}>Delete from Library</button>
            <br />
            <br />
         </span>
        ))}
      </div>
    )
  }
}

export default FavVideosContainer