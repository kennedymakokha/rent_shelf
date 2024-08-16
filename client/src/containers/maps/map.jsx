/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { GoogleMap, useJsApiLoader, Autocomplete, MarkerF } from "@react-google-maps/api";
import { useEffect, useRef, useState } from "react";
import pin1 from './../../assets/pin1.png'
import pin2 from './../../assets/pin2.png'
import { HandleConsole } from "../../utils/selectFromapi";

const { VITE_APP_GOOGLE_API_KEY } = import.meta.env;

function MapswithDirection({ data }) {


  const [location, setLocation] = useState(null);
  const [directionalResponse, setDirectionalResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [origin, setorigin] = useState("");

  /** @type React.MutableRefObje<HTMLInputElement> */
  const destinationRef = useRef()

  // eslint-disable-next-line no-unused-vars
  const [map, setMap] = useState(/**@type google.maps.Map */(null));
  const getName = async (lat, lng) => {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBBYlYdpbci4zBhCSyLAJngOBLR3cRCGJA`)
      .then(res => res.json().then(data => {
        let T = data.results[0].formatted_address.split(",")
        setorigin(`${T[T.length - 2]},${T[T.length - 1]}`)
      }).catch((e) => {
        console.log(e)
      })
      )
  }
  const getLatLong = async (name) => {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${name}&key=AIzaSyBBYlYdpbci4zBhCSyLAJngOBLR3cRCGJA`)
      .then(res => res.json().then(data => {
        let loc = data.results[0].geometry.location
        setLocation(loc)
        map.panTo(loc)

      }).catch((e) => {
        console.log(e)
      })
      )
  }
  HandleConsole(origin)
  useEffect(() => {


    navigator.geolocation.getCurrentPosition(
      position => {
        getName(position.coords.latitude, position.coords.longitude)
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      },
      error => console.error('Error getting location:', error)
    );
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: VITE_APP_GOOGLE_API_KEY, // Replace with your actual API key
    libraries: ["places"]
  });
  const culculate = async () => {

    if (destinationRef.current.value === "") return
    const directionService = new google.maps.DirectionsService()
    getLatLong(destinationRef.current.value.replace(/ /g, '+'))
    const results = await directionService.route({
      origin: origin,
      destination: destinationRef.current.value,

      travelMode: google.maps.TravelMode.DRIVING
    })
    // console.log()
    // setDirectionalResponse(results)
    // setDistance(results.routes[0].legs[0].distance.text)
    // setDuration(results.routes[0].legs[0].duration.text)
  }
  const clearRoute = () => {
    setDirectionalResponse(null)
    setDistance("")
    setDuration("")

    destinationRef.current.value = ""
  }


  return (
    <>
      {/* {isLoaded && location && */}

        <>
          <div className="flex rounded-md relative flex-col  z-0 items-center h-full w-full">
            <div className="absolute rounded-full left-0 top-0 h-[100%] w-[100%]">
              <GoogleMap
                zoom={14}
                center={location}
                options={{ mapTypeControl: false, zoomControl: true, fullscreenControl: false }}

                mapContainerClassName="w-full h-full rounded-md"
              >
                <MarkerF

                  position={location}
                  options={{
                    icon: pin1
                  }}
                />

                {data.map((shelf, i) => (
                  <MarkerF key={i} position={shelf.location}
                    options={{
                      icon: pin2
                    }}
                  />
                ))}

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
                  {!directionalResponse ? <div className="w-[90%] flex justify-end  ">
                    <div className="w-1/2 h-7 flex items-center justify-center border shadow-3xl bg-primary-100 text-secondary-100 rounded-md " onClick={culculate}> Find  </div>

                  </div> :
                    <div className="w-[100%] float-end ">
                      <div className="w-5 h-5 flex float-right items-center justify-center border   " onClick={clearRoute}> x  </div>

                    </div>}
                </div>

              </div>
              {directionalResponse && <div className="flex w-full justify-between ">
                <div className="w-[90%] flex sm:flex-row flex-col">
                  <div className="sm:w-1/2  w-full flex items-center justify-between px-2 sm:border-r "><span>Distence:</span> {distance}</div>
                  <div className="sm:w-1/2  w-full flex items-center justify-between px-2 "><span>Duration:</span> {duration}</div>
                </div>
                <div onClick={() => map.panTo(location)} className="w-[10%]">
                  <img src={pin1} className=" h-10 bg-secondary-00 w-10 rounded-full" alt="" />
                </div>

              </div>}
            </div>
          </div>

        </>

      {/* } */}
    </>
  )
}

export default MapswithDirection