var operacao = prompt("Quem é esse pokemon?\n Digite o número conforme a correspondecia do nome\n 1-É a Eevee?\n 2- É a Chicoryta?\n 3- É o Bulbassauro?\n 4- É o Squirtle?")

if(operacao == 1){
  document.write("<h2>Não, esse pokemon não é a Eevee</h2>")
}else if(operacao == 2){
  document.write("<h2>Não, esse pokemon não é a Chicoryta</h2>")
}else if(operacao == 3){
  document.write("<h2>Sim! Você é um verdadeiro mestre pokemon!</h2>")
}else if(operacao == 4){
  document.write("<h2>Não, esse não é o squirtle!</h2>")
}else{
  document.write("<h2>Número inválido!</h2>")
}
