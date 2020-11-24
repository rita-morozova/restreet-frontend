import React from 'react'
import {Card, Image} from 'semantic-ui-react'

class ArtCard extends React.Component {

  
 
  
  render(){
    const {art, addToFavorites, deleteFromFavorites} = this.props

    const handleClick = () => {
      this.props.selectArt(art.id)
     
    }
    
    return(
      <div key={art.id}>
      <Card> 
        <Image src={art.image_url} alt="Painting" wrapped ui={false} onClick={handleClick} />
        {/* <button onClick={() => addToFavorites(art) }>Add to Favorites</button> */}
        {deleteFromFavorites ? <button onClick={() => deleteFromFavorites(art)}>Delete</button> : null}
      </Card>
      </div>
    )
  }
}

export default ArtCard