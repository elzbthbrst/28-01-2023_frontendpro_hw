`use strict`

class Student {
    constructor(name, marks) {
        this.name = name
        this.marks = marks
    }

    getAverageMark() {
        return this.getMarksSum() / this.marks.length
    }

    getMarksSum() {
        return this.marks.reduce((acc, mark) => acc += mark)
    }
}

class Group {
    #students = [];

    addStudent(student) {
        if (this.#isStudent(student)) {
            this.#students.push(student)
        }
    }

    #isStudent(student) {
        return (student instanceof Student)
    }

    getAverageMark() {
        return this.getAverageMarksSum() / this.#students.length
    }

    getAverageMarksSum() {
        return this.#students.reduce((acc, student) => acc += student.getAverageMark(), 0)

    }
    get students() {
        return this.#students
    }

}

const group = new Group();


group.addStudent(new Student('John', [10, 8])); // средний балл = 9
group.addStudent(new Student('Alex', [10, 9])); // средний балл = 9.5
group.addStudent(new Student('Bob', [6, 10, ])); // средний балл = 8



console.log(group.students.length === 3);
group.addStudent({}); // игнорируем добавление невалидных данных
console.log(group.students.length === 3);

// Выводим средний балл группы
console.log(group.getAverageMark() === (9 + 9.5 + 8) / 3);

group.students = [new Student('John', [10, 10, 5, 10])]; // Сделать group.students - readonly
console.log(group.students.length === 3);


// Написать полифил для массива:
Array.prototype.max = function () {
    let maxCount = 0
    for (let i = 0; i < this.length; i++) {
        if (maxCount < this[i]) {
            maxCount = this[i]
        } 
    }
    return maxCount
}

console.log([6, 5, 8, 7].max());
console.log([16, 12, 9, 8, 21, -63].max());


// Задача 'Группа студентов':

// Нужно посчитать средний балл группы.

// Средний балл группы = сумма средних баллов каждого студента / количество студентов

// При добавлении студента в группу валидировать тип добавляемого объекта и если тип не Student - игнорировать. Попробуй реализовать так, чтоб каждый студент сам считал свой средний балл.



// - При добавлении валидировать тип добавляемого объекта и если тип не Student - игнорировать.

// - Функцию валидатор сделать приватной

// - Массив students сделать readonly