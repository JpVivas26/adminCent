const salario = document.getElementById('salario')
const mes = document.getElementById(`mes`)
const precio = document.getElementById(`precio`)
const pago = document.getElementById('pago')
const servicio = document.getElementById(`servicio`)
const despensa = document.getElementById(`despensa`)
const personal = document.getElementById(`personal`)
const extra = document.getElementById(`extra`)

// pendiente la constante de resultado
let resultado = (servicio+despensa+personal+extra) - salario 
let pago = mes/precio
