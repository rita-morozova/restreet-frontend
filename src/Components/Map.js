import React from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker'
import {Icon} from 'semantic-ui-react'
import WallListing from './WallListing'



// const renderMarkers = (map, maps) => {
//   let marker = new maps.Marker({
//   position: { lat: 47.605676, lng: -122.333440 },
//   map,
//   title: 'Hello World!'
//   });
//   return marker;
//  };

class Map extends React.Component {

  static defaultProps = {
   center: {
      lat: 47.62,
      lng: -122.34
      },
    zoom: 11
    }

    state = {
      markers: [],  
    }

    componentDidMount = () =>{
      fetch('http://localhost:3000/listings')
      .then(resp => resp.json())
      .then (data =>{
        this.setState({markers: data})
        console.log(data)
      })
    }

  renderMarkers(){
    return this.state.markers.map(marker => <Marker key={marker.id} title={marker.description} lat={marker.lat} lng={marker.lng}/>)
  }

  // onClose = props => {
  //   if (this.state.showingInfoWindow) {
  //     this.setState({
  //       showingInfoWindow: false,
  //       activeMarker: null
  //     });
  //   }
  // };


  render(){
    return(
      <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        yesIWantToUseGoogleMapApiInternals
        // onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
        // onGoogleApiLoaded={() => this.renderMarkers()}
      >
        {this.state.markers.map(({lat, lng, id, title})=>{
          return(
            <Marker 
              key={id}
              lat={lat}
              lng={lng}
              text={'w'}
              tooltip={title}
              />
          )
        })
        }
        
      </GoogleMapReact>
    </div>
    )
  }
}

export default Map