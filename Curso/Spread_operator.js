//Serve para juntar as informações
let primeiros = [1,2,3];
let numeros = [...primeiros,4,5,6];

let pessoa = {
  nome: "Camila",
  idade: 20,
  cargo: "Programadora"
};

let novaPessoa = {
  ...pessoa,
  anoAtual: 250, 
  cidade: "Carapicuiba"
};
