const inputDia = document.getElementById("dia")
const inputMes = document.getElementById("mes")
const inputAño = document.getElementById("año")
const inputRes = document.getElementById("dma")

const buttonCalc = document.getElementById("calc")

/*
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = Date(`${b},${a},${c}`) => weekday[d.getDay()] 
const dia = d.getDay()
*/
//const di = (a, b, c) => "b" + "a" + "c".getDay()
const di = (a,b,c) => Date(`${b} ${a} ${c}`) //=> di.getDay()
const rest = (a, b) => a - b
const mult = (a, b) => a * b
const divi = (a, b) => a / b

const operacionDia = () => {
    inputRes.value = di(inputDia.value,inputMes.value,inputAño.value)
}

buttonCalc.addEventListener("click", operacionDia)
