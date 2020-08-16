//mudar a exibição dos mosquitos 
function ladoAleatorio (){
    // os resultados randomicos serão entre 0 e 1 limitando-se a 2 possibilidades por isso a multiplicação por 2
    var classe = Math.floor(Math.random() * 2)
    //as classes css serão adicionadas por switch
    switch (classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}