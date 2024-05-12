function contar (){
    var inicio = document.getElementById('iinicio')
    var fim = document.getElementById('ifim')
    var passo = document.getElementById('ipasso')
    var res = document.getElementById('resultado')
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados')
    }else{
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0)
            {
                window.alert('Passo inválido! Considerando passo "1"')
                p = 1
            }
            if(i < f){
                for(var c = i; c <= f; c += p){
                res.innerHTML = res.innerHTML + ` ${c} `
                }
            }else{
                for(var c = i; c >= f; c -= p){
                    res.innerHTML = res.innerHTML + ` ${c} `
                }
            }
        }
    }