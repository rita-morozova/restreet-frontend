import React from 'react'
import ArtCard from '../Components/ArtCard'

class FavArtContainer extends React.Component {

  render(){
    return(
      <div>
        {this.props.userArts.map(art => <ArtCard key={art.id} art={art} deleteFromFavorites={this.props.deleteFromFavorites}/>)}
      </div>
    )
  }
}

export default FavArtContainer