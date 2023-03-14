



export  default  class Card {

     card
    _open = false
    _succes = false

    constructor(container, number, action) {
        this.card = document.createElement('div'),
            this.card.classList.add('card')
            this.number= number
        this.card.textContent = number
        this.card.addEventListener("click", () => {
            if (this._open == false && this._succes == false) {
                this.open = true
                action(this)
            }
        })
        container.append(this.card)
     }
     set open(value) {
        this._open = value
        value ? this.card.classList.add('open') : this.card.classList.remove('open')
    }
    get open() {
        return this._open
    }

    set succes(value) {
        this._succes = value
        value ? this.card.classList.add('succes') : this.card.classList.remove('succes')
    }
    get succes() {
        return this._succes
    }


}










