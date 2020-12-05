import React from 'react'
import {Card, Image, Icon} from 'semantic-ui-react'

class FavoriteArtCard extends React.Component {

  
  render(){
    const {art, deleteFromFavorites} = this.props

    
    return(
      <div key={art.id}>
      <Card> 
        <Image src={art.image_url} alt="Painting" wrapped ui={false} />
        {deleteFromFavorites ? <Icon name='trash alternate outline' color='purple' size='large' onClick={() => deleteFromFavorites(art)} /> : null}
      </Card>
      </div>
    )
  }
}

export default FavoriteArtCard