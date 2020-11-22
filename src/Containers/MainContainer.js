import React from 'react'
import Header from '../Components/Header'
import Map from '../Components/Map'
import WallListing from '../Components/WallListing'


class MainContainer extends React.Component {

 

  render(){
    return(
      <div>
        <Header />
        <br />
            HELLO!!!!!!!!!

            <Map  />
            {/* {this.state.listings.map(listing => <WallListing key ={listing.id} listing={listing} />)} */}
      </div>
    )
  }
}

export default MainContainer