export const mapService = {
    getLocs: getLocs,
    getSelectedLocation,
    getCurrLocation,
}
var locs = [{ lat: 11.22, lng: 22.11 }]

let location = [];

function getLocs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(locs);
        }, 2000)
    });
}


// 4. Build the LocationService managing Locations:
// {id, name, lat, lng, weather, createdAt, updatedAt}


function createLocation(id, name, lat, lng, weather, createdAt, updatedAt) {
    let location = {
        // id,
        // name,
        // lat,
        // lng,
        // weather,
        createdAt: new Date().toUTCString()
        // updatedAt
    }
    console.log(location.createdAt);
    // gLocations.push(location);
}

function getSelectedLocation(map) {
    const myLatlng = { lat: 32.0749831, lng: 34.9120554 };
    let infoWindow = new google.maps.InfoWindow({
        content: "Click the map to get Lat/Lng!",
        position: myLatlng,
        
    });
    infoWindow.open(map);
    map.addListener("click", (mapsMouseEvent) => {
        infoWindow.close();
        infoWindow = new google.maps.InfoWindow({
            position: mapsMouseEvent.latLng,

        });
        infoWindow.setContent(
            JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
        );
        infoWindow.open(map);
        let createdAt = Date.now()

        let myLatLng = {
            lat: mapsMouseEvent.latLng.lat(),
            lng: mapsMouseEvent.latLng.lng()
        }
        // var marker = 
        // new google.maps.Marker({ position: myLatLng, map: gMap });
        new google.maps.Marker({ position: myLatLng, map });
        //  var name = prompt('Enter place name')
        //  if(!name)return
        //  addPlace(name,myLatLng);
        //  map.setCenter(myLatLng);




        createLocation() //dennis
        // createdLocation('...') //omer

    });




}
function getCurrLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
        var currLocation = {
            lat:position.coords.latitude, 
            lng:position.coords.longitude
        };
      
        gMap.setCenter(currLocation);
    });
}
