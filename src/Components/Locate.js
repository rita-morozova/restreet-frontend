import React from "react";
import { Icon, Popup } from "semantic-ui-react";
import "../styles/Maps.css";

const Locate = ({ panTo }) => {
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
      <Popup
        content="Locate Me"
        trigger={<Icon name="compass" color="pink" size="big" />}
      />
    </button>
  );
};

export default Locate;
