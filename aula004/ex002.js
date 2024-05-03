let num = [3, 4, 1, 2, 9, 6, 7]
num.push(0) //Adiciona um valor a ultima posição
num.sort() //Coloca os valores em ordem crescente
console.log('posição: ' + num.indexOf(9)) //.indexOf mostra qual a posicão do valor selecionado


console.log(`O vetor tem ${num.length} posições! E os valores são:` + num) //.length mostra quantos valores o vetor tem
console.log(`O primeiro valor é o ${num[0]}`)
console.log(`O segundo valor é o ${num[1]}`)

for(var pos = 0; pos < num.length; pos ++ ){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}