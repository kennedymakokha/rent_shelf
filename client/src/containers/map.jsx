import React, { useEffect, useState } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';
import GoogleMapReact from 'google-map-react';
const { VITE_APP_GOOGLE_API_KEY } = import.meta.env;
const AnyReactComponent = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#001d44" className="w-10 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
  ;
  
function MyMap() {

  const [location, setLocation] = useState(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      error => console.error('Error getting location:', error)
    );
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: VITE_APP_GOOGLE_API_KEY, // Replace with your actual API key
  });


  const defaultProps = {
    center: {
      lat: location?.latitude,
      lng: location?.longitude
    },
    zoom: 11
  };
  return isLoaded ? (
    <div className='flex h-screen w-screen items-center justify-center bg-green-100'>
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={location?.latitude}
            lng={location?.longitude}
            text="My Marker"
          />
        </GoogleMapReact>
        
      </div>
    </div>
  ) : (
    <div className='flex h-screen w-screen items-center justify-center bg-red-200'>loading</div>
  );
}

export default React.memo(MyMap);



