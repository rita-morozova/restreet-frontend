import React from 'react'
import Header from '../Components/Header'
import Map from '../Components/Map'
import ListingsContainer from './ListingsContainer'
import MapTest from '../Components/MapTest'


class MapContainer extends React.Component {

  render(){
    return(
      <div>
        <Header />
        <br />
            <Map listings={this.props.listings} user={this.props.user} handlePostWall={this.props.handlePostWall} />
            {/* <MapTest listings={this.props.listings} user={this.props.user} handlePostWall={this.props.handlePostWall} /> */}
      </div>
    )
  }
}

export default MapContainer