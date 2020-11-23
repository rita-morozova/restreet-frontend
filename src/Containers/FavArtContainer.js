import React from 'react'
import ArtCard from '../Components/ArtCard'

class FavArtContainer extends React.Component {

 

  render(){
    return(
      <div>
        <h1>You Liked These</h1>
      {this.props.userArts.map(art => <ArtCard  art={art} deleteFromFavorites={this.props.deleteFromFavorites}/>)}
      </div>
    )
  }
}

export default FavArtContainer