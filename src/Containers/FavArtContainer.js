import React from 'react'
import FavoriteArtCard from '../Components/FavoriteArtCard'
import '../styles/Arts.css'

const FavArtContainer = ({userArts, deleteFromFavorites}) => {
  
    return(
      <div>
        <br />
        {!userArts.length > 0 ? <h2 style={{color: '#44484b'}}>You do not have any favorite art yet</h2>
        :
        <>
        <h1 style={{color: '#44484b'}}>YOUR INSPIRATION</h1> 
          <div className='fav-arts'>
                {userArts.map(art => <FavoriteArtCard key={art.id} art={art} deleteFromFavorites={deleteFromFavorites}/>)}  
          </div> 
        </>
         }
      </div>
    )
}

export default FavArtContainer