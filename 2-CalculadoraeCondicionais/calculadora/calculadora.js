var valor1 = parseInt(prompt(`Digite o primeiro valor:`))
var valor2 = parseInt(prompt(`Digite o segundo valor:`))

var operacao = prompt("Digite 1 para fazer uma divisão, digite 2 para fazer uma subtração, digite 3 para fazer um soma e digite 4 para fazer uma multiplicação!")

if(operacao == 1){
  var resultado = valor1/valor2;
  document.write("<h2>" + valor1 + " / " + valor2 + " = " +   resultado + "</h2>" )
}else if(operacao == 2){
  var resultado = valor1-valor2;
  document.write("<h2>" + valor1 + " - " + valor2 + " = " +   resultado + "</h2>" )
}else if(operacao == 3){
  var resultado = valor1+valor2;
  document.write("<h2>" + valor1 + " + " + valor2 + " = " +   resultado + "</h2>" )
}else if(operacao == 4){
  var resultado = valor1*valor2;
  document.write("<h2>" + valor1 + " x " + valor2 + " = " +   resultado + "</h2>" )
}else{
  document.write("<h2>Valor inválido</h2>");
}
