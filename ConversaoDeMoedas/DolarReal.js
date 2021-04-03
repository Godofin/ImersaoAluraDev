var valorDolarTxt = prompt("Qual o valor em dolar que você quer converter?");

var valorDolarNb = parseFloat(valorDolarTxt);

var valorRealTxt = valorDolarNb * 5.5;
var valorRealNb = valorRealTxt.toFixed(2);

alert(valorRealNb);
