import {countOffer} from './const.js';
import {getOffer} from './data.js';
const dataArray = new Array(countOffer).fill(null).map((index)=>getOffer(index));



console.log(dataArray)