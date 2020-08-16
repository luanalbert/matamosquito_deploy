function tamanhoAleatorio (){
    //produzir números aleatórios de 0 a 1
    //nesse caso ao multiplicar por 3 esses números aleatórios vão chegar bem proximo a 3
    var classe = Math.floor(Math.random() * 3)
    //as classes css serão adicionadas por switch
    switch (classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}