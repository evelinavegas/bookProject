const RANGE_DATA = {
    min: 1,
    max: 10 
};
const RANGE_PHOTOS_AVATAR = {
    min: 1,
    max: 8
};
const RANGE_PHOTOS = {
    min: 1,
    max: 3
};

const RANGE_ROOMS ={
    min: 1,
    max: 100
}
const RANGE_PRICE ={
    min: 1,
    max: 1000000
}

const RANGE_GUESTS ={
    min: 1,
    max: 3
}
const RANGE_X ={
    min: 35.65000,
    max: 35.70000
}
const RANGE_Y ={
    min: 139.70000,
    max: 139.80000
}
const RANGE_FEATURES ={
    min: 2,
    max: 5
}
const hoursArray = ['12:00', '13:00', '14:00'];
const typeArray = ['palace', 'flat', 'house', 'bungalow'];
const featuresArray = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const descriptionArray = [
    'Вранці промінчик сонця увійде в спальню і порадує вас',
    'Затишна чиста кухня',
    'Це найвигідніша пропозиція',
    "Квартира з дизайнерським інтер'єром в стилі хай-тек",
    'Комфорт проживання забезпечує система розумний дім',
]
const photosArray = [
    'http://o0.github.io/assets/images/tokyo/hotel1.jpg', 
    'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
]
const dataArray = new Array(RANGE_DATA.max).fill(null).map((index)=>getOffer(index));

function getRandomInteger(min, max) {
    let countRandom = Math.floor(Math.random() * (max - min) + min);
    return countRandom
}
function getRandomFractional(min, max) {
    let countRandom = Math.random() * (max - min) + min;
    countRandom = countRandom.toFixed(6)
    return countRandom
}
function getRandomElemet(arr, min, max){
    let randomAray = [];
    for(let i = 0; i <= getRandomInteger(min, max); i++){
        
        randomAray.push(arr[getRandomInteger(0, arr.length)])        
    }
    randomAray = new Set(randomAray)
    return randomAray
}
function getOffer(){
    return {
        author: `img/avatars/user0${getRandomInteger(RANGE_PHOTOS_AVATAR.min, RANGE_PHOTOS_AVATAR.max)}.png`,
        offer: {
            title: 'text',
            address: `${getRandomFractional(RANGE_X.min, RANGE_X.max)}, ${getRandomFractional(RANGE_Y.min, RANGE_Y.max)}`,
            price: `${getRandomInteger(RANGE_PRICE.min, RANGE_PRICE.max)}$`,
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
console.log(dataArray)