import React from 'react'
import Maps from '../Components/Maps'
import ListingsContainer from './ListingsContainer'
import '../styles/Maps.css'




const MapContainer = ({listings, user, handlePostWall}) => {

    return(
      <div className='maps-container'>      
        <Maps listings={listings} user={user} handlePostWall={handlePostWall} />
        {/* <ListingsContainer listings={listings} /> */}
      </div>
    )
}

export default MapContainer