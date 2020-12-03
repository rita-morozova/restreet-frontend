import React from 'react'
import Maps from '../Components/Maps'
import ListingsContainer from './ListingsContainer'




const MapContainer = ({listings, user, handlePostWall}) => {

    return(
      <div>      
        <Maps listings={listings} user={user} handlePostWall={handlePostWall} />
        {/* <ListingsContainer listings={listings} /> */}
      </div>
    )
}

export default MapContainer