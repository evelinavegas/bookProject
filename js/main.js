import {dataArray} from './data.js';
import {checkRoomValue} from './task6.js'
import {sendForm} from './task7.js'
import { selectFilter } from "./task8.js";


setTimeout(createMap, 2000)
cconst sendData = async (url, data) => {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      
    });
    if (!response.ok) {
      throw new Error(`Error`);
    }
  
    return await response.json();
  }
function sendForm(){
    const form = document.querySelector('.ad-form');
    form.addEventListener('submit', (e) =>{
        e.preventDefault();
        const formData = new FormData(form);
        const dataForm = {};
        for(const [key, value] of formData) {
          dataForm[key] = value;
        }
        console.log(dataForm)
        sendData('http://localhost:8000/photos', dataForm)
        
    })
}
sendForm()
selectFilter()



