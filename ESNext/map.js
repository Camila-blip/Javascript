//forEach lista todos elemtentos de um array
const tecnologia = new Map()
tecnologia.set('react',{framework:false})
tecnologia.set('angular',{framework:true})

console.log(tecnologia.react)
console.log(tecnologia.get('react').framework)

// em alguns casos e interessante usar get