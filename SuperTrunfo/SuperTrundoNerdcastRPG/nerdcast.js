var cartaDonAzaghal = {
    nome: "DON AZAGHAL",
    imagem: "https://cdna.artstation.com/p/assets/images/images/004/637/502/large/marcelo-silva-ncrpg3-azaghal-hex-lowres.jpg?1485197672",
    atributos: {
        ataque: 40,
        possessão: 0,
        magia: 90,
        
    }
}

var cartaWill = {
    nome: "William Faraday",
    imagem:"https://i.pinimg.com/originals/00/08/92/0008928bdd407b850c1d18fd0ac4d6fc.jpg",
    atributos: {
        ataque: 70,
        possessão: 90,
        magia: 85, 
      possessão: 0
    }
}

var cartaAbgail = {
    nome: "Enfermeira Abgail",
    imagem:"https://i.pinimg.com/236x/46/8c/88/468c884906b2f1374e86eca97c12e4f6.jpg",
    atributos: {
        ataque: 75,
        possessão: 55,
        magia: 35
    }
}

var cartaDr = {
    nome: "Dr. Johann Von Strauss",
    imagem:"https://cdna.artstation.com/p/assets/images/images/008/501/638/large/marcelo-silva-ncrpg3-von-strauss-anatomia.jpg?1513177636",
    atributos: {
        ataque: 80,
        possessão: 65,
        magia: 0
    }
}

var cartaEdmundo = {
    nome: "Thomas E. Faraday",
    imagem:"https://cdna.artstation.com/p/assets/images/images/004/637/498/large/marcelo-silva-ncrpg3-faraday-hex-lowres.jpg?1485197668",
    atributos: {
        ataque: 75,
        possessão: 15,
        magia: 50
    }
}

var cartaGiacomo = {
    nome: "Giacomo Di Monti",
    imagem:"https://cdnb.artstation.com/p/assets/images/images/004/637/507/large/marcelo-silva-ncrpg3-bufalo-hex-lowres.jpg?1485197682",
    atributos: {
        ataque: 95,
        possessão: 65,
        magia: 70
    }
}

var cartaStep = {
    nome: "Stephen H.P. Venkman",
    imagem:"https://cdna.artstation.com/p/assets/images/images/004/637/504/large/marcelo-silva-ncrpg3-venkman-hex-lowres.jpg?1485197677",
    atributos: {
        ataque: 95,
        possessão: 65,
        magia: 70
    }
}
var cartaBilly = {
    nome: "Billy Faraday - Super Trunfo",
    imagem:"https://s3-sa-east-1.amazonaws.com/cdn.br.catarse/uploads/reward/uploaded_image/228762/thumb_reward_reward-01.jpg",
    atributos: {
        ataque: 100,
        possessão: 100,
        magia: 100
    }
}

var cartaMaquina
var cartaJogador
var cartas = [cartaAbgail, cartaWill, cartaDonAzaghal, cartaDr, cartaEdmundo,cartaGiacomo, cartaStep, cartaBilly]
var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas(){
  var divQuantidadeCartas = document.getElementById("quantidade-cartas")
  var html = "Quantidade de cartas no jogo: " + cartas.length
  divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar(){
  var divPlacar = document.getElementById('placar')
  var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina"
  
  divPlacar.innerHTML = html
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)
    
    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
        pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }

    if(cartas.length == 0){
      alert("Fim de jogo!")
      if(pontosJogador>pontosMaquina){
        htmlResultado = '<p class="resultado-final">Venceu!</p>'
      }else if(pontosJogador<pontosMaquina){
        htmlResultado = '<p class="resultado-final">Perdeu!</p>'
      }else{
        htmlResultado = '<p class="resultado-final">Empatou</p>'
      }
    }else{
      document.getElementById("btnProximaRodada").disabled = false
    }
  
    divResultado.innerHTML = htmlResultado
    document.getElementById("btnJogar").disabled = true
    
    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeDeCartas()
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        console.log(atributo)
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada(){
  var divCartas = document.getElementById('cartas')
  
  divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div`
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
  document.getElementById('btnProximaRodada').disabled = true
  
  var divResultado = document.getElementById('resultado')
  divResultado.innerHTML = ""
}
