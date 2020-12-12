import React from 'react'
import Maps from '../Components/Maps'
import '../styles/Maps.css'




const MapContainer = ({listings, user, handlePostWall}) => {

    return(
      <div className='maps-container'>      
        <Maps listings={listings} user={user} handlePostWall={handlePostWall} />
      </div>
    )
}

export default MapContainer