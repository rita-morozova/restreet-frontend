import React from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker'
import {Icon} from 'semantic-ui-react'



//Will render one point on the map

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

    state ={
      listings: []
    }
    
    componentDidMount = () =>{
      fetch('http://localhost:3000/listings')
      .then(resp => resp.json())
      .then (data =>{
        this.setState({listings: data})
        console.log(data)
      })
    }
  

    onMarkerClick = () =>{

    }

  

  render(){
    return(
      <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        yesIWantToUseGoogleMapApiInternals
        //will render 1 marker
        // onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      >
        {this.state.listings.map(({lat, lng, id, title})=>{
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