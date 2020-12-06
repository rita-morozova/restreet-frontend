import React from 'react'
import {Button, Card} from 'semantic-ui-react'
import WallListing from './WallListing'
import '../styles/Listing.css'


class UserListings extends React.Component {

 
  render(){
    return(
      <div>
        <br />
          {!this.props.listings.length > 0 ?
          <h2>You do not have any listings yet</h2>
          :
          <>
        <div>
          <h2>Your Listings</h2>
        </div>
        <div className='all-listings'>
        {this.props.listings.map(wall => (
            <div key={wall.id} className='listing'>
              <img className='listing-img' src={wall.photo}  alt='wall image'/>
                <div className='wall-info'> 
                    <h3>{wall.description}: {wall.address}, {wall.zipcode}</h3>
               </div>
           <Button onClick={() => this.props.deleteListing(wall)} style={{backgroundColor: '#46D8D2', color: 'white'}}>Delete Listing</Button>
           {!wall.adopted ?
           <Button onClick={()=>this.props.handleWallAdoption(wall)} style={{backgroundColor: '#FA396F', color: 'white'}}>Click if was adopted </Button>
           :
           <Button onClick={()=>this.props.handleListAgain(wall)} style={{backgroundColor: '#46D8D2', color: 'white'}}>List again</Button>
           }   
      </div>
        ))} 
        </div>
        </>
        }
      </div>
        )
     }
  }


export default UserListings