// Cookies -  localStorage salva localmente - se caso fechar e abrir o navegador vai continuar os dados salvos.
// sessionStorage - funciona quando o navegador está aberto - quando fecha perde os dados.

localStorage.setItem("nome", "Matheus");
localStorage.getItem("nome");

//Remove
localStorage.removeItem("nome");

//Jeito mais prático
localStorage.nome = "Matheus";
localStorage.nome;

var nome = '';
if(typeof localStorage.nome == 'undefined'){
  localStorage.nome = prompt("Digite seu nome");
};

nome = localStorage.nome;

localStorage.lista = ["Matheus, 23];
localStorage.lista;
                      
//utilizar Session
sessionStorage.nome;
