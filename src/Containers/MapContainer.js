import React from 'react'
import Maps from '../Components/Maps'




const MapContainer = ({listings, user, handlePostWall}) => {

    return(
      <div>      
        <Maps listings={listings} user={user} handlePostWall={handlePostWall} />
      </div>
    )
}

export default MapContainer