import React from 'react'
import Header from '../Components/Header'
import Map from '../Components/Map'
import WallListing from '../Components/WallListing'


class MainContainer extends React.Component {

  state ={
    listings: []
  }
  
  componentDidMount = () =>{
    fetch('http://localhost:3000/listings')
    .then(resp => resp.json())
    .then (data =>{
      this.setState({listings: data})
      console.log(data)
    })
  }


  render(){
    return(
      <div>
        <Header />
        <br />
            HELLO!!!!!!!!!
            <Map markers={this.state.listings} />
            {/* {this.state.listings.map(listing => <WallListing key ={listing.id} listing={listing} />)} */}
      </div>
    )
  }
}

export default MainContainer