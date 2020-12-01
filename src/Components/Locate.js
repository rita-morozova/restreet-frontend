import Button from '@material-ui/core/Button'
import React from 'react'


const Locate = ({ panTo })  => {
  return (
    <button
      className="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      Locate Me
      {/* <img src="/compass.svg" alt="compass" /> */}
    </button>
  );
}

export default Locate
