import { creatContainer, cardFragment } from './task3.js';
const formElement = document.querySelectorAll('.ad-form fieldset');
const mapSelect = document.querySelectorAll('.map__filters select');
const mapFieldset = document.querySelectorAll('.map__filters fieldset');
const addressInput = document.querySelector('#address');
const LOCATION_RANGE = {
    lat: 35.6894, 
    lng: 139.6923
}
addressInput.setAttribute("disabled", "disabled");
addressInput.value = `${LOCATION_RANGE.lat}, ${LOCATION_RANGE.lng}`
const LeafIcon = L.Icon.extend({
    options: {
       iconSize:     [38, 95],
       shadowSize:   [50, 64],
       iconAnchor:   [22, 94],
       shadowAnchor: [4, 62],
       popupAnchor:  [-3, -76]
    }
});
const iconBlue = new LeafIcon({
    iconUrl: '../img/pin.svg',
})
const iconRed = new LeafIcon({
    iconUrl: '../img/main-pin.svg',
})

const markerRed = L.marker([LOCATION_RANGE.lat,LOCATION_RANGE.lng], { draggable: true, icon: iconRed,});

function setDisadled(arr){
    arr.forEach((e) =>{
        e.setAttribute("disabled", "disabled");
    })
}
function removeDisadled(arr) {
    arr.forEach((e) =>{
        e.removeAttribute('disabled')
    })
}



function getAddress(string){
    const arr = string.split(',');
    return arr
}
function createPopup(fragment){
    const div = document.createElement('div')
    div.append(fragment)
    return div
}
    
function createMarkers(arr){
    arr.forEach(e => {
    const address = getAddress(e.offer.address);
    creatContainer(e);
    console.log(cardFragment)
    const marker = L.marker([address[0], address[1]], {icon: iconBlue}).addTo(myMap);
    marker.bindPopup(createPopup(cardFragment))
})
}

function mapClick(map){
    markerRed.on('drag', () => {
        const position = markerRed.getLatLng();
        markerRed.setLatLng(new L.LatLng(position.lat, position.lng),{draggable:'true'});
        map.panTo(new L.LatLng(position.lat, position.lng))
        addressInput.value  = `${position.lat.toFixed(4)} ${position.lng.toFixed(4)}`
    });
    map.addLayer(markerRed);
}
setDisadled(formElement);
setDisadled(mapSelect);
setDisadled(mapFieldset);



const myMap = L.map('map', {
        center: [LOCATION_RANGE.lat, LOCATION_RANGE.lng],
        zoom: 11
    });
export function createMap() {
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(myMap);
    removeDisadled(formElement);
    removeDisadled(mapSelect);
    removeDisadled(mapFieldset);
    getResponse()
    myMap.addEventListener('click', mapClick(myMap));

}
async function getResponse(){
    let resp = await fetch("http://localhost:4000/photos");
    let arrayImage =  await resp.text()
    let array = JSON.parse(arrayImage)
    
    createMarkers(array, myMap);

    return array
}
