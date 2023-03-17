import {dataArray} from './data.js';
import { creatContainer, cardFragment } from './task3.js';

const formElement = document.querySelectorAll('.ad-form fieldset');
const mapFilters = document.querySelector('.map__filters').classList.add('map__filters-disabled');
const mapSelect = document.querySelectorAll('.map__filters select');
const mapFieldset = document.querySelectorAll('.map__filters fieldset');
const addressInput = document.querySelector('#address')
addressInput.setAttribute("disabled", "disabled")
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

const markerRed = L.marker([35.6894,139.6923], { draggable: true, icon: iconRed,});

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
    
function createMarkers(arr, map){
    arr.forEach(e => {
    const address = getAddress(e.offer.address);
    creatContainer(e);
    
    const marker = L.marker([address[0], address[1]], {icon: iconBlue}).addTo(map);
    marker.bindPopup(createPopup(cardFragment))
})
}

function mapClick(map){
    markerRed.on('dragend', (e) => {
        const position = markerRed.getLatLng();
        markerRed.setLatLng(new L.LatLng(position.lat, position.lng),{draggable:'true'});
        map.panTo(new L.LatLng(position.lat, position.lng))
        addressInput.value  = `${position.lat} ${position.lng}`
    });
    map.addLayer(markerRed);
}
console.log('error')
setDisadled(formElement);
setDisadled(mapSelect);
setDisadled(mapFieldset);

export function createMap() {
    const myMap = L.map('map', {
        center: [35.6894,139.692],
        zoom: 11
    });
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(myMap);
    removeDisadled(formElement);
    removeDisadled(mapSelect);
    removeDisadled(mapFieldset);
    
    createMarkers(dataArray, myMap);
    myMap.addEventListener('click', mapClick(myMap));

}