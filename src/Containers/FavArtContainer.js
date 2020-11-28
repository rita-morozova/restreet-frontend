import React from 'react'
import ArtCard from '../Components/ArtCard'
import ArtInfo from '../Components/ArtInfo'
import FavoriteArtCard from '../Components/FavoriteArtCard'

class FavArtContainer extends React.Component {
  

  render(){
    return(
      <div>
        <h1>You Liked These</h1>
      {this.props.userArts.map(art => <FavoriteArtCard key={art.id} art={art} deleteFromFavorites={this.props.deleteFromFavorites} selectArt={this.selectArt}/>)}
      </div>
    )
  }
}

export default FavArtContainer