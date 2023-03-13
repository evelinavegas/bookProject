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
    let randomArray = [];
    for(let i = 0; i <= getRandomInteger(min, max); i++){
        
        randomArray.push(arr[getRandomInteger(0, arr.length)])        
    }
    randomArray = [...new Set(randomArray)]
    return randomArray
}