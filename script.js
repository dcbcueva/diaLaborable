const inputA = document.getElementById("num1")
const inputB = document.getElementById("num2")
const inputR = document.getElementById("resp")

const buttonSuma = document.getElementById("suma")
const buttonRest = document.getElementById("rest")
const buttonMult = document.getElementById("mult")
const buttonDivi = document.getElementById("divi")

const suma = (a, b) => a + b
const rest = (a, b) => a - b
const mult = (a, b) => a * b
const divi = (a, b) => a / b

const operacionSuma = () => {
    const x = parseInt(inputA.value)
    const y = parseInt(inputB.value)
    inputR.value = suma(x,y)
}

const operacionRest = () => {
    const x = parseInt(inputA.value)
    const y = parseInt(inputB.value)
    inputR.value = rest(x,y)
}

const operacionMult = () => {
    const x = parseInt(inputA.value)
    const y = parseInt(inputB.value)
    inputR.value = mult(x,y)
}

const operacionDivi = () => {
    const x = parseInt(inputA.value)
    const y = parseInt(inputB.value)
    inputR.value = divi(x,y)
}

buttonSuma.addEventListener("click", operacionSuma)
buttonRest.addEventListener("click", operacionRest)
buttonMult.addEventListener("click", operacionMult)
buttonDivi.addEventListener("click", operacionDivi)