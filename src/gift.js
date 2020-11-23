class Gift {

  constructor(gift, giftAttributes){
    this.id = gift.id
    this.name = giftAttributes.name
    this.store = giftAttributes.store
    this.person = giftAttributes.person
    Gift.all.push(this)

  }

   renderGift(){
    return `
    <div data-id = ${this.id}>
    <h3> ${this.name}</h3>
    <p> ${this.store}</p>
    <p> ${this.person.name}</p>
    <button id=${this.id}>edit</button>
    </div>`
  }
}

Gift.all = [];
