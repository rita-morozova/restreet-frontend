import React from 'react'
import {Card, Image} from 'semantic-ui-react'

class FavoriteArtCard extends React.Component {

  
  render(){
    const {art, deleteFromFavorites} = this.props

    
    return(
      <div key={art.id}>
      <Card> 
        <Image src={art.image_url} alt="Painting" wrapped ui={false} />
        {deleteFromFavorites ? <button onClick={() => deleteFromFavorites(art)}>Delete</button> : null}
      </Card>
      </div>
    )
  }
}

export default FavoriteArtCard