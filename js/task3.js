import {card, mapCanvas,} from './const.js'

function choiceType(data) {
    switch(data){
        case 'flat':
            data = 'Квартира'
            break;
        case 'bungalow':
            data = 'Бунгало'
            break;
        case 'house':
            data = 'Будинок'
            break;
        case 'palace':
            data = 'Палац'
            break;
    }    
    return data
}
const photoFragment = new DocumentFragment
function getPhoto(arr){
    arr.forEach(element => {
        let img = document.createElement('img')
        img.src = element
        img.width = '45';
        img.height = '40';
        img.classList.add('popup__photo');
        photoFragment.append(img)
    });
    return photoFragment
}

export function creatContainer(array){
    const cardFragment = new DocumentFragment();

    const popupNode = card.content.cloneNode(true);
    const data =  array[0]
    const dataOffer = data.offer
    popupNode.querySelector('.popup__title').innerText = dataOffer.title;
    popupNode.querySelector('.popup__text--address').innerText = dataOffer.address;
    popupNode.querySelector('.popup__text--price').innerText = `${dataOffer.price}грн/ніч`;    
    popupNode.querySelector('.popup__type').innerText = choiceType(dataOffer.type);
    popupNode.querySelector('.popup__text--capacity').innerText =`${dataOffer.rooms} кімнати для ${data.offer.guests} гостей`;
    popupNode.querySelector('.popup__text--time').innerText = `Заїзд після ${dataOffer.checkin}, виїзд до ${data.offer.checkout}.`;
    popupNode.querySelector('.popup__features').innerText = dataOffer.features.join(', ');
    popupNode.querySelector('.popup__description').innerText = dataOffer.description;
    getPhoto(dataOffer.photos)
    popupNode.querySelector('.popup__photos').append(photoFragment) 
    popupNode.querySelector('.popup__avatar').src = data.author;


    cardFragment.append(popupNode)
    mapCanvas.append(cardFragment)

}
