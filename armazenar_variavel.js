
function imprimirSoma (a, b){
    console.log( a + b)
}

imprimirSoma(3,3)
// return

function soma (a, b = 1){
    return a + b
}
console.log(soma(10))


// armazenando em uma variavel
const armazenando = function(a,c) {
    console.log(a + c)
}
armazenando(30,10)

// arrow
const imprimindo =  (a, b) => {
    return a + b
}
imprimindo(10, 12)
console.log(imprimindo(10, 12))
// forma reduzida de fazer uma fução mas essa significa q sera em uma unica linha
const imprimind = (a, b) => (a-b)
console.log(imprimind(0, 12))

//outro tipo de funcao
function teste(){
    var local = 123
}

console.log(teste())
