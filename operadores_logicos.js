// == igual a um valor === se os tipos sao igual se sao numeros ou strings etc, != diferente
// ou em javascript || && e != diferente

function compras(trabalho1, trabalho2){
    const comprarsorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTv32 = trabalho1 != trabalho2
    const mantersaudavel = !comprarsorvete

    return{comprarsorvete,comprarTv50,comprarTv32,mantersaudavel}
}

console.log(compras(true,false))
console.log(compras(true,true))
console.log(compras(false,true))
console.log(compras(false,false))
