import React from 'react'
import {Button, Card} from 'semantic-ui-react'


const UserListings = ({listings, deleteListing}) => {

 console.log(listings)
    return(
      <div>
        {listings.map(wall => (
             <Card key={wall.id}>
          <img src={wall.photo} />
          <h2>{wall.description}</h2>
          <h3>{wall.address}</h3>
          <h4>{wall.zipcode}</h4>
          <button onClick={() => deleteListing(wall)}>Delete Listing</button>
          <button>Click here if it was adopted</button>
        </Card>
     
        ))}
      </div>
    )
  }


export default UserListings