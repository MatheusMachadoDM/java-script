var n =[]

function add(){
    var num = document.getElementById('inumero')
    var sR = document.getElementById('selResultado')


    if(num.value.length == 0 || num.value > 100 || num.value < 0){
        window.alert('[ERRO] Você não cumpriu alguma das condições!')
    }else{
        
        n.push = Number(num.value)
        var item = document.createElement('option')
        item.text = `Adicionado o número ${n.push}`
        sR.appendChild(item)
    }
}

function finalizar(){
    var res = document.querySelector('div')

}

addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        add()
    }
})