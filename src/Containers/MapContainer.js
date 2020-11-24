import React from 'react'
import Header from '../Components/Header'
import Map from '../Components/Map'
import ListingsContainer from './ListingsContainer'


class MapContainer extends React.Component {

  render(){
    return(
      <div>
        <Header />
        <br />
            <Map listings={this.props.listings} />
      </div>
    )
  }
}

export default MapContainer