var resultado = []

function parimpar(n){
    if(n % 2 == 0){
        return `${n} é um número par!`
    }
    else{
        return `${n} é um número impar!`
    }
}
resultado[0] = parimpar(123)
console.log(resultado[0])
//------------------
function soma(n1 = 0, n2 = 0){
    return n1 + n2
}
resultado[1] = soma(10, 10)
console.log(resultado[1])
//------------------
var v = function(x){
    return x*2
}
console.log(v(12))
//------------------
function fatorial(numero){
    let fat = 1
    for(let c = numero; c > 1; c--){
        fat *= c
    }
    return fat
}
var fat = fatorial(5)
console.log(`O fatorial é de ${fat}`)
//------------------
function fatorial1(numero){
    if(numero == 1){
        return 1
    }else{
        return numero * fatorial(numero - 1)
    }
}
console.log(fatorial1(5))