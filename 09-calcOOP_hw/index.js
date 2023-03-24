'use strict'
const calculator = new Calculator(100);
calculator.add(10); // 110 - это текущее значение base 
calculator.add(10);
calculator.sub(20);
console.log(calculator.get()) //100
calculator.set(20);
calculator.add(10);
calculator.add(10);
calculator.add('qwe'); // NaN и значение 40 не менять
console.log(calculator.get()) // 40
calculator.res();
console.log(calculator.get()) // 100
calculator.set('tlv');
console.log(calculator.get()) //100




function Calculator(base) {
    this.counts = base
    this.add = function (n) {
        if (isNumber(n)) {
            this.counts += n
        }
    }
    this.sub = function (n) {
        if (isNumber(n)) {
            this.counts -= n
        }
    }
    this.set = function (n) {
        if (isNumber(n)) {
            this.counts = n
        }
    }
    this.get = function () {
        return this.counts
    }
    this.res = function () {
        this.counts = base
    }

}

function isNumber(num) {
    return typeof num === 'number'
}