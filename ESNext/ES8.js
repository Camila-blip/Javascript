//Object.values/Object.entries
//object.entries pega todos os objetos
//object.values pega os valores
//es8 da para criar funções diretos
const obj = {a: 1, b: 2,c:3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

const nome ='Carla'
const pessoa ={
    nome,
    ola(){
        return 'Oi gente'
    }
}
console.log(pessoa.nome,pessoa.ola())

class Animal{}

class Cachorro extends Animal{
    falar(){
        return 'Au AU'
    }
}


// para criar objetos atraves de uma class tem que usar a palavra new
console.log(new Cachorro().falar())