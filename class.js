class lancamento{
    constructor(nome = 'Generico ', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

//O push()método adiciona um novo elemento a uma matriz (no final):
class ciclofinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    addlancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }
    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}
const  salario = new lancamento('salario',45000)
const conta_luz = new lancamento('Luz', -220)
const contas = new ciclofinanceiro(6,2018)
