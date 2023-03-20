const title = document.querySelector('#title');
const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const TITLE_RANGE = {
    min: 30,
    max: 100,
}
const validityState = roomNumber.validity;
title.setAttribute( 'minlength' , TITLE_RANGE.min);
title.setAttribute( 'maxlength' , TITLE_RANGE.max);

const oneRoom = ['2'];
const twoRoom = ['1', '2'];
const threeRoom = [0, 1, 2];
const hundredRoom = [3]

const capacityOption = document.querySelectorAll('#capacity option');
console.log(capacityOption)
function setDisabled(){
    capacityOption.forEach((e) =>{
        e.setAttribute("disabled", "disabled")
    })
}
setDisabled

function removeDisadled(arr){
    console.log(arr)
    arr.forEach(e => {
        capacity.options[e].removeAttribute('disabled')
    })
}

setDisabled()
removeDisadled(oneRoom)

export function checkRoomValue(){
    roomNumber.addEventListener('click', () => {
        let roomValue = roomNumber.value;

        if(roomValue == 1){
        console.log('1value')

            setDisabled()
            removeDisadled(oneRoom)
        console.log('1value')
        } else if(roomValue == 2){
        console.log('2value')
            setDisabled()
            removeDisadled(twoRoom)
        } else if(roomValue == 3){
        console.log('3value')
            setDisabled()
            removeDisadled(threeRoom)
        }
        else if(roomValue == 100){
            setDisabled()
            removeDisadled(hundredRoom)
        }
    })
}
