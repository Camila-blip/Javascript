let aprovados = new Array('Bia', 'Carlos', 'Ana')

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[1])
aprovados.push('Camila')
console.log(aprovados[3])
// sort() ordena o array
aprovados.sort()

const reprovados = ['Agatha','Aldo','Daniel','Raquel']
reprovados.forEach(function(nome,indice){
        console.log(`${indice + 1} ${nome}`)

})

Array.prototype.forEach2 = function(callback){
    for( let i = 0; i < this.length; i++){
        callback(this[i, i, this])
    }
}