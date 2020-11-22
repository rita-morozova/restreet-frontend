import React from 'react'
import Header from '../Components/Header'
import Map from '../Components/Map'
import ListingsContainer from './ListingsContainer'


class MainContainer extends React.Component {

  state ={
    listings: [],
  }
  
  componentDidMount = () =>{
    fetch('http://localhost:3000/listings')
    .then(resp => resp.json())
    .then (data =>{
      this.setState({listings: data})
    })
  }

  sortCard = (e) => {
    let card = this.state.listings.filter(l=> l.id === e.listing.id)
    console.log(card)
    this.setState({
        listings: card
    })
}

  render(){
    return(
      <div>
        <Header />
        <br />
            HELLO!!!!!!!!!

            <Map markers={this.state.listings} sortCard={this.sortCard}/>
            {/* <ListingsContainer listings={this.state.listings}/> */}
      </div>
    )
  }
}

export default MainContainer