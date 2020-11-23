import React from 'react'
import {Icon} from 'semantic-ui-react'

const ArtInfo =({chosenArt, goBackToAllArts, addToFavorites}) => {


  const extra = (
    <div onClick={() => addToFavorites(chosenArt)}>
      <Icon color='red' name='heart outline'  />
    </div>
  )
  
    return(
      <div>
        <img src={chosenArt.image_url} alt='art' />
        <h1>{chosenArt.artist}</h1>
        <h2>{chosenArt.name}</h2>
        <h2>{chosenArt.year}</h2>
        <h3>{extra}</h3>
        <button onClick={goBackToAllArts}>Back To All Art</button>
      </div>
    )
  }


export default ArtInfo