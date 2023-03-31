import {removeMarkers, createMarkers} from './task5.js';
import { arrayOffers } from "./task7.js";

const mapFilters = document.querySelector('.map__filters')
let filtersObj = {
  type: 'any',
  price: 'any',
  rooms: 'any',
  guests: 'any',
  features: {
    wifi: '',
    dishwasher: '',
    parking: '',
    washer:'',
    elevator:'',
    conditioner:''
  }
}
function filterArray(e){
  const offer = e.offer
  const features = offer.features
  return(
      (filtersObj.type == 'any' || offer.type == filtersObj.type) &&
      (filtersObj.rooms == 'any' || offer.rooms == filtersObj.rooms) &&
      (filtersObj.guests == 'any' || offer.guests == filtersObj.guests) &&
      (filtersObj.price == 'any' || getPriceFilter(e, filtersObj)) &&
      (filtersObj.features.wifi == '' || features.includes(filtersObj.features.wifi)) &&
      (filtersObj.features.conditioner == '' || features.includes(filtersObj.features.conditioner)) &&
      (filtersObj.features.dishwasher == '' || features.includes(filtersObj.features.dishwasher)) &&
      (filtersObj.features.elevator == '' || features.includes(filtersObj.features.elevator)) &&
      (filtersObj.features.parking == '' || features.includes(filtersObj.features.parking)) &&
      (filtersObj.features.washer == '' || features.includes(filtersObj.features.washer))
    )
}

function getPriceFilter(element, filter){
  switch(filtersObj.price){
    case '10000':
      return element.offer.price <= filter.price;
    case '49999':
      return  element.offer.price <= filtersObj.price 
    case '50000':
      return element.offer.price >= filtersObj.price
  }
}

function feildset(selected){
    const value = selected.value
    if (selected.checked) {
      filtersObj.features[value] = value;
    } else{
      filtersObj.features[value] = '';
    }
  }

export function selectFilter(){
  mapFilters.addEventListener('change', (e)=>{
    const select = e.target
    const value = select.value;

    switch(select.name){
      case 'housing-type':
        filtersObj.type = value
        break;
      case 'housing-price':
        filtersObj.price = value
        break;
      case 'housing-rooms':
          filtersObj.rooms = value
          break;
      case 'housing-guests':
        filtersObj.guests = value
        break;
      case 'features':
        console.log(select.name)
        feildset(select)
        break;
    }
    let arr = arrayOffers.filter(e => filterArray(e))
    removeMarkers()
    arr = arr.slice(0, 10)
    createMarkers(arr)
  })
  return filtersObj
}

