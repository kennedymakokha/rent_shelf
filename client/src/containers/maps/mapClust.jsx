/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import { GoogleMap, Marker, MarkerClustererF, MarkerF, useJsApiLoader, MarkerClusterer } from '@react-google-maps/api';
// import { MarkerClusterer } from '@googlemaps/markerclusterer';
const { VITE_APP_GOOGLE_API_KEY } = import.meta.env;
const MapComponent = () => {

  const [map, setMap] = useState(null);
  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds({
      lat: -1.286389,
      lng: 36.817223,
    });
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: VITE_APP_GOOGLE_API_KEY, // Replace with your actual API key
    libraries: ["places"]
  });
  console.log("Testing")
  const clusterer = useRef(null)

  useEffect(() => {
    if (!map) return
    if (!clusterer.current) {
      clusterer.current = new MarkerClusterer({ map })
    }
  }, [map])
  useEffect(() => {
    if (clusterer.current) {
      clusterer.current?.clearMarkers()
      clusterer.current.addMarkers(
        [{
          lat: -1.286389,
          lng: 36.817223,
        }].map((location) => {

          return (
            <MarkerClustererF key={`${location.lat}-${location.lng}`} position={location} />
          )
        })
      )
    }

  }, [])
  return (
    <>
      {isLoaded && <>
        <GoogleMap
          center={{
            lat: -1.286389,
            lng: 36.817223,
          }} // Example center
          // zoom={10}

          // center={location}
          options={{ mapTypeControl: false, zoomControl: true, fullscreenControl: false }}
          onLoad={onLoad}
          mapContainerClassName="w-full h-full rounded-md"
        >
          {[{
            lat: -1.286389,
            lng: 36.817223,
          }].map((location) => {

            return (
              <Marker key={`${location.lat}-${location.lng}`} position={location} />
            )
          })}

          {/* Initialize MarkerClusterer */}
          {/* <MarkerClusterer
        imagePath="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
        gridSize={10}
        minimumClusterSize={2}
      >
        {(clusterer) =>
          [{
            lat: -1.286389,
            lng: 36.817223,
          }].map((location) => (
            <Marker key={`${location.lat}-${location.lng}`} position={location} clusterer={clusterer} />
          ))
        }
      </MarkerClusterer> */}
        </GoogleMap>

      </>}
    </>
  )
};

export default MapComponent;
