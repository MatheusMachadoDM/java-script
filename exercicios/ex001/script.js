function carregar(){
    var data = new Date()
    var hora = data.getHours()
    var msg = document.getElementById('mensagem')
    msg.innerHTML = `Agora são ${hora} horas.`

    if( hora > 4 && hora < 13){
        titulo.innerHTML = 'Bom Dia!'
        document.getElementById('foto').style.backgroundImage = 'url(imagens/manha.jpg)'
        document.body.style.backgroundColor = '#adadad'
    }else if(hora > 4 && hora < 19){
        titulo.innerHTML = 'Boa Tarde!'
        document.getElementById('foto').style.backgroundImage = 'url(imagens/tarde.jpg)'
        document.body.style.backgroundColor = '#dba675'
    }else{
        titulo.innerHTML = 'Boa Noite!'
        document.getElementById('foto').style.backgroundImage = 'url(imagens/noite.jpg)'
        document.body.style.backgroundColor = '#414568'
    }
}