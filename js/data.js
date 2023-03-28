const http = require('http');
const fs = require('fs');

import {countOffer, RANGE_PHOTOS_AVATAR, RANGE_PHOTOS, RANGE_ROOMS, RANGE_PRICE, RANGE_GUESTS, RANGE_X, RANGE_Y, RANGE_FEATURES, hoursArray, typeArray, featuresArray, descriptionArray, photosArray} from './const.js'
import {getRandomInteger, getRandomFractional, getRandomElemet} from './util.js'

const dataArray = new Array(countOffer).fill(null).map((index)=>getOffer(index));

function getOffer(){
    return {
        author: `img/avatars/user0${getRandomInteger(RANGE_PHOTOS_AVATAR.min, RANGE_PHOTOS_AVATAR.max)}.png`,
        offer: {
            title: 'text',
            address: `${getRandomFractional(RANGE_X.min, RANGE_X.max)}, ${getRandomFractional(RANGE_Y.min, RANGE_Y.max)}`,
            price: `${getRandomInteger(RANGE_PRICE.min, RANGE_PRICE.max)}`,
            type: typeArray[getRandomInteger(0, typeArray.length)],
            rooms: getRandomInteger(RANGE_ROOMS.min, RANGE_ROOMS.max),
            guests: getRandomInteger(RANGE_GUESTS.min, RANGE_GUESTS.max),
            checkin: hoursArray[getRandomInteger(0, hoursArray.length)],
            checkout:  hoursArray[getRandomInteger(0, hoursArray.length)],
            features: getRandomElemet(featuresArray, RANGE_FEATURES.min, RANGE_FEATURES.max),
            description: descriptionArray[getRandomInteger(0, descriptionArray.length)],
            photos: getRandomElemet(photosArray, RANGE_PHOTOS.min, RANGE_PHOTOS.max)
        },
        location: {
            x: `широта: ${getRandomFractional(RANGE_X.min, RANGE_X.max)}`,
            y: `довгота: ${getRandomFractional(RANGE_Y.min, RANGE_Y.max)}`}
    }
}
fs.writeFileSync('photos.txt', JSON.stringify(dataArray));
http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin','*');

    res.writeHead(200, {'Content-Type': 'application/json'});
    const url = req.url;

    if(url ==='/photos') {
        const data = fs.readFileSync('photos.txt', 'utf8');
        res.end(data);
    }
    else {
        res.write('Wrong route');
        res.end();
    }

}).listen(4000)
