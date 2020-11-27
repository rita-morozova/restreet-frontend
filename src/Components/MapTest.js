import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';
import WallListing from './WallListing';
import CurrentLocation from './CurrentLocation'
import ListingsContainer from '../Containers/ListingsContainer'
import {Link} from 'react-router-dom'
import PostModal from './PostModal'


const style = {
  width: '50%',
  height: '50%'
}

export class MapContainer extends Component {

    state = {
        
        showingInfoWindow: false,  
        activeMarker: {},          
        selectedWall: {},
        newLat: '',
        newLng: ''
       
      }
    

    onMarkerClick = (props, marker, e) =>{
      this.setState({
        selectedWall: props,
        activeMarker: marker,
        showingInfoWindow: true,
       
      })
    }

  
   

    renderMarkers= () => {
        return this.props.listings.map(listing => {
          return <Marker 
            onClick={this.onMarkerClick} name={listing.description} key={listing.id} listing={<WallListing listing={listing} />}
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

  mapClicked(mapProps, map, clickEvent) {
    const newLatitude = clickEvent.latLng.lat()
    const newLongitude = clickEvent.latLng.lng()
    const newMarker = {
      lat: newLatitude,
      lng: newLongitude
    }
    
    return  <PostModal onClick={() => console.log('hi')}/>
    return <Marker position={{lat: newLatitude, lng: newLongitude}} />
  }


  render() {
    return (
      <div>
         <Link to='/post-wall'><button>Add Wall</button></Link>
         {/* <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
        
      > */}
      <Map
        google={this.props.google}
        zoom={11}
        style={style}
        //add marker on click
        onClick={this.mapClicked}
        initialCenter={
          {
            lat: 47.6228,
            lng: -122.332112
          }
        }
      >
        {/* {this.state.markers.map(marker => <Marker key={marker.id} 
        position={{lat: marker.lat, lng: marker.lng }}
        icon={{
          url: '/pin.png',
          scaledSize: new window.google.maps.Size(30,30),
          origin: new window.google.maps.Point(0,0),
          anchor: new window.google.maps.Point(15,15)
        }} */}
        {/* />
        )} */}
      {this.renderMarkers()}
      <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
        onClose={this.onClose}
        >
        <div id='iwc'>
          <h4>{this.state.selectedWall.listing}</h4>
        </div>
      </InfoWindow>
      {/* //post method here */}
     
      {/* </CurrentLocation> */}
    </Map>
    </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(MapContainer);

