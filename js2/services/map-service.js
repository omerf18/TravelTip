export const mapService = {
    getLocs: getLocs,
    maps
}
var locs = [{ lat: 11.22, lng: 22.11 }]

function getLocs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(locs);
        }, 2000)
    });
}

// get curr location
function getCurrLocation(map) {
    navigator.geolocation.getCurrentPosition((position) => {
        var currLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };

        map.setCenter(currLocation);
    });
}


function maps() {
   return axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyCflIkLnJfa7THe_HeqZyP3wP_EYpXg3cw')
    .then(res =>console.log(res))
}