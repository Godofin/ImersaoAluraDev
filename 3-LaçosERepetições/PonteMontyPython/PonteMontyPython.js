var numerosecreto = parseInt(Math.random() * 10)+1
var tentativa = 3

alert("Parabéns cavaleiro, você encontrou o guardião da ponte da morte, siga suas instruções para cruzar a ponte")
alert("-Guardião da ponte:\nPare, quem quiser atravessar a ponte da morte, deverá acertar o número\nVocê terá apenas 3 tentativas para acertar o número de 0 a 10, para chegar ao outro lado com cuidado")

while(tentativa > 0){
  
  var chute = parseInt(prompt("Digite um numero entre 0 e 10"))
  
  if(numerosecreto == chute){
      alert("Acertou!")
      document.write("<h2>Bom, ótimo pode passar!</h2>")
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
  document.write("<h2>AHHHHHHHHHHHHH!</h2>")
}
