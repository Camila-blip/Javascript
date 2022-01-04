function acao(){
  document.write("executando...<br/>");
}
//São passados 2 parametros 1 função, 2 o tempo
//Executa de tempo em tempo
setInterval(acao, 1000);

//vai esperar o tempo e logo após ele para
setTimeout(acao, 3000);

// Parar um setInterval
var intervalo = setInterval(acao, 2000);
clearInterval(intervalo);
