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
    <p> for ${this.person.name}</p>
    </div>
    <br>`

  }

}

Gift.all = [];
