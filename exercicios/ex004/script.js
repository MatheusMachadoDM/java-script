function calcular(){
    var numero = document.getElementById('inumero')
    var sel = document.getElementById('seltabuada')
    var res = document.querySelector('div')
    
    if(numero.value.length == 0){
        window.alert('Digite um número para começar!')
    }else{
        res.style.display = 'inline-block'
        var num = Number(numero.value)
        var contador = 1
        sel.innerHTML = ''

        while (contador <= 10 ){
            var item = document.createElement('option')
            item.text = `${num} X ${contador} = ${num*contador}`
            item.value = `sel${contador}` //Linha usada para linguagens backend
            sel.appendChild(item)
            contador++
        }
    }
}
addEventListener("keydown", function(event){
    if (event.key === "Enter"){
        calcular()
    }
})
