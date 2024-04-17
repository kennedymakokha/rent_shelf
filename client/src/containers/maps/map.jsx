import { useEffect, useState } from 'react';
import { Autocomplete, GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
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
  });




  const shelves = [
    {
      cluster: false, crimeId: 1, category: "cate", location: {

        lat: -1.142666096, lng: 36.95416285
      }
    },
    {
      cluster: false, crimeId: 1, category: "cate", location: {
        lat: - 1.286389, lng: 36.817223
      }
    },
    {
      cluster: false, crimeId: 1, category: "cate", location: {
        lat: -3.97682910, lng: -3.97682910
      }
    },
    {
      cluster: false, crimeId: 1, category: "cate", location: {

        lat: -1.0333, lng: 37.0693
      }
    }
  ];
  return isLoaded ? (
    // <div className='flex h-screen w-screen items-center justify-center bg-green-100'>
    //   <div style={{ height: '100vh', width: '100%' }}>
    //     <GoogleMap
    //       center={location}
    //       zoom={15}
    //       options={{ mapTypeControl: false, zoomControl: false, fullscreenControl: false }}
    //       mapContainerClassName="w-[100vw] h-[100vh]"
    //     >
    //       {shelves.map((shelf, i) => (
    //         <Marker key={i} position={shelf.location} />
    //       ))}

    //     </GoogleMap>

    //   </div>
    // </div>
    <>
      <div className="flex relative flex-col  z-0 items-center h-[100vh] w-[100vw]">
        <div className="absolute left-0 top-0 h-[100%] w-[100%]">
          <GoogleMap
            zoom={15}
            center={location}
            options={{ mapTypeControl: false, zoomControl: false, fullscreenControl: false }}
            mapContainerClassName="w-full h-full">
            <Marker position={location} />
            {directionalResponse && <DirectionsRenderer directions={directionalResponse} />}
            {shelves.map((cods, i) => (
              <Marker key={i} position={cods.location} />
            ))}
            onLoad ={(map) => setMap(map)}
          </GoogleMap>
        </div>
        <div className="p-2 rounded-md sm:w-1/2  w-3/4 flex-col  bg-white border flex m-4  z-10 shadow-md ">
          <div className="w-full flex">
          
            <div className="sm:w-[60%] w-[80%]">
              <Autocomplete>
                <input type="text" ref={destinationRef} className="flex w-full px-2 focus:outline-none " placeholder="Destination" />
              </Autocomplete>
            </div>
            <div className="w-[40%]  flex gap-x-2 justify-between  ">
              {!directionalResponse ? <div className="w-[90%] flex justify-end  ">
                <div className="w-1/2 flex items-center justify-center border shadow-3xl bg-primary-100 text-secondary-100 rounded-md " onClick={culculate}> Find  </div>

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
            {/* <div onClick={() => map.panTo(location)} className="w-[10%]">
              <img src={BullsEye} className=" h-10 bg-secondary-00 w-10 rounded-full" alt="" />
            </div> */}

          </div>}
        </div>
      </div>

    </>

  ) : (
    <div className='flex h-screen w-screen items-center justify-center bg-red-200'>loading</div>
  );
}

export default MyMap



