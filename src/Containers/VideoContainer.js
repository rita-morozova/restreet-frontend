import React from 'react'
import Video from '../Components/Video'

const VideoContainer = ({videos, selectVideo, addToList}) => {

  
    return(
      <div>
        {videos.map(video => <Video key={video.id} video={video} selectVideo={selectVideo} addToList={addToList}/>)}
      </div>
    )
}

export default VideoContainer