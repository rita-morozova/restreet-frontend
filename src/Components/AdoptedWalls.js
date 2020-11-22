import React from 'react'
import WallListing from './WallListing'

const AdoptedWalls = ({walls}) => {

 
    return(
      <div>
        {walls.map(wall => <WallListing  key={wall.id}/>)}
      </div>
    )
  }


export default AdoptedWalls