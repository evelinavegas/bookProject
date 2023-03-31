const imgUploudPrevie = document.querySelector('.ad-form-header__preview img');
const uploadAvatar = document.querySelector('#avatar');
const imgUploudPhoto = document.querySelector('.ad-form__photo');

const uploadImage = document.querySelector('#images');
const fileReader = new FileReader();

export function uploudImage(){
  uploadAvatar.addEventListener('change', () => {
        const uploadFileFirst = uploadAvatar.files[0]
        fileReader.onloadend = function(){
          imgUploudPrevie.src = this.result

        }
        if(uploadFileFirst){
            fileReader.readAsDataURL(uploadFileFirst);
        }   
    })
}
export function uploudSomeImage(){
    uploadImage.addEventListener('change', () => {
      const uploadFileFirst = uploadImage.files[0]
      fileReader.onloadend = function(){
        const img = document.createElement('img')
        img.width = 70;
        img.height = 70;
        imgUploudPhoto.append(img)
        img.src = this.result
      }
      if(uploadFileFirst){
          fileReader.readAsDataURL(uploadFileFirst);
      }   
  })
}

