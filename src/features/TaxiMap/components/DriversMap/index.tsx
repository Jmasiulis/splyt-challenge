/* eslint-disable @typescript-eslint/ban-ts-ignore */
import React from 'react';
import {
  Map, Marker, GoogleApiWrapper,
} from 'google-maps-react';

import { DriversProps } from '../../types';

export function DriversMap({ google, driverLocations }: any): React.ReactElement {
  return (
    <Map
      google={google}
      // This styling is necessary by the tool and somehow can't be overridden by normal means.
      // Leaving like this for now, otherwise I would use styled components.
      style={{
        width: '55%', height: '50%', position: 'relative', margin: '10px',
      }}
      // @ts-ignore
      className="map"
      zoom={13}
      initialCenter={{
        lat: 51.5049375,
        lng: -0.0964509,
      }}
    >
      {driverLocations && driverLocations.map((driverLocation: DriversProps) => (
        <Marker
          // @ts-ignore
          position={
            { lat: driverLocation.location.latitude, lng: driverLocation.location.longitude }
          }
        />
      ))}
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '',
})(DriversMap);
