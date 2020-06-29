function add(x, y) {
    return x + y
}

// const add = (x, y) => x + y

function multiply(x, y) {
    return x * y
}

function divide(x, y) {
    return x / y
}

function calculator (x, y, equipment) { //Callback
    return equipment(x, y)
}

const addOutput = calculator(1, 2, add)
const multiplyOutput = calculator(1, 2, multiply)
const divideOutput = calculator(1, 2, divide)
console.log({ addOutput, multiplyOutput, divideOutput })

