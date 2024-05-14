import { useJsApiLoader } from "@react-google-maps/api";

const { VITE_APP_GOOGLE_API_KEY, VITE_APP_GOOGLE_MAP_ID } = import.meta.env;


const initializeMap = () => {

    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: VITE_APP_GOOGLE_API_KEY,
    });
    return { isLoaded, loadError }
}

export default initializeMap