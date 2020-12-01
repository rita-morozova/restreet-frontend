import React from 'react'
import {Button, Card} from 'semantic-ui-react'
import WallListing from './WallListing'


class UserListings extends React.Component {

 
  render(){
    console.log(this.props.listings)
    return(
      <div>
        {this.props.listings.map(wall => (
            <Card key={wall.id}>
              <img src={wall.photo} />
              <h2>{wall.description}</h2>
              <h3>{wall.address}</h3>
              <h4>{wall.zipcode}</h4>
           <button onClick={() => this.props.deleteListing(wall)}>Delete Listing</button>
           {!wall.adopted ?
           <button onClick={()=>this.props.handleWallAdoption(wall)}>Click if was adopted </button>
           :
           <button onClick={()=>this.props.handleListAgain(wall)}>List again</button>
           }     
      </Card>
        ))} 
      </div>
        )
     }
  }


export default UserListings