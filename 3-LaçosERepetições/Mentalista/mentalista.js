var numerosecreto = parseInt(Math.random() * 10)
var tentativa = 3
console.log(numerosecreto)

while(tentativa > 0){
  
  var chute = parseInt(prompt("Digite um numero entre 0 e 10"))
  
  if(numerosecreto == chute){
      alert("Acertou!")
      break
  }else if( chute>numerosecreto){
      alert("O número secreto é menor")
      tentativa = tentativa-1;
  }else if(chute<numerosecreto){
      alert("O número secreto é maior")
      tentativa = tentativa-1;
  }
}
if(chute != numerosecreto){
  alert(`Que pena, você errou!, o número secreto era ${numerosecreto}`)
}
