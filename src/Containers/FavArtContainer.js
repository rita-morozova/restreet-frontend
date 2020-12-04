import React from 'react'
import ArtCard from '../Components/ArtCard'
import ArtInfo from '../Components/ArtInfo'
import FavoriteArtCard from '../Components/FavoriteArtCard'
import {Grid} from 'semantic-ui-react'

class FavArtContainer extends React.Component {
  

  render(){
    return(
      <div>
        <br />
        {!this.props.userArts.length > 0 ? <h2>You do not have any favorite arts yet</h2>
        :
        <>
        <h1>You Liked These</h1>
         {this.props.userArts.map(art => <FavoriteArtCard key={art.id} art={art} deleteFromFavorites={this.props.deleteFromFavorites} selectArt={this.selectArt}/>)}      
        </>
         }
      </div>
    )
  }
}

export default FavArtContainer