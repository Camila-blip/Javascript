const segundoOBJ = {
    play3: `Quando vai chegar?`,
    vans: `comprei dois sapatos`,
    mercado_livre: `so falta chegar`,
    enrolacao: `estou tao empolgada`,
    endereco: {
        numero: 1000
    } 
}
// retirar informacoes que necessito do objeto
const {play3, vans } = segundoOBJ

//usar apelido em js
const {play3: p, vans: v} =segundoOBJ

// caso os parametro nao exista no objeto vai dar undefined porem posso definir como true
const {testando: t =  null , testandodenovo: td = true} = segundoOBJ


/*const {endereco{numero: nn,cep = null}} = segundoOBJ
console.log(nn,cep)*/
