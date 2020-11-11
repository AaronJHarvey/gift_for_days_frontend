class Gift{

  constructor(gift, giftAttributes){
    this.id = gift.id
    this.name = giftAttributes.name
    this.store = giftAttributes.store
    this.person = giftAttributes.person
    Gift.all.push(this)
    debugger
  }
}

Gift.all = [];
