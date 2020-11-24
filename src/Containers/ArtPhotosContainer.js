import React from 'react'
import ArtCard from '../Components/ArtCard'

const ArtPhotosContainer = ({arts, selectArt}) => {

  //delete favorites
  return(
    <div>
      {arts.map (art => <ArtCard key={art.id} art={art}  selectArt={selectArt}/>)}
    </div>
  )
}

export default ArtPhotosContainer