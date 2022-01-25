function minhaLista(...nomes){
    console.log(nomes)
}

minhaLista("Camila", "Lucas", "Joao");

function cadastrar(usuarios, ...novosusuarios){
    let totalusuarios = [
        ...usuarios,
    ...novosUsuarios
    ]
}
let usuarios = ["Camila", "Joao"];
let novosUsuarios = cadastrar(usuarios, "Henrique", "Lucas");
