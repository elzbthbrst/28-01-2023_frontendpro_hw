



function createCalculator(base) {
    let counts = base
    

    return {
        add: (n) => {
            if (!isNaN(n)) {
                counts += n
            }

        },
        sub: (n) => {
            if (!isNaN(n)) {
                counts -= n
            }
        },
        set: (n) => {
            if (!isNaN(n)) {
                counts = n
            }
        },
        get: () => {

            return counts
        },
        reset: () => {
            counts = base
        }

    }

}

const calculator = createCalculator(100);


calculator.add(10); // 110 - это текущее значение base
calculator.add(10);
calculator.sub(20);

console.log(calculator.get()) //100
calculator.set(20);
calculator.add(10);
calculator.add(10);
calculator.add('qwe'); // NaN и значение 40 не менять


console.log(calculator.get()) // 40


calculator.reset();
console.log(calculator.get()) // 100
calculator.set('tlv');
console.log(calculator.get()) //100






// Написать функцию калькулятор которая умеет

// прибавлять, вычитать, устанавливать новое

// базовое значение и возвращать значение.

// - Если вместо числа передается что-то другое то игнорируем

// его и текущее значение калькулятора не меняем.

// - Функции add, sub, set ничего возвращать или выводить в консоль не должны.

// - возвращать значение должен только метод .get()

// - реализовать метод .reset() который устанавливает базовое значение в то которое было задано при вызове Ф createCalculator(100).