'use strict'

function Hamburger(typeOfGamburger) {
    this.price = typeOfGamburger.price
    this.callories = typeOfGamburger.callories
}

Hamburger.SIZE_SMALL = {
    price: 50,
    callories: 20,
}
Hamburger.SIZE_MIDDLE = {
    price: 75,
    callories: 30,
}
Hamburger.SIZE_BIG = {
    price: 100,
    callories: 40,
}

Hamburger.TOPPING_MAYO = {
    price: 20,
    callories: 5,
}
Hamburger.TOPPING_CHEESE = {
    price: 10,
    callories: 20,
}
Hamburger.TOPPING_SALAD = {
    price: 20,
    callories: 5,
}
Hamburger.TOPPING_POTATO = {
    price: 15,
    callories: 10,
}
Hamburger.TOPPING_SPICE = {
    price: 15,
    callories: 0,
}

Hamburger.prototype.addTopping = function (topping) {
    this.price += topping.price 
    this.callories += topping.callories 
    
}
Hamburger.prototype.getPrice = function () {
    return this.price
}
Hamburger.prototype.getCallories = function () {
    return this.callories
}
const hamburger = new Hamburger(Hamburger.SIZE_SMALL);
console.log(hamburger);
hamburger.addTopping(Hamburger.TOPPING_MAYO);

hamburger.addTopping(Hamburger.TOPPING_POTATO);
hamburger.addTopping(Hamburger.TOPPING_POTATO);
hamburger.addTopping(Hamburger.TOPPING_SPICE);
console.log(hamburger);
console.log('Price with sauce: ' + hamburger.getPrice());
console.log('Callories with sauce: ' + hamburger.getCallories());

// Гамбургер может быть с одним из нескольких видов начинок:

// сыром (+ 10 тугриков, + 20 калорий)

// салатом (+ 20 тугриков, + 5 калорий)

// картофелем (+ 15 тугриков, + 10 калорий)

// посыпать приправой (+ 15 тугриков, 0 калорий)

// полить майонезом (+ 20 тугриков, + 5 калорий).


//   маленький (50 тугриков, 20 калорий)
// средний (75 тугриков, 30 каллорий)
// большой (100 тугриков, 40 калорий)