var num = document.getElementById('inumero')
var sR = document.getElementById('selResultado')
var res = document.querySelector('div')

var n =[]

function add(){

    if(num.value.length == 0 || num.value > 100 || num.value < 1){
        window.alert('[ERRO] Você não cumpriu alguma das condições!')
    }else{
        n.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Adicionado o número ${num.value}`
        sR.appendChild(item)
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    //Quantidade de números dentro da array
    res.innerHTML = `Ao todo, temos ${n.length} números cadastrados! <br>`
  
    //Maior valor dentro da array
    var maior = 0
    for(var c = 0; c < n.length; c++){
        if(n[c] > maior){
            maior = n[c]
        }
    }
    res.innerHTML += `O maior número é ${maior}!`

    //Menor valor
}

addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        add()
    }
})