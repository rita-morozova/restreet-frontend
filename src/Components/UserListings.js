import React from 'react'
import {Button, Card} from 'semantic-ui-react'
import WallListing from './WallListing'
import '../styles/Listing.css'


class UserListings extends React.Component {

 
  render(){
    return(
      <div>
        <div>
          <h2>My Listings</h2>
        </div>
        {this.props.listings.map(wall => (
            <div key={wall.id} className='listing'>
              <img className='listing-img' src={wall.photo} alt='wall image'/>
                <div className='wall-info'> 
                    <h3>{wall.description}: {wall.address}, {wall.zipcode}</h3>
               </div>
           <Button onClick={() => this.props.deleteListing(wall)}>Delete Listing</Button>
           {!wall.adopted ?
           <Button onClick={()=>this.props.handleWallAdoption(wall)}>Click if was adopted </Button>
           :
           <Button onClick={()=>this.props.handleListAgain(wall)}>List again</Button>
           }     
      </div>
        ))} 
      </div>
        )
     }
  }


export default UserListings