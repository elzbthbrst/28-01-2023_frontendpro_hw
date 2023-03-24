

const QUESTIONS = [
    {
        question: 'Сколько хромосом у здорового человека?',
        answer: '46',
        type: 'prompt',
    },
    {
        question: 'Путин - хуйло?',
        answer: true,
        type: 'confirm',
    },
    {
        question: 'Сколько хромосом у Путина?',
        answer: '47',
        type: 'prompt',
    },
    {
        question: 'Сколько тупых овец в московии (в млн)?',
        answer: '144',
        type: 'prompt',
    },
    {
        question: 'Снесли ли памятник Екатерине-2 в Одессе?',
        answer: true,
        type: 'confirm',
    },
    {
        question: 'Сколько черных пакетов выделяются на одного орка?',
        answer: '1',
        type: 'prompt',
    },
    {
        question: 'На сколько вы оцениваете работу ЗСУ от 1 до 10?',
        answer: '10',
        type: 'prompt',
    },
    {
        question: 'Со скольких позиций готовилось нападение на Беларусь?',
        answer: '4',
        type: 'prompt',
    },
    {
        question: 'Нужно ли сжигать сосийский флаг?',
        answer: true,
        type: 'confirm',
    },
    {
        question: 'Поддерживаете ли вы уход иностранных компаний из московии?',
        answer: true,
        type: 'confirm',
    },
    {
        question: 'Считаете ли вы сосию своим домом?',
        answer: false,
        type: 'confirm',
    },
];


quizQuestion(QUESTIONS)
function quizQuestion(QUESTIONS) {
    let result = 0
    for (const prop of QUESTIONS) {
        if (prop.type === 'prompt') {
            let userAnswer = prompt(`${prop.question}`)
            result = countResult(userAnswer, prop.answer, result)
        } else {
            let userAnswer = confirm(`${prop.question}`)
            result = countResult(userAnswer, prop.answer, result)
        }
    }
    return alert(`Вы заработали ${result} баллов из 110`)
}


function countResult(a, b, result) {
    if (a === b) {
        result += 10
    } else {
        result += 0
    }
    return result
}



// Реализовать опросник для пользователя,

// Задать ему, с помощью модальных окон, несколько вопросов и оценить его ответы.

// За правильный ответ начисляется 10 очков, за неправильный или отказ от ответа - 0.

// После прохода всех вопросов вывести, с помощью alert, результат.



// Чтоб задать вопрос ииспользуем 2 функции: prompt() или confirm().

// (!) Учитывая что prompt возвращает строку, преобразование типа в число делать не нужно, просто сравнивай ответ с правильным используя тройное равно.



// Список вопросов:

// Сколько хромосом у здорового человека? Ответ: '46'

// Путин - хуйло? Ответ: true

// Сколько хромосом у Путина? Ответ: '47'

// Сколько тупых овец в московии (в млн)? Ответ: '144'

// Снесли ли памятник Екатерине-2 в Одессе? Ответ: true

// Сколько черных пакетов выделяются на одного орка? Ответ: '1'

// На сколько вы оцениваете работу ЗСУ от 1 до 10? Ответ: '10'

// Со скольких позиций готовилось нападение на Беларусь? Ответ: '4'

// Нужно ли сжигать сосийский флаг? Ответ: true

// Поддерживаете ли вы уход иностранных компаний из московии? Ответ: true

// Считаете ли вы сосию своим домом? Ответ: false



// Пример организации вопросов:

// const QUESTIONS = [
//   {
//     question: 'question 1',
//     answer: 'write answer',
//     type: 'prompt',
//   },
//   {
//     question: 'question 2',
//     answer: true,
//     type: 'confirm',
//   },
// ];



// Пример организации вопросов: