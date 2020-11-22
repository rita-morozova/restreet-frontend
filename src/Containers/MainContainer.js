import React from 'react'
import Header from '../Components/Header'
import Map from '../Components/Map'
import ListingsContainer from './ListingsContainer'


class MainContainer extends React.Component {

  state ={
    listings: [],
    showWall: false,
    activeMarker: {},
    selectedWall: {}
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
            <ListingsContainer listings={this.state.listings}/>
      </div>
    )
  }
}

export default MainContainer