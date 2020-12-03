import React from 'react'
import ArtCard from '../Components/ArtCard'
import ArtContainer from './ArtContainer'
import {Link, Route, useRouteMatch} from 'react-router-dom'

const ArtPhotosContainer = ({arts, selectArt}) => {

  const{url} =useRouteMatch()

  return(
    <div>
      {arts.map (art =><ArtCard key={art.id} art={art}  selectArt={selectArt}/>)}
    </div>
  )
}

export default ArtPhotosContainer