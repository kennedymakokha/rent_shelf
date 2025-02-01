import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { GoogleMap, InfoWindow, MarkerClusterer, MarkerF } from "@react-google-maps/api";
import { getMe } from "../../utils/handleLocation";
import { MapProvider } from "../../mapsProvider";


const MapComponent = ({ data }) => {


    const [origin, setorigin] = useState("");
    const [position, setPosition] = useState({})
    const [culculating, setculculating] = useState(false)
    const [map, setMap] = useState(null);

    const onLoad = (map) => {
        setMap(map);
       
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
       
    };

    const onUnmount = () => {
        setMap(null);
    };


    const [selectedMarker, setSelectedMarker] = useState(null);
    const mapOptions = {
        zoom: 2,
        center: origin.location, // Default center coordinates
        mapTypeControl: false, zoomControl: true, fullscreenControl: false,
    };

    useEffect(() => {
        getMe(setorigin, setPosition);
    }, [])

    return (

        <div className="flex rounded-md relative flex-col  z-0 items-center h-full w-full">
            <div className="absolute rounded-full left-0 top-0 h-[100%] w-[100%]">
                <MapProvider>
                    <GoogleMap mapContainerStyle={{ width: "100%", height: "400px", borderRadius: "7px", }}
                        options={mapOptions} onLoad={onLoad} onUnmount={onUnmount}

                    >
                        <MarkerClusterer>
                            {(clusterer) =>
                                data.map((item) => (
                                 
                                    <MarkerF
                                        onClick={() => setSelectedMarker(item)}
                                        key={item._id}
                                        position={{ lat: item.location.lat, lng: item.location.lng }}
                                        clusterer={clusterer} />
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
                </MapProvider>
            </div>

        </div>

    )
};

export default MapComponent;
