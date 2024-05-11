import React, { useRef } from 'react'
import { Autocomplete, GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import { getLatLong, getName } from '../../utils/handleLocation';
const { VITE_APP_GOOGLE_API_KEY } = import.meta.env;
const containerStyle = {
  width: '1200px',
  height: '400px'
};

const SmallMap2 = ({ center, setActualname, setorigin, origin }) => {


  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: VITE_APP_GOOGLE_API_KEY,
    libraries: ['places']
  })

  const [map, setMap] = React.useState(null)


  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const destinationRef = useRef()

  const panTo = async () => {

    if (destinationRef.current.value === "") return
    const directionService = new google.maps.DirectionsService()
    getLatLong(destinationRef.current.value.replace(/ /g, '+'), setorigin, map)
    const results = await directionService.route({
      origin: origin,
      destination: destinationRef.current.value,

      travelMode: google.maps.TravelMode.DRIVING
    })
  }
  const handleMarkerDrag = (e) => {
    getName(setorigin, e.latLng.lat(), e.latLng.lng())
    setorigin(prev => ({
      ...prev, location: {
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      }
    }))

  };
  return isLoaded ? (
    <div className="flex rounded-md relative flex-col  z-0 items-center h-[400px] w-[800px]">
      <div className="absolute rounded-full left-0 top-0 h-[100%] w-[100%]">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onDragStart={() => console.log("start")}
          // onDrag={console.log("first")}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={{ mapTypeControl: false, zoomControl: true, fullscreenControl: false, draggingCursor: true }}
        >
          <MarkerF
            draggable={true}
            position={center}
            onDrag={(e) => handleMarkerDrag(e)}
            onDragStart={(e)=>console.log(e)}
          />
          { /* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </div>
      <div className="p-2 rounded-md sm:w-1/2  w-3/4 flex-col  bg-white border flex m-4  z-10 shadow-md ">
        <div className="w-full flex">

          <div className="sm:w-[60%]  w-[80%]">
            <Autocomplete>
              <input type="text" ref={destinationRef} className="flex w-full px-2 focus:outline-none " placeholder="Other places" />
            </Autocomplete>
          </div>
          <div className="w-[40%]  flex gap-x-2 justify-between  ">
            <div className="w-[90%] flex justify-end  ">
              <div className="w-1/2 h-7 flex items-center justify-center border shadow-3xl bg-primary-100 text-secondary-100 rounded-md " onClick={() => panTo()}> Find  </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  ) : <></>
}

export default SmallMap2