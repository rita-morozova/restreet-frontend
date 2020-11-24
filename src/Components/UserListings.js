import React from 'react'
import {Button, Card} from 'semantic-ui-react'
import WallListing from './WallListing'


class UserListings extends React.Component {

  state ={
    adopted: false
  }

  toggle =() => {
    this.setState({adopted: !this.state.adopted})
  }

 
  render(){
    return(
      <div>
        {this.props.listings.map(wall => (
            <Card key={wall.id}>
              <img src={wall.photo} />
              <h2>{wall.description}</h2>
              <h3>{wall.address}</h3>
              <h4>{wall.zipcode}</h4>
           <button onClick={() => this.props.deleteListing(wall)}>Delete Listing</button>
           <button onClick={this.toggle}>
        {this.state.adopted ? "List again" : "Click here if it was adopted"}
        </button>
      </Card>
        ))} 
      </div>
        )
     }
  }


export default UserListings