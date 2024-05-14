import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom'
import { Autocomplete, GoogleMap, InfoWindow, Marker, MarkerClusterer, useJsApiLoader } from "@react-google-maps/api";
import { getMe } from "../../utils/handleLocation";
import { MapProvider } from "../../mapsProvider";

// const { VITE_APP_GOOGLE_API_KEY, VITE_APP_GOOGLE_MAP_ID } = import.meta.env;
const MapComponent = ({ data }) => {

    // const { isLoaded } = useJsApiLoader({
    //     libraries: ["places"],
    //     googleMapsApiKey: VITE_APP_GOOGLE_API_KEY, // Replace YOUR_API_KEY with your actual API key
    // });
    const [origin, setorigin] = useState("");
    const [position, setPosition] = useState({})
    const [culculating, setculculating] = useState(false)
    const [map, setMap] = useState(null);

    const onLoad = (map) => {
        setMap(map);
    };

    const onUnmount = () => {
        setMap(null);
    };


    const [selectedMarker, setSelectedMarker] = useState(null);
    const mapOptions = {
        zoom: 5,
        center: origin.location, // Default center coordinates
        mapTypeControl: false, zoomControl: true, fullscreenControl: false,
    };

    useEffect(() => {
        getMe(setorigin, setPosition);
    }, [])

    return (

        <div className="flex rounded-md relative flex-col  z-0 items-center h-full w-full">
            <div className="absolute rounded-full left-0 top-0 h-[100%] w-[100%]">
                <GoogleMap mapContainerStyle={{ width: "100%", height: "400px", borderRadius: "7px", }}
                    options={mapOptions} onLoad={onLoad} onUnmount={onUnmount}

                >
                    <MarkerClusterer>
                        {(clusterer) =>
                            data.map((item) => (
                                <Marker
                                    onClick={() => setSelectedMarker(item)}
                                    key={item._id} position={{ lat: item.location.lat, lng: item.location.lng }} clusterer={clusterer} />
                            ))
                        }
                    </MarkerClusterer>
                    {selectedMarker && (
                        <InfoWindow
                            position={selectedMarker.location}
                            onCloseClick={() => setSelectedMarker(null)}
                        >
                            <div>
                                <h3 className="font-bold">{selectedMarker.name}</h3>
                                <h3>{selectedMarker.area}({selectedMarker.building})</h3>
                                <p className="font-semibold">{selectedMarker.price}</p>
                                <Link to={`/shalves/${selectedMarker.name.replace(/\s+/g, "-").toLowerCase()}`}>
                                    <p className="font-semibold text-blue-400">Get direction</p>
                                </Link>
                            </div>
                        </InfoWindow>
                    )}
                </GoogleMap>
            </div>

        </div>

    )
};

export default MapComponent;
