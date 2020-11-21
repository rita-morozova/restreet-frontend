import React from 'react'
import GoogleMapReact from 'google-map-react'


class Map extends React.Component {

    state = {
      pins: [],
      showingInfoWindow: false,  
      activeMarker: {},          
      selectedWall: {}   
    }

    static defaultProps = {
      center: {
        lat: 47.62,
        lng: -122.34
      },
      zoom: 11
    }

    componentDidMount = () =>{
      fetch('http://localhost:3000/listings')
    }

  

  render(){
    return(
      <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        {/* <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        /> */}
      </GoogleMapReact>
    </div>
    )
  }
}

export default Map