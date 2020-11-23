import React from 'react'
import {Link} from 'react-router-dom' 
import {Button, Card} from 'semantic-ui-react'

const WallListing = ({listing, adoptWall}) => {

  const style = {
    position: 'relative',
    bottom: 150,
    left: '45px',
    width: 200,
    backgroundColor: 'white',
    boxShadow: '0 2px 7px 1px rgba(0, 0, 0, 0.3)',
    padding: 10,
    fontSize: 14,
    zIndex: 100,
  }

    const handleClick =(listing) => adoptWall(listing)
 
    return(
      <div key={listing.id} style={style} >
        <Card>
          <img src={listing.photo} alt='wall' />
          <h5>{listing.description}</h5>
          <h4>Address: {listing.address}</h4>
          <h4>Zip Code: {listing.zipcode}</h4>
          <h4>{listing.adopted ? 
          'Another artist is already working here' : 
          // <button onClick={() =>{console.log('hi')}}>Adopt Wall</button>
          <a href='mailto: hello@wall.com'><Button basic>Email To Adopt</Button></a>
           }</h4>   
           </Card> 
      </div>
    )
}

export default WallListing