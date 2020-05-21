const primeiroOBJ = {
    nome: `Camila Moura`,
    idade: 18,
    nome_pai: `Davino`
}

//dinamicamente posso passar valor para um objeto
primeiroOBJ.faculdade = `Estacio` 

// se quiser tirar o atributo de um objeto
delete primeiroOBJ.faculdade


const segundoOBJ = {
    play3: `Quando vai chegar?`,
    vans: `comprei dois sapatos`,
    mercado_livre: `so falta chegar`,
    enrolacao: `estou tao empolgada`,
    sera_se: `espero que os dois cheguem juntos`,
    se_nao: `irei pirar aaaaaaaaaaaaaaaaa` 
}

segundoOBJ.esto_aprendendo = `so progresso realmente`
segundoOBJ.ate_onde = `realmente eu irei muito longe na vida ainda`
segundoOBJ.ninguem = `ira me impedir ou me jogar pra baixo`
delete segundoOBJ.ninguem
//typeof diz o tipo que é, se é uma função obj Number ou até mesmo string etc

function vamosla(){
  cont saudacao = `funcao`
  return saudacao
}

function agorathis(nome){
    this.nome = nome
}

const primeiro = new Object(`primeiro`)
const segundo = new object(`segundo`)
const terceiro = new object(`por ai vai`)

