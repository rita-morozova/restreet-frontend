import React from 'react'
import {Card, Image} from 'semantic-ui-react'

const ArtCard =({art}) => {

 
    return(
      <Card>
        <Image src={art.image_url} alt="Painting" wrapped ui={false} />
        <h2>{art.artist}</h2>
        <h3>{art.name}</h3>
        <h3>{art.year}</h3>
      </Card>
    )
  }

export default ArtCard