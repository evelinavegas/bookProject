export function getRandomInteger(min, max) {
    let countRandom = Math.floor(Math.random() * (max - min) + min);
    return countRandom
}
export function getRandomFractional(min, max) {
    let countRandom = Math.random() * (max - min) + min;
    countRandom = countRandom.toFixed(6)
    return countRandom
}
