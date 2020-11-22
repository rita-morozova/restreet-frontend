import React from 'react'

const WallListing = ({listing}) => {

    return(
      <div>
          <h4>Lat:{listing.lat}</h4>
          <h4>Lng: {listing.lng}</h4>
          <h4>Address: {listing.address}</h4>
          <h4>Zip Code: {listing.zipcode}</h4>
          <h5>{listing.description}</h5>
          <img src={listing.photo} />
      </div>
    )
}

export default WallListing