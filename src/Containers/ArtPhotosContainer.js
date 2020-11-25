import React from 'react'
import ArtCard from '../Components/ArtCard'
import ArtContainer from './ArtContainer'

const ArtPhotosContainer = ({arts, selectArt}) => {

  // findArt =() =>{
  //   let foundArt = arts.filter(art => art.id == parseInt(artId))
  //   foundArt=foundArt[0]
  //   return <ArtCard key={foundArt.id} art={foundArt} />
  // }
  return(
    <div>
      {arts.map (art => <ArtCard key={art.id} art={art}  selectArt={selectArt}/>)}
    </div>
  )
}

export default ArtPhotosContainer