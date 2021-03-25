// ... junta todos os parametros passados
function total (...numeros)  {
    let total = 0
    numeros.forEach(n => total += n )
    return total
}
console.log(total(2,3,4,5))

// usar spread com objeto ---  espalha os objetos
const funcionario ={ nome: 'Maria',salario:12345.99}
const clone ={ arivo: true, ...funcionario}
console.log(clone)

//usar spread com array
const grupoA = ['Joao','Pedro', 'Gloria']
const grupoFinal = ['Maria',...grupoA,'Rafaela', 'Jheni']
console.log(grupoFinal)