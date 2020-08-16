// variáveis do scope global 
var altura = 0
var largura = 0
var tempo = 15

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

//tempo para cada nivel selecionado 
if (nivel === 'normal') {
	criaMosquitoTempo = 1500
}else if (nivel === 'dificil'){
	criaMosquitoTempo = 1000
}else if (nivel === 'chucknorris'){
	criaMosquitoTempo = 750
}


function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight//identificando a altura valida do browser
	largura = window.innerWidth//identificando a largura valida do browser

	console.log(largura, altura)
}

var cronometro = setInterval(function (){
	tempo -= 1
	if (tempo < 0){
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href = 'vitoria.html'
	}else {
		document.getElementById('cronometro').innerHTML = tempo //innerHtml o que vai entre as tags
	}
},1000)

ajustaTamanhoPalcoJogo()

