import React from 'react'
import {Button, Card} from 'semantic-ui-react'

const WallListing = ({listing}) => {

 
    return(
      <div key={listing.id}>
        <Card>
          <img src={listing.photo} alt='wall' />
          <h5>{listing.description}</h5>
          <h4>Address: {listing.address}</h4>
          <h4>Zip Code: {listing.zipcode}</h4>
          <h4>{listing.adopted ? 
          'Another artist is already working here' : 
          <a href={`mailto: ${listing.owner.email}?subject=Wall Reservation at ${listing.address}`}><Button style={{backgroundColor: '#FA396F', color: 'white'}} >Email To Reserve</Button></a>
           }</h4>   
           </Card> 
      </div>
    )
}

export default WallListing