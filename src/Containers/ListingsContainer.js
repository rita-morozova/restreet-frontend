import React from 'react'
import WallListing from '../Components/WallListing'
import '../App.css'

class ListingsContainer extends React.Component {

  
///NOT USING IT???
  render(){
    return(
      <div className='listingContainer'>
        {/* {this.props.listings.map (listing => <WallListing  key={listing.id} listing={listing}/>)} */}
      </div>
    )
  }
}

export default ListingsContainer