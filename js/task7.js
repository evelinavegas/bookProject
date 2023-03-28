const sendData = async (url, data) => {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  
    if (!response.ok) {
      throw new Error(`Error`);
    }
  
    return await response.json()
    .then((data) => {
        console.log(data)
    })
  }
function sendForm(){
    const form = document.querySelector('.ad-form');
    const button = document.querySelector('.ad-form__submit');
    form.addEventListener('submit', e =>{
        e.preventDefault();
        const formData = new FormData(form);
        const data = [...formData]
        console.log(data)
        sendData('http://localhost:1000/photos', formData)
        .then(() => {
            form.reset();
        })
    })
}
