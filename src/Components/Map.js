// import React from 'react'
// import GoogleMapReact from 'google-map-react'
// import Marker from './Marker'
// import {Icon} from 'semantic-ui-react'
// import WallListing from './WallListing'
// import {InfoWindow} from "react-google-maps"





// //Will render one point on the map

// // const renderMarkers = (map, maps) => {
// //   let marker = new maps.Marker({
// //   position: { lat: 47.605676, lng: -122.333440 },
// //   map,
// //   title: 'Hello World!'
// //   });
// //   return marker;
// //  };

// class Map extends React.Component {

//   static defaultProps = {
//    center: {
//       lat: 47.62,
//       lng: -122.34
//       },
//     zoom: 11
//     }

//     state ={
//     showWall: false,
//     activeMarker: {},
//     selectedWall: null
//     }
  

//   render(){
//     return(
//       <div style={{ height: '50vh', width: '50%' }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
//         defaultCenter={this.props.center}
//         defaultZoom={this.props.zoom}
//         yesIWantToUseGoogleMapApiInternals
//         //will render 1 marker
//         // onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
//       >
//         {this.props.markers.map(({lat, lng, id, title})=>{
//           // const onClick=this.props.onClick.bind(this, id)
//           return(
//               <Marker 
//               key={id}
//               lat={lat}
//               lng={lng}
//               text={'w'}
//               tooltip={title}
//               // onClick={onClick}
//               />
               
//           )
//         })
//         }
     
//       </GoogleMapReact>
//     </div>
//     )
//   }
// }

// export default Map

import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';


export class MapContainer extends Component {

    state = {
        listings: [],
        showingInfoWindow: false,  
        activeMarker: {},          
        selectedWall: {}  
      };

    componentDidMount() {
      fetch('http://localhost:3000/listings')
      .then(resp => resp.json())
      .then( data => this.setState({listings: data}))
    }
    
    // onMarkerClick = (props, marker, e) =>
     
    // this.setState({
    //   selectedPlace: props,
    //   activeMarker: marker,
    //   showingInfoWindow: true
    // });

    onMarkerClick = (props, marker, e) =>{
      this.setState({
        selectedWall: props,
        activeMarker: marker,
        showingInfoWindow: true
      })
      
    }

    renderMarkers= () => {
        return this.state.listings.map(listing => {
          return <Marker 
            onClick={this.onMarkerClick} name={listing.address} key={listing.id} listing={listing}
            position={{ lat: listing.lat, lng: listing.lng }}
          />
        })
      }

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={11}
        initialCenter={
          {
            lat: 47.6228,
            lng: -122.332112
          }
        }
      >
      {this.renderMarkers()}
      <InfoWindow
        // selectedWall={this.state.selectedWall}
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
        onClose={this.onClose}
        >
        
        <div>
          <h4>{this.state.selectedWall.name}</h4>
        </div>
      </InfoWindow>
    </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(MapContainer);

