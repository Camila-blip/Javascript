const porta = 3003 
const express =  require('express')
const app = express()
const bancodedados = require('./bancodedados')
const bodyparser = require('body-parser')

//urlencoded é o  tipo da requisição que é enviado
app.use(bodyparser.urlencoded({ extended: true}))
// requisicao = req, resposta = res o que envia e o send
// use pega qualquer nome da url
app.get('/produtos', (req, res, next) =>{
   // res.send({ nome: 'Notebook', preco: 123.45}) // converte para JSON automaticamente
   res.send(bancodedados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) =>{
    res.send(bancodedados.getProduto(req.params.id))
 })

 app.post('/produtos', (req, res, next) =>{
    const produto = bancodedados.salvarProduto({
        Nome: req.body.Nome,
        Preco: req.body.Preco
    })
    res.send(produto)
 })

 //put geralmente altera os dados
 app.put('/produtos', (req, res, next) =>{
    const produto = bancodedados.salvarProduto({
        Nome: req.body.Nome,
        Preco: req.body.Preco
    })
    res.send(produto)
 })

app.listen(porta, () =>{
    console.log(`Servidor  executando na porta ${porta}.`)
})

//http://localhost:3003/produtos
//npm i --save body-parser@1.18.2 -E //entrega o corpo do json
