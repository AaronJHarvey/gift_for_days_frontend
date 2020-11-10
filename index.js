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
      render(gift)
    })
  })
}




  function render(gift){
    const giftMarkup = `
    <div data-id=${gift.id}>
      <h3> ${gift.attributes.name}</h3>
      <p>${gift.attributes.store}</p>
      <p>for ${gift.attributes.person.name}</p>
      <button data-id=${gift.id}>edit</button>
    </div>
    <br><br>`;

    document.querySelector('#gift-container').innerHTML += giftMarkup;
  }






function createFormHandler(e){
  e.preventDefault()
  const giftNameInput = document.querySelector('#input-gift-name').value
  const giftStoreNameInput = document.querySelector('#input-store').value
  const personId = parseInt(document.querySelector('#people').value)
  postGift(giftNameInput, giftStoreNameInput, personId)
}







function postGift(name, store, person_id){
  let bodyData = {name,store,person_id}
  fetch(endPoint,{
    method:"POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(bodyData)
  })
  .then(resp => resp.json())
  .then(gift=>{
    console.log(data);
    const giftData = gift.data
    render(gift)
  })
  .catch(err=>console.log(err))
}
