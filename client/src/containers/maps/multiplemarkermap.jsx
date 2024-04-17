import { useState, useRef, useEffect } from "react";
import Pin from './../../assets/pin.png'
import GoogleMapReact from "google-map-react";
import useSupercluster from "use-supercluster";
import ShelfModal from "../shelfModal";


const Marker = ({ children }) => children;
export default function MultipleMaps() {
  const mapRef = useRef();
  const [bounds, setBounds] = useState(null);
  const [zoom, setZoom] = useState(10);
  const { VITE_APP_GOOGLE_API_KEY } = import.meta.env;
  const shelves = [
    {
      cluster: false, crimeId: 1, category: "cate", location: {

        latitude: -1.142666096, longitude: 36.95416285
      }
    },
    {
      cluster: false, crimeId: 1, category: "cate", location: {
        latitude: - 1.286389, longitude: 36.817223
      }
    },
    {
      cluster: false, crimeId: 1, category: "cate", location: {
        latitude: -3.97682910, longitude: -3.97682910
      }
    },
    {
      cluster: false, crimeId: 1, category: "cate", location: {

        latitude: -1.0333, longitude: 37.0693
      }
    }
  ];
  const points = shelves.map(shelf => ({
    type: "Feature",
    properties: { cluster: false, shelfId: shelf.id, category: shelf.category },
    geometry: {
      type: "Point",
      coordinates: [
        parseFloat(shelf.location.longitude),
        parseFloat(shelf.location.latitude)
      ]
    }
  }));

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 75, maxZoom: 20 }
  });
  const [location, setLocation] = useState(null);
  const [item, setItem] = useState({ name: '', show: false, image: '' });
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

  return (
    <div className="w-full h-full ">
      {location && <GoogleMapReact
        bootstrapURLKeys={{ key: VITE_APP_GOOGLE_API_KEY }}
        defaultCenter={{
          // lat: -1.1415072, lng: 36.9836453
          lng: location?.longitude, lat: location?.latitude
        }}
        defaultZoom={10}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map }) => {
          mapRef.current = map;
        }}
        onChange={({ zoom, bounds }) => {
          setZoom(zoom);
          setBounds([
            bounds.nw.lng,
            bounds.se.lat,
            bounds.se.lng,
            bounds.nw.lat
          ]);
        }}
      >
        {clusters.map(cluster => {
          const [longitude, latitude] = cluster.geometry.coordinates;
          const {
            cluster: isCluster,
            point_count: pointCount
          } = cluster.properties;

          if (isCluster) {
            return (
              <Marker
                key={`cluster-${cluster.id}`}
                lat={latitude}
                lng={longitude}
              >
                <div
                  className="cluster-marker"
                  style={{
                    width: `${10 + (pointCount / points.length) * 20}px`,
                    height: `${10 + (pointCount / points.length) * 20}px`
                  }}
                  onClick={() => {
                    const expansionZoom = Math.min(
                      supercluster.getClusterExpansionZoom(cluster.id),
                      20
                    );
                    setItem({ show: true })
                    mapRef.current.setZoom(expansionZoom);
                    mapRef.current.panTo({ lat: latitude, lng: longitude });
                  }}
                >
                  {pointCount}
                </div>
              </Marker>
            );
          }

          return (
            <Marker
              key={`crime-${cluster.properties.crimeId}`}
              lat={latitude}
              lng={longitude}
            >
              <button className="crime-marker">
                <img src={Pin} alt="" className="h-20 w-20" />
              </button>
            </Marker>
          );
        })}
      </GoogleMapReact>}
      {/* <ShelfModal item={item} /> */}
    </div>
  );
}
