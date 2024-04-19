

import { GoogleMap, LoadScript, Marker, useJsApiLoader } from '@react-google-maps/api';
import {MarkerClusterer} from '@googlemaps/markerclusterer';
const { VITE_APP_GOOGLE_API_KEY, VITE_APP_GOOGLE_MAP_ID } = import.meta.env;
const Map = () => {
  const locations = [
    { lat: 37.7749, lng: -122.4194 }, // Example location 1
    { lat: 34.0522, lng: -118.2437 }, // Example location 2
    // Add more locations as needed
  ];

  return (
    <LoadScript googleMapsApiKey={VITE_APP_GOOGLE_API_KEY}>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '400px' }}
        center={{ lat: 37.7749, lng: -122.4194 }}
        zoom={10}
      >
        < MarkerClusterer gridSize={60}>
          {(clusterer) =>
            locations.map((location, index) => (
              <Marker key={index} position={location} clusterer={clusterer} />
            ))
          }
        </MarkerClusterer>
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;