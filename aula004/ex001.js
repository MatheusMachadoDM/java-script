var contador = 1
var contador2 = 10


while(contador <= 10){
    console.log(`Passo ${contador}`)
    //contador = contador + 1
    //contador += 1
    contador++
}

do{
    console.log('Passo ' + contador2)
    contador2--
}while(contador2 >= 0)

for(var contador3 = 1; contador3 <=5; contador3++){
    console.log(`Passo ${contador3}`)
}