import { price } from "./const.js";

price.max = 1000000;
export function getPrice(){
    type.addEventListener('input', () => {
        switch(type.value){
            case 'bungalow':
                price.min = 0;
                price.placeholder = 0
                break;
            case 'flat':
                price.min = 1000;
                price.placeholder = 1000;
                break;
            case 'house':
                price.min = 5000;
                price.placeholder = 5000;
                break;
            case 'palace':
                price.min = 10000;
                price.placeholder = 10000;
                break;
        }
    });
}
export function changeTime(select1, select2){
    select1.addEventListener('input', () => {
        select2.value = select1.value;
    })
}