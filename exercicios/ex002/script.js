function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('idata-nascimento')
    var res = document.querySelector('div#resultado>p')
    var foto = document.getElementById('foto')

    if(fano.value.length == 0 || fano.value > ano || fano.value < 1900){
        window.alert('[ERRO] Data de nascimento inválida!!')
    }else{
        var fsexo = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        foto.style.display = "block"

        if(fsexo[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
            foto.src = 'imagens/bebe-M.jpg'
            }else if(idade < 22){
                foto.src = 'imagens/jovem-M.jpg'
            }else if(idade < 55){
                foto.src = 'imagens/adulto-M.jpg'
            }else{
                foto.src = 'imagens/idoso-M.jpg'
            }
        }else{
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                foto.src = 'imagens/bebe-F.jpg'
                }else if(idade < 22){
                    foto.src = 'imagens/jovem-F.jpg'
                }else if(idade < 55){
                    foto.src = 'imagens/adulto-F.jpg'
                }else{
                    foto.src = 'imagens/idoso-F.jpg'
                }
        }
        res.innerHTML = `Detectamos ${genero} de ${idade} anos!`
    }
}