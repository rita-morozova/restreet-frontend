import React from 'react'
import Header from '../Components/Header'
import Maps from '../Components/Maps'
import ListingsContainer from './ListingsContainer'



class MapContainer extends React.Component {

  render(){
    return(
      <div>
        <Header />
        <br />
            <Maps listings={this.props.listings} user={this.props.user} handlePostWall={this.props.handlePostWall} />
      </div>
    )
  }
}

export default MapContainer