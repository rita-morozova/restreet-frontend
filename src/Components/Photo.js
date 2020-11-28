import React from 'react'
import {Card, Icon} from 'semantic-ui-react'


const Photo = ({photo}) => {

    return(
      <div>
        {/* <Card> */}
          <img src={photo.image} />
          <h2>{photo.username}</h2>
          <h3><Icon name='heart' color='red' />{photo.likes}</h3>
          <button>Like Photo</button>
        {/* </Card> */}
      </div>
    )
}

export default Photo