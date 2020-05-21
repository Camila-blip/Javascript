/* ver tipo se é string ou number ou ate mesmo uma função
console.log(typeof contante)*/

let Salario = 1500
let Vale_transporte = 250
let Vale_alimentacao = 336
let extra = 400
''
//para saber se um número é inteiro ou não (number.isInteger(), 
// toFixed(2)     essa variavel define a quantidade de casas do número que irá exiber)
const total = Salario + Vale_transporte + Vale_alimentacao
const liquido = total % extra
console.log(total)
