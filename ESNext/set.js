//estrutura de conjunto, não aceita repetição e não é indexado
// se tives uma estrutura igual ele vai ignorar
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeira').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')
console.log(times)
console.log(times.size)
