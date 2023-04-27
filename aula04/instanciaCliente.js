const countA = require('./instanciaUnica')
const countB = require('./instanciaUnica')

const countC = require('./instanciaNova')()
const countD = require('./instanciaNova')()

countA.inc()
countA.inc()
console.log("Contador A:",countA.valor)
console.log("Contador B:",countB.valor)

countC.inc()
countC.inc()
console.log("Contador C:",countC.valor)
console.log("Contador D:",countD.valor)
