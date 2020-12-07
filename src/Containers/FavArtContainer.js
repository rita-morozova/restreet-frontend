import React from 'react'
import FavoriteArtCard from '../Components/FavoriteArtCard'
import {Grid} from 'semantic-ui-react'
import '../styles/Arts.css'

class FavArtContainer extends React.Component {
  

  render(){
    return(
      <div>
        <br />
        {!this.props.userArts.length > 0 ? <h2 style={{color: '#44484b'}}>You do not have any favorite art yet</h2>
        :
        <>
        <h1 style={{color: '#44484b'}}>YOUR INSPIRATION</h1> 
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