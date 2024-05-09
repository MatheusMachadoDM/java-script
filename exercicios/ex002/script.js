function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('idata-nascimento')
    var res = document.querySelector('div#resultado')

    if(fano.value.length == 0 || fano.value > ano || fano.value < 1900){
        window.alert('[ERRO] Data de nascimento inválida!!')
    }else{
        var fsexo = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        if(fsexo[0].checked){
            genero = 'Homem'
        }else{
            genero = 'Mulher'
        }
        res.innerHTML = `<p>Detectamos ${genero} de ${idade} anos!</p>`
    }
}