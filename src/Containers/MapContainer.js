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
            HELLO!!!!!!!!!

            <Map adoptWall={this.props.adoptWall} listings={this.props.listings} />
            {/* <ListingsContainer listings={this.state.listings}/> */}
      </div>
    )
  }
}

export default MapContainer