const endPoint = 'http://localhost:3000/api/v1/gifts'

document.addEventListener('DOMContentLoaded',() => {
  getGifts()
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
        <p>${gift.attributes.person.name}</p>
        <button data-id=${gift.id}>edit</button>
      </div>
      <br><br>`;

      document.querySelector('#gift-container').innerHTML += giftMarkup
    })
  })
}
