/* eslint-disable react/prop-types */
import { APIProvider, Map, useMap, AdvancedMarker } from '@vis.gl/react-google-maps'
import { MarkerClusterer } from '@googlemaps/markerclusterer'
// import { Autocomplete, GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import { useEffect, useState, useRef } from 'react'
import { treesData } from './../../assets/trees.js'
import pin2 from './../../assets/pin2.png'

import { Autocomplete } from '@react-google-maps/api'
const { VITE_APP_GOOGLE_API_KEY, VITE_APP_GOOGLE_MAP_ID } = import.meta.env;
// console.table([treesData])
// { "type": "Feature", "properties": { "_id": 1, "OBJECTID": 1, "STRUCTID": "383604", "ADDRESS": 1550, "STREETNAME": "SANDHURST CRCL", "CROSSSTREET1": "BRIMWOOD BLVD", "CROSSSTREET2": "FINCH AVE E", "SUFFIX": "", "UNIT_NUMBER": "0", "TREE_POSITION_NUMBER": 60, "SITE": "ALBERT CAMPELL CI", "WARD": "23", "BOTANICAL_NAME": "Acer x freemanii (A. rubrum x saccharinum) 'Autumn Blaze'", "COMMON_NAME": "Maple, Freeman Autumn Blaze", "DBH_TRUNK": 8 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -79.272424472942006, 43.809262538314101 ] ] } },
for (let index = 0; index < treesData.length; index++) {
    const element = treesData[index];
    // console.log(element)

}
function Clustermap({ data }) {

    return (
        <>
            {data &&

                <>
                    <div className="flex rounded-md relative flex-col  z-0 items-center h-full w-full">
                        <div className="absolute rounded-full left-0 top-0 h-[100%] w-[100%]">
                            <APIProvider apiKey={VITE_APP_GOOGLE_API_KEY} libraries={["places"]}>
                                <Map mapId={VITE_APP_GOOGLE_MAP_ID}
                                    options={{
                                        mapTypeControl: false,
                                        zoomControl: false, fullscreenControl: false
                                    }}
                                    center={{ lng: 36.9746209, lat: -1.1484236 }}
                                    zoom={10}
                                >
                                    <Markers points={data} />
                                </Map>
                            </APIProvider>
                        </div>
                        <div className="p-2 rounded-md sm:w-1/2  w-3/4 flex-col  bg-white border flex m-4  z-10 shadow-md ">
                            <div className="w-full flex">

                                <div className="sm:w-[60%]  w-[80%]">
                                    <Autocomplete>
                                        <input type="text" className="flex w-full px-2 focus:outline-none " placeholder="Other places" />
                                    </Autocomplete>
                                </div>
                                <div className="w-[40%]  flex gap-x-2 justify-between  ">
                                    <div className="w-[90%] flex justify-end  ">
                                        <div className="w-1/2 h-7 flex items-center justify-center border shadow-3xl bg-primary-100 text-secondary-100 rounded-md " > Find  </div>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </>

            }
        </>

    )
}
const Markers = ({ points }) => {
    const map = useMap()

    const [markers, setMarkers] = useState({})
    const clusterer = useRef(null)

    useEffect(() => {
        if (!map) return
        if (!clusterer.current) {
            clusterer.current = new MarkerClusterer({ map })
        }
    }, [map])
    useEffect(() => {
        clusterer.current?.clearMarkers()
        clusterer.current.addMarkers(Object.values(markers))

    }, [markers])

    const setMarkerRef = (marker, i) => {

        if (marker && markers[i]) return
        if (!marker && !markers[i]) return
        setMarkers(prevState => {
            if (marker) {
                return { ...prevState, [i]: marker };
            }

            else {
                const newMarkers = { ...prevState }
                delete newMarkers[i];
                return newMarkers;
            }
        })

    }
    return <>
        {points.map((point, i) => (
            <AdvancedMarker key={i} position={point.location}
                ref={(marker) => setMarkerRef(marker, i)}
            >
                <span><img src={pin2} alt="" /></span>
            </AdvancedMarker>
        ))}
    </>
}
export default Clustermap