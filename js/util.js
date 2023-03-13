export function getRandomInteger(min, max) {
    let countRandom = Math.floor(Math.random() * (max - min) + min);
    return countRandom
}
export function getRandomFractional(min, max) {
    let countRandom = Math.random() * (max - min) + min;
    countRandom = countRandom.toFixed(6)
    return countRandom
}
export function getRandomElemet(arr, min, max){
    let randomAray = [];
    for(let i = 0; i <= getRandomInteger(min, max); i++){
        
        randomAray.push(arr[getRandomInteger(0, arr.length)])        
    }
    randomAray = new Set(randomAray)
    return randomAray
}