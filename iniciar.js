function iniciarJogo (){
    var nivel = document.getElementById('nivel').value

    if(nivel === '') {
        alert('Selecione um nivel para iniciar o jogo')
        return false
    }

    window.location.href = "app.html?" + nivel //isso não é convencional mais aqui vai servir
}
