export const mapService = {
    getLocs: getLocs,
    getSelectedLocation,
    getCurrLocation,
    getLocationName,
    
}

// import { storageServices } from './services/storage-service.js' // not working!

var locs = [{ lat: 11.22, lng: 22.11 }]
let gLocations = [];
const LOCATIONS_KEY = 'LOCATIONS_DB'




function getLocs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(locs);
        }, 2000)
    });
}

function createLocation(lat, lng, cb, name) {
    let location = {
        id: getLocationId(lat, lng),
        name: getLocationName(name),
        lat,
        lng,
        // weather,
        createdAt: new Date().toUTCString()
    }
    gLocations.push(location);
    saveToStorage(LOCATIONS_KEY, gLocations);
    cb();
}

function getSelectedLocation(map, ev, cb) {
    const myLatlng = { lat: 32.0749831, lng: 34.9120554 };
    let infoWindow = new google.maps.InfoWindow({
        content: "Click the map to get Lat/Lng!",
        position: myLatlng,

    });
    infoWindow.open(map);
    infoWindow.close();
    infoWindow = new google.maps.InfoWindow({
        position: ev.latLng,

    });
    infoWindow.setContent(
        JSON.stringify(ev.latLng.toJSON(), null, 2)
    );
    infoWindow.open(map);
    let myLatLng = {
        lat: ev.latLng.lat(),
        lng: ev.latLng.lng()
    }
    new google.maps.Marker({ position: myLatLng, map });
    createLocation(myLatLng.lat, myLatLng.lng, cb)
}

function getCurrLocation(map) {
    navigator.geolocation.getCurrentPosition((position) => {
        var currLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };

        map.setCenter(currLocation);
    });
}

function getLocationId(lat, lng) {
    return Math.floor(Math.random() * Math.floor(100)) + '-' + (Math.floor(lat) + Math.floor(lng)) + '-' + Math.floor(Math.random() * Math.floor(100));
}


function saveToStorage(key, val) {
    var str = JSON.stringify(val);
    localStorage.setItem(key, str);
}

function getLocationName(name){
    var locationName  = name;
    return locationName;}
    
function loadFromStorage(key) {
    var str = localStorage.getItem(key)
    return JSON.parse(str);
}