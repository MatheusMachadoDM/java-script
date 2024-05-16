var num = document.getElementById('inumero')
var sR = document.getElementById('selResultado')
var res = document.querySelector('div')

var n =[]

function add(){

    if(num.value.length == 0 || num.value > 100 || num.value < 0){
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

    res.innerHTML = `Ao todo, temos ${n.length} números cadastrados! <br>`
    res.innerHTML += `${n.}`
}

addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        add()
    }
})