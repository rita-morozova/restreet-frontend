import React, { useContext } from 'react'
import {Link} from 'react-router-dom'

import { GoogleMap, useLoadScript, Marker, InfoWindow} from '@react-google-maps/api'

import Locate from "./Locate"
import SearchBar from './SearchBar'

import WallListing from './WallListing'
import PostWall from './PostWall'


    const libraries = ['places']
    const type = ['listing']
    const mapContainerStyle = {
        width: '100%',
        height: '70vh',
    }
    const options = {
        zoomControl: true,
    }
    const center ={
        lat: 47.6228, 
        lng: -122.332112,
    }


const MapTest =({listings, user, handlePostWall})=> {    
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        libraries,
        type, 
    })
    const [markers, setMarkers] = React.useState([])
    const [selected, setSelected] = React.useState(null)
    
    
    const checkLocation = (selected) => {
        if(listings.find(l => l.id === selected.id)){ 
            return <WallListing key={selected.id}  listing={selected}/>
        }else{
            return <PostWall  position={{lat: selected.lat, lng: selected.lng}}  user={user} handlePostWall={handlePostWall} />
        }
    }

    const onMapClick = React.useCallback((e) => {
        setMarkers(current => [...current, {
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
            },
        ])
        },[])
    
    const mapRef = React.useRef()
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map
    }, [])


    const panTo = React.useCallback(({lat, lng}) => {
            mapRef.current.panTo({ lat, lng })
            mapRef.current.setZoom(15)
        }, [])
    
    if (loadError) return 'Error'
    if (!isLoaded) return 'Loading...'
        
    return (
        <div >
            <section className="map-header">
            <h2 className="header2-text">Walls</h2>
            <SearchBar panTo={panTo} />
            <Locate panTo={panTo} />
            </section>     
            <GoogleMap 
            mapContainerStyle={mapContainerStyle} 
            zoom={11} 
            center={center}
            options={options}
            onLoad={onMapLoad}
            onClick={onMapClick}
            >
               
               
                {listings.map((listing) => ( 
                    <Marker 
                        key={listing.id}
                        position={{lat: listing.lat, lng: listing.lng}}
                        onClick={() => {
                            setSelected(listing)
                        }}
                    />
                ))}
                {selected && (
                    <InfoWindow
                        position={{
                            lat: selected.lat,
                            lng: selected.lng
                        }}
                        onCloseClick={() => {
                            setSelected(null)
                        }}
                        >   
                        {checkLocation(selected)}
                    </InfoWindow>
                )}
                {markers.map((marker) =>  
                    <Marker 
                        key={`${marker.lat}-${marker.lng}`}
                        position={{lat: marker.lat, lng: marker.lng}} 
                        onClick ={() => {setSelected(marker)}}
                        // onClick={ <Link to='/post-wall'/>}
                    /> 
                )}
            </GoogleMap>
        </div>
    )
}

export default MapTest 