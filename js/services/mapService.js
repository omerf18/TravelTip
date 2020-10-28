export const mapService = {
    getLocs: getLocs,
    getSelectedLocation,
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
        lat,
        lng,
        // weather,
        // createdAt,
        // updatedAt
    }
    console.log(location);
    gLocations.push(location);
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
        createLocation(infoWindow.setContent)

        let myLatLng = {
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
        }
        // var marker = 
        // new google.maps.Marker({ position: myLatLng, map: gMap });
        new google.maps.Marker({ position: myLatLng, map });
        //  var name = prompt('Enter place name')
        //  if(!name)return
        //  addPlace(name,myLatLng);
        //  map.setCenter(myLatLng);




        
        createdLocation('...') //dennis
        createdLocation('...') //omer

    });


}
