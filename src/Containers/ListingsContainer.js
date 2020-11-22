import React from 'react'
import WallListing from '../Components/WallListing'

class ListingsContainer extends React.Component {

  

  render(){
    return(
      <div>
        {this.props.listings.map (listing => <WallListing listing={listing}/>)}
      </div>
    )
  }
}

export default ListingsContainer