//Criando posicionamentos randomicos
var vidas = 1

function posicaoRandomica () {


    //remover o mosquito anterior caso tenha
    //remoção automatica do mosquito 
    //afetar os pontos de vida
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if (vidas > 3){
            window.location.href="gameover.html"
        }else {
            document.getElementById('v' + vidas).src='/image/coracao_vazio.png'
            
            vidas++
        } 
    }
    

    var posicaoX = Math.floor(Math.random() * largura) - 90 //Math.random cria valores aleatorios cujos os limitadores é o tamanho do windows definidos no script jogo
    var posicaoY = Math.floor(Math.random() * altura) - 90 //Math.floor arredonda os valores do Math.random, arrendondamento pra baixo
    //isso que vai definir aonde os mosquitos vão aparecer

    //controle para que os mosquitos não ultrapassem o estabelecido e sumam 
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX , posicaoY)

    //criar o elemento HTML
    var mosquito = document.createElement('img')
    //adicionando o aquivo dentro da tag img
    mosquito.src = '/image/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio() //adicionando os style aos elementos HTML criados
    mosquito.style.left = posicaoX + 'px' //adcionando as cordenados randomicas em px 
    mosquito.style.top = posicaoY +'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove()
    }
    //adicionando um filho ao body
    document.body.appendChild(mosquito)
    
    ladoAleatorio()
}