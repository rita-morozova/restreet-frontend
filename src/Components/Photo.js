import React from 'react'
import {Card, Icon} from 'semantic-ui-react'


const Photo = ({photo, handleLike}) => {

  const{liked, setLiked} = React.useState(false)

    return(
      <div >
        <div key={photo.id}> 
          <img src={photo.image}  width={300} height={300}  alt='art' />
          <h2>By: {photo.username}</h2>
          <h3><Icon name='heart' color='red' />{photo.likes > 0 ? photo.likes : null}</h3>
          <button key={photo.id}  onClick={() => handleLike(photo.id)}>Like Photo</button>
          </div>
      </div>
    )
}

export default Photo