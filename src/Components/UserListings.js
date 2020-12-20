import React from 'react'
import {Button} from 'semantic-ui-react'
import '../styles/Listing.css'


const UserListings = ({listings, deleteListing, handleWallAdoption, handleListAgain}) => {


    return(
      <div className='user-listings-main'>
        <br />
          {!listings.length > 0 ?
          <h2 className='empty-container'>You do not have any listings yet</h2>
          :
          <>
        <div className='user-listings'>
          <br />
          <h2>Your Listings</h2>
        <div className='all-listings'>
        {listings.map(wall => (
            <div key={wall.id} className='listing'>
              <img className='listing-img' src={wall.photo}  alt='wall'/>
                <div className='wall-info'> 
                    <h3>{wall.description}: {wall.address}, {wall.zipcode}</h3>
               </div>
           <Button onClick={() => deleteListing(wall)} style={{backgroundColor: '#46D8D2', color: 'white'}}>Delete Listing</Button>
           {!wall.adopted ?
           <Button onClick={()=>handleWallAdoption(wall)} style={{backgroundColor: '#FA396F', color: 'white'}}>Click if was reserved </Button>
           :
           <Button onClick={()=>handleListAgain(wall)} style={{backgroundColor: '#46D8D2', color: 'white'}}>List again</Button>
           }   
      </div>
        ))} 
        </div>
       </div>
        </>
        }
      </div>
        )
  }


export default UserListings