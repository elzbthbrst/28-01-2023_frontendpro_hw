const action = getAction();
const aVar = getVar(`A`);
const bVar = getVar(`B`);
const arrAction = [`+`, `-`, `*`, `/`];
const answer = calculator(action, aVar, bVar);

giveAnsver(action, aVar, bVar, answer);







function getAction() {
    return prompt(`Enter operator +, -, /, *`);
}

function getVar(operand) {
    return Number(prompt(`Enter operand ${operand}`))
}

function calculator(action, a, b) {
    switch (action) {
        case `/`: return divide(a, b);
        case `+`: return add(a, b);
        case `-`: return subtraction(a, b);
        case `*`: return multiply(a, b);
    }
}

function add(aVar, bVar) {
    return aVar + bVar;
}


function divide(aVar, bVar) {
    return aVar / bVar;
}

function multiply(aVar, bVar) {
    return aVar * bVar;
}

function subtraction(aVar, bVar) {
    return aVar - bVar;
}

function giveAnsver(action, a, b, answer) {
    if ((!isNaN(a)) && (!isNaN(b)) && arrAction.includes(action)) {
        return alert(`${aVar} ${action} ${bVar} = ${answer}`);
    }
    else {
        return alert(`you have entered wrong data`)
    }
}





















// if (action == `/`) {
//     return divide(a, b);
// } else if (action == `*`) {
//     return multiply(a, b);
// } else if (action == `-`) {
//     return subtraction(a, b);
// } else if (action == `+`) {
//     return add(a, b);
// } 