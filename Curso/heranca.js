const ferrai = {
    modelo: 'f40',
    modelo1: 'volvo',
    velmax: 324
}

const volvo ={
    modelo: 'v40',
    velmax: 200
}

console.log (ferrai.__proto__)

const pai = {nome: 'Pedro', corCabelo: 'preto'}
const filha1 = Object.create(pai)
filha1.nome = 'ana'


const filha2 = Object.create(pai,
    {nome: {value: 'Bia', writable: false, enumerable:true}
})

//mostra os objetos 
console.log(Object.keys(filha2))

function Meuobjeto(){}
const obj1 = new Meuobjeto

const obj2 = new Meuobjeto

string.prototype.reverse = function(){
    return this.split('').reverse().join('')
}

Array.prototype.first = function(){
    return this[0]
}
