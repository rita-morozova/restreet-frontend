import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import Locate from "./Locate";
import SearchBar from "./SearchBar";
import WallListing from "./WallListing";
import PostWall from "./PostWall";
import MapStyles from "../styles/MapStyles.js";
import "../styles/Maps.css";
import Footer from "./Footer"

const libraries = ["places"];
const type = ["listing"];
const mapContainerStyle = {
  width: "100%",
  height: "80vh",
};
const options = {
  zoomControl: true,
  styles: MapStyles,
  disableDefaultUI: true,
};
const center = {
  lat: 47.6228,
  lng: -122.332112,
};

const Maps = ({ listings, user, handlePostWall }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries,
    type,
  });
  const [markers, setMarkers] = React.useState([]);
  const [chosen, setChosen] = React.useState(null);

  const checkMarker = (chosen) => {
    if (listings.find((listing) => listing.id === chosen.id)) {
      return <WallListing key={chosen.id} listing={chosen} />;
    } else {
      return (
        <PostWall
          position={{ lat: chosen.lat, lng: chosen.lng }}
          user={user}
          handlePostWall={handlePostWall}
        />
      );
    }
  };

  const onMapClick = React.useCallback((e) => {
    setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      },
    ]);
  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(15);
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div className='google-maps'>
      <br />
      <div className="maps-name">
        <h2 style={{ color: "#44484b", fontWeight: "bold" }}>
          Find a Legal Wall on the Map or Create Your Own Listing by Clicking On
          Your Location
        </h2>
      </div>
      <Locate panTo={panTo} />
      <SearchBar panTo={panTo} />
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={center}
        options={options}
        onLoad={onMapLoad}
        onClick={onMapClick}
      >
        {listings.map((listing) => (
          <Marker
            key={listing.id}
            position={{ lat: listing.lat, lng: listing.lng }}
            icon={{
              url: "/bucket.svg",
              scaledSize: new window.google.maps.Size(30, 30),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
            }}
            onClick={() => {
              setChosen(listing);
            }}
          />
        ))}
        {chosen && (
          <InfoWindow
            position={{
              lat: chosen.lat,
              lng: chosen.lng,
            }}
            onCloseClick={() => {
              setChosen(null);
            }}
          >
            {checkMarker(chosen)}
          </InfoWindow>
        )}
        {markers.map((marker) => (
          <Marker
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
              url: "/bucket.svg",
              scaledSize: new window.google.maps.Size(30, 30),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
            }}
            onClick={() => {
              setChosen(marker);
            }}
          />
        ))}
      </GoogleMap>
      <Footer />
    </div>
  );
};

export default Maps;
