const ACTIONS = { '+': add, '/': divide, '*': multiply, '-': subtraction }
const ACTIONS_LIST = Object.keys(ACTIONS) //массив


const action = getAction();
const countOperand = getCount(); //число
const operands = getOperands(); // массив
const result = getResult(action, operands);
const answer =  giveAnsver(action, operands, result);
console.log(result);




function getAction() {
    let act
    do {
        act = prompt(`Enter operator ${ACTIONS_LIST.join(' , ')}`)
    } while (!ACTIONS_LIST.includes(act))
    return act;
}

function getCount() {
    let cnt
    do {
        cnt = Number(prompt(`Enter operands count`))
    } while (!(1 < cnt && cnt < 5))
    return cnt;
}

function getOperands() {
    let arrOperands = []
    let enterOperand

    for (let i = 1; i <= countOperand; i++) {
        do {
            enterOperand = Number(prompt(`Enter operand ${i}`))
        } while (enterOperand === 0 || isNaN(enterOperand))
        arrOperands.push(enterOperand)
    }

    return arrOperands
}

function getResult(action, operands) {
    return ACTIONS[action](operands);
}

function giveAnsver(action, operands, result){
    alert(`${operands.join(` ${action} `)} = ${result}`)
}

function add(operands) {
    let adds = 0
    for (let z = 0; z < operands.length; z++) {
        adds += operands[z]
    }
    return adds
}



function divide(operands) {
    let div = operands[0]
    for (let z = 1; z < (operands.length); z++) {
        div /= operands[z]
    }
    return div
}


function multiply(operands) {
    let mult = operands[0]
    for (let z = 1; z < (operands.length); z++) {
        mult *= operands[z]
    }
    return mult
}

function subtraction(operands) {
    let sub = operands[0]
    for (let z = 1; z < (operands.length); z++) {
        sub -= operands[z]
    }
    return sub
}
