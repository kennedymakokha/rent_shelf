/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import What from './../../../../../assets/wat.webp'
import { DirectionsRenderer, GoogleMap, InfoWindow, LoadScript, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import { getLatLong, getMe, getName } from '../../../../../utils/handleLocation';
import PinLogo from './../../../../../assets/pinlogo.png'
const { VITE_APP_GOOGLE_API_KEY } = import.meta.env;
function DirectionCard({ data }) {
    const { location } = data
    const [directionalResponse, setDirectionalResponse] = useState(null);
    const [distance, setDistance] = useState("");
    const [duration, setDuration] = useState("");
    const [origin, setorigin] = useState("");
    const [dest, setdest] = useState("");
    const [position, setPosition] = useState({})

    const [culculating, setculculating] = useState(false)


    const getIt = async () => {
        // getName(setorigin, location.lat, location.lng)
        setculculating(true)
        const directionsService = new google.maps.DirectionsService();
        const results = await directionsService.route({
            origin: dest.location,
            destination: origin.name,
            travelMode: google.maps.TravelMode.DRIVING
        })
        setDirectionalResponse(results)
        setDistance(results.routes[0].legs[0].distance.text)
        setDuration(results.routes[0].legs[0].duration.text)
        setculculating(false)

    }
    const onLoad = async (map) => {
        // console.log('DirectionsService loaded:', origin);
        // You can initialize DirectionsService here

        const directionsService = new google.maps.DirectionsService();
        // getIt(directionsService, origin)
        // Use directionsService...
    }

    useEffect(() => {

        getName(setorigin, location.lat, location.lng)
        getMe(setdest, setPosition)

    }, [])

    return (
        <LoadScript googleMapsApiKey={VITE_APP_GOOGLE_API_KEY}>
            <div className='flex relative w-full shadow-2xl	 bg-white rounded-md h-[200px] border border-slate-50 flex-col'>
                <div className="absolute left-0 top-0 h-[100%] w-[100%]">  <GoogleMap
                    zoom={14}
                    center={location}
                    options={{ mapTypeControl: false, zoomControl: false, fullscreenControl: false, zoomControlOptions: false }}
                    onLoad={onLoad}
                    mapContainerClassName="w-full h-full rounded-md"
                >
                    onLoad ={map => setMap(map)}
                    {!directionalResponse ? <MarkerF

                        position={location}

                    /> :
                        <DirectionsRenderer directions={directionalResponse} />}
                    <MarkerF position={origin.location} icon={PinLogo} />
                    <InfoWindow
                        position={origin.location}
                        onCloseClick={() => setSelectedMarker(null)}
                    >
                        <div>
                            {/* <h3 className="font-bold">{origin.name}</h3> */}
                            {/* <h3>{selectedMarker.area}({selectedMarker.building})</h3>
                            <p className="font-semibold">{selectedMarker.price}</p>
                            <Link to={`/shalves/${selectedMarker.name.replace(/\s+/g, "-").toLowerCase()}`}>
                                <p className="font-semibold text-blue-400">Get direction</p>
                            </Link> */}
                        </div>
                    </InfoWindow>
                </GoogleMap>


                </div>
                <div onClick={() => getIt()} className={`px-2 text-[12px] absolute  py-1 rounded-md right-3 top-3  h-5  flex-col   ${culculating ? "bg-secondary-500" : "bg-primary-100"} items-center justify-center font-semibold text-white border flex z-10 shadow-md`}>
                    Get Direction
                </div>
                {distance &&
                    <div onClick={() => getIt()} className="px-2 text-[12px] absolute flex-col  py-1 rounded-md  bottom-0 cursor-pointer  w-full h-10     bg-secondary-100 items-center justify-center font-semibold text-white border flex z-10 shadow-md ">
                        <div className=""> {distance}</div>
                        {duration}
                    </div>}
            </div>
        </LoadScript>
    )
}

export default DirectionCard