const endPoint = 'http://localhost:3000/api/v1/gifts'

document.addEventListener('DOMContentLoaded', () => {
  getGifts()

  const createGiftForm = document.querySelector('#create-gift-form')
  createGiftForm.addEventListener("submit", (e) => createFormHandler(e) )
})


function getGifts(){
  fetch(endPoint)
  .then(response => response.json())
  .then(gifts =>{
    gifts.data.forEach(gift =>{

      let newGift = new Gift(gift, gift.attributes)

      document.querySelector('#gift-container').innerHTML += newGift.renderGift()

    })
  })
}


function createFormHandler(e){
  e.preventDefault()
  const nameInput = document.querySelector('#input-name').value
  const storeInput = document.querySelector('#input-store').value
  const personId = parseInt(document.querySelector('#people').value)
  postFetch(nameInput, storeInput, personId)
}


function postFetch(name, store, person_id){
  const bodyData = {name, store, person_id}
  fetch(endPoint, {
    method:'POST',
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify(bodyData)
  })
  .then(response =>response.json())
  .then(gift=>{
    const giftData = gift.data
    let newGift = new Gift(giftData, giftData.attributes)

    document.querySelector('#gift-container').innerHTML += newGift.renderGift()

  })
}
