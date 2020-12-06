import React from 'react'
import FavoriteArtCard from '../Components/FavoriteArtCard'
import {Grid} from 'semantic-ui-react'
import '../styles/Arts.css'

class FavArtContainer extends React.Component {
  

  render(){
    return(
      <div>
        <br />
        {!this.props.userArts.length > 0 ? <h2>You do not have any favorite arts yet</h2>
        :
        <>
        <h1>YOUR INSPIRATION</h1> 
          <div className='fav-arts'>
                {this.props.userArts.map(art => <FavoriteArtCard key={art.id} art={art} deleteFromFavorites={this.props.deleteFromFavorites} selectArt={this.selectArt}/>)}  
          </div> 
        </>
         }
      </div>
    )
  }
}

export default FavArtContainer