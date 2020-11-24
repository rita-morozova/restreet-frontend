import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';
import WallListing from './WallListing';
import CurrentLocation from './CurrentLocation'
import ListingsContainer from '../Containers/ListingsContainer'
import {Link} from 'react-router-dom'

const style = {
  width: '50%',
  height: '50%'
}

export class MapContainer extends Component {

    state = {
        
        showingInfoWindow: false,  
        activeMarker: {},          
        selectedWall: {},
      }

    // componentDidMount() {
    //   fetch('http://localhost:3000/listings')
    //   .then(resp => resp.json())
    //   .then( data => this.setState({listings: data}))
    // }
    
    onMarkerClick = (props, marker, e) =>{
      this.setState({
        selectedWall: props,
        activeMarker: marker,
        showingInfoWindow: true
      })
    }

    // onInfoWindowOpen = (props, e) =>{
    //   const button= (<button onClick={e => {console.log('button')}}>mapbutton</button>)
    //   ReactDOM.render(React.Children.only(button), document.getElementById("iwc"));
    // }

    renderMarkers= () => {
        return this.props.listings.map(listing => {
          return <Marker 
            onClick={this.onMarkerClick} name={listing.description} key={listing.id} listing={<WallListing listing={listing} adoptWall={this.props.adoptWall}/>}
            position={{ lat: listing.lat, lng: listing.lng }}
          />
        })
      }

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }


  render() {
    return (
      <div>
         <Link to='/post-wall'><button>Add Wall</button></Link>
         <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
        
      >
      {/* <Map
        google={this.props.google}
        zoom={11}
        style={style}
        initialCenter={
          {
            lat: 47.6228,
            lng: -122.332112
          }
        }
      > */}
      {this.renderMarkers()}
      <InfoWindow
        // selectedWall={this.state.selectedWall}
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
        onClose={this.onClose}
        // onOpen={e => {
        //   this.onInfoWindowOpen(this.props.e)
        // }}
        >
        <div id='iwc'>
          <h4>{this.state.selectedWall.listing}</h4>
        </div>
      </InfoWindow>
      </CurrentLocation>
      {/* <ListingsContainer listings={this.state.listings}/> */}
    {/* </Map> */}
    </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(MapContainer);


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