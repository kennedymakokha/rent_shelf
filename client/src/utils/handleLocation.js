


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

export const getLatLong = async (name,setLocation,map) => {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${name}&key=AIzaSyBBYlYdpbci4zBhCSyLAJngOBLR3cRCGJA`)
      .then(res => res.json().then(data => {
        let loc = data.results[0].geometry.location
        // setLocation(loc)
        map.panTo(loc)

      }).catch((e) => {
        console.log(e)
      })
      )
  }
const getName = async (setorigin, lat, lng,map) => {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBBYlYdpbci4zBhCSyLAJngOBLR3cRCGJA`)
        .then(res => res.json().then(data => {
            let T = data.results[0].formatted_address.split(",")
            setorigin({ name: `${T[T.length - 2]},${T[T.length - 1]}`, location: { lat, lng } })
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
export const getMe = (setorigin,map) => {
    navigator.geolocation.getCurrentPosition(
        async position => {
            await getName(setorigin, position.coords.latitude, position.coords.longitude)
            // return position

        },
        error => console.error('Error getting location:', error)
    );
}