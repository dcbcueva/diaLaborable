const inputDia = document.getElementById("dia")
const inputMes = document.getElementById("mes")
const inputAño = document.getElementById("año")
const inputRes = document.getElementById("dma")

const buttonCalc = document.getElementById("calc")

const dias = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sabado"];
const diaLaborable = (diaSemana) => { 
    if (diaSemana>=1&&diaSemana<=5) return"día laborable"
    else return "fin de semana"
} 

const dia = () => { 
    const di = new Date(inputAño.value, inputMes.value - 1, inputDia.value)
    const diaSemana = di.getDay()
    inputRes.value = `${dias[diaSemana]}, ${diaLaborable(diaSemana)}`
}

const operacionDia = event => {
    event.preventDefault()
    inputDia.value&&inputMes.value&&inputAño.value ? dia() : alert("Verifica los datos") 
}

buttonCalc.addEventListener("click", operacionDia)