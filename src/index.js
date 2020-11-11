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
      render(gift)
    })
  })
}

  function render(){
    let giftMarkup = `
    <div data-id = ${gift.id}>
    <h3> ${gift.attributes.name}</h3>
    <p> ${gift.attributes.store}</p>
    <p> ${gift.attributes.person.name}</p>
    <button data-id=${gift.id}>edit</button>
    </div>`
    document.querySelector('#gift-container').innerHTML +=giftMarkup
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
    let giftMarkup = `
    <div data-id = ${gift.id}>
    <h3> ${giftData.attributes.name}</h3>
    <p> ${giftData.attributes.store}</p>
    <p> ${giftData.attributes.person.name}</p>
    <button data-id=${gift.id}>edit</button>
    </div>`
    document.querySelector('#gift-container').innerHTML +=giftMarkup
  })
}
