const endPoint = 'http://localhost:3000/api/v1/gifts'

document.addEventListener('DOMContentLoaded',() => {
  getGifts()

  const createGiftForm = document.querySelector('#create-gift-form')

  createGiftForm.addEventListener('submit', (e)=>createFormHandler(e))
})

function getGifts(){
  fetch(endPoint)
  .then(response =>response.json())
  .then(giftItems => {
    giftItems.data.forEach(gift =>{
      const giftMarkup = `
      <div data-id=${gift.id}>
        <h3> ${gift.attributes.name}</h3>
        <p>${gift.attributes.store}</p>
        <p>for ${gift.attributes.person.name}</p>
        <button data-id=${gift.id}>edit</button>
      </div>
      <br><br>`;

      document.querySelector('#gift-container').innerHTML += giftMarkup
    })
  })
}

function createFormHandler(e){
  e.preventDefault()
  console.log(e);
}