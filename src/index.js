const endPoint = 'http://localhost:3000/api/v1/gifts/'

document.addEventListener('DOMContentLoaded', () => {
  getGifts()
  const createGiftForm = document.querySelector('#create-gift-form')
  createGiftForm.addEventListener("submit", (e) => createFormHandler(e))})


function getGifts(){
  fetch(endPoint)
  .then(response => response.json())
  .then(gifts =>{
    gifts.data.forEach(gift =>{

      let newGift = new Gift(gift, gift.attributes)

      document.querySelector('#gift-container').innerHTML += newGift.renderGift()

      const btns = document.querySelectorAll('button')
      btns.forEach(btn=> {btn.addEventListener('click',event=>{deleteGift()})})
    })
  })
}

function deleteGift(){
  giftId = event.target.id
  gifts = Gift.all
  const giftToBeDeleted = gifts.find(gift=>gift.id==giftId)
  document.querySelector('#gift-container').innerHTML = ""
  fetch(endPoint + giftId,{
    method:'DELETE',
    headers:{"Content-Type":"application/json"}
  })
.then(resp=>{
  fetch(endPoint, {method:'GET'})
  .then(resp=>resp.json())
  .then(gifts=>{
    gifts.data.forEach(gift=>{
      let newGift = new Gift(gift, gift.attributes)
      document.querySelector('#gift-container').innerHTML += newGift.renderGift()
    })
  })
})}

function renderGift(){
 return `
 <div data-id = ${this.id}>
 <h3> ${this.name}</h3>
 <p> ${this.store}</p>
 <p> ${this.person.name}</p>
 <button id=${this.id}>Delete</button>
 </div>`
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
    alert('success')
    const btns = document.querySelectorAll('button')
    btns.forEach(btn=>{btn.addEventListener('click',event=>{deleteGift()})})
  })
}
