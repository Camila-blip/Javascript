function rand({min = 0, max = 31}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
//Math - matematica - random aleatorio
//A função Math.floor(x) retorna o menor número inteiro dentre o número "x".
// para arredondar para cima é Math.ceil()
const obj = { max: 31, min: 1}
console.log(rand(obj))

//array
function randd([min = 0, max = 31]){
    if (min > max) [min, max] = [max, min]
        const valor = Math.random() * (max - min) + min
        return Math.floor(valor)
}
console.log(randd([25]))
