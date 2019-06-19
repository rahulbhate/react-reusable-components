import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

const GoogleMaps = () => {
  return (
    <Map
      zoom={14}
      style={mapStyles}
      initialCenter={{
        lat: -1.2884,
        lng: 36.8233,
      }}
    />
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCM4LPDseLxG7wlucJxgiMuKUSNnOlxCwE',
})(GoogleMaps);
