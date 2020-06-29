// Create buttons on the page for Add, Multiply, and Divide, 
// and write a click event listener for each button, which calls the calculator
// with the correct x and y values and the correct callback function
// You will need two textboxes: one for x, and one for y.

const mainElement = document.querySelector('main')

const xInput = document.createElement('input')
xInput.type = 'number'
xInput.setAttribute('placeholder', 0)
mainElement.append(xInput)

const yInput = document.createElement('input')
yInput.type = 'number'
yInput.placeholder = '0'
mainElement.append(yInput)

const addButton = document.createElement('button')
mainElement.append(addButton)
addButton.append('ADD')
addButton.addEventListener('click', function() {
    const x = Number(xInput.value)
    const y = Number(yInput.value)
    const addResult = calculator(x, y, add)
    mainElement.append(addResult + ', ')
})


const multiplyButton = document.createElement('button')
mainElement.append(multiplyButton)
multiplyButton.append('MULTIPLY')
multiplyButton.addEventListener('click', function() {
    const x = Number(xInput.value)
    const y = Number(yInput.value)
    const multiplyResult = calculator(x, y, multiply)
    mainElement.append(multiplyResult + ', ')
})

const divideButton = document.createElement('button')
mainElement.append(divideButton)
divideButton.append('DIVIDE')
divideButton.addEventListener('click', function() {
    const x = Number(xInput.value)
    const y = Number(yInput.value)
    const divideResult = calculator(x, y, divide)
    mainElement.append(divideResult + ', ')
})