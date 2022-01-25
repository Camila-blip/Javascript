function adicionar(...numeros){
    let total = numeros.reduce(function(total, proximo){
      return total + proximo;
    });
  
  //reduzindo a função
  let total = numeros.reduce((total, proximo) =>{
      return total + proximo;
   });
}

adicionar(1,2,3,4,5)
