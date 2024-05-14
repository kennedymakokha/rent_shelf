


// const getName = async (lat, lng) => {
//     try {
//         // Assign the resolved promise payload to `response` const
//         const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBBYlYdpbci4zBhCSyLAJngOBLR3cRCGJA`)


//         if (!response.ok) {
//             throw Error(response.statusText);
//         }
//         const json = await response.json();
//         console.log(json.results[0].formatted_address.split(","))
//         return json.results[0].formatted_address.split(",");
//     } catch (error) {
//         console.error("message");
//     }

// }

export const getLatLong = async (name, setorigin, map, setItem) => {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${name}&key=AIzaSyBBYlYdpbci4zBhCSyLAJngOBLR3cRCGJA`)
        .then(res => res.json().then(data => {
            let loc = data.results[0].geometry.location
            setorigin(prev => ({ ...prev, name: name, location: loc }))
            // map.panTo(loc)

            setItem((prevState) => ({
                ...prevState,
                area: name,
                location: loc
            }));


        }).catch((e) => {
            console.log(e)
        })
        )
}
export const getName = async (setorigin, lat, lng) => {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBBYlYdpbci4zBhCSyLAJngOBLR3cRCGJA`)
        .then(res => res.json().then(data => {
            let T = data.results[0].formatted_address.split(",")
            // console.log(T)
            setorigin({ name: `${T[T.length - 2].replace(/\s/g, '')}, ${T[T.length - 1].replace(/\s/g, '')}`, location: { lat, lng } })
        }).catch((e) => {
            console.log(e)
        })
        )
}
export const getIP = (setIPAddress) => {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => setIPAddress(`${data.ip}`))
        .catch(error => console.log(error))
}
export const getMe = (setorigin, setPosition) => {
    navigator.geolocation.getCurrentPosition(
        async position => {
            if (setPosition) setPosition({
                lat: position.coords.latitude, lng: position.coords.longitude
            })
            await getName(setorigin, position.coords.latitude, position.coords.longitude)
            // return position

        },
        error => console.error('Error getting location:', error)
    );
}