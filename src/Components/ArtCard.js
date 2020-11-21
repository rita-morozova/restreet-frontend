import React from 'react'
import {Card, Image} from 'semantic-ui-react'

const ArtCard =({art, addToFavorites, deleteFromFavorites}) => {

 
    return(
      <Card>
        <Image src={art.image_url} alt="Painting" wrapped ui={false} />
        <h2>{art.artist}</h2>
        <h3>{art.name}</h3>
        <h3>{art.year}</h3>
        <button onClick={() => addToFavorites(art) }>Add to Favorites</button>
        <button onClick={()=> deleteFromFavorites(art)}>Delete from Favorites</button>
      </Card>
    )
  }

export default ArtCard