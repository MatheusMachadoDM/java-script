var idade = 12

console.log(`Você tem ${idade} anos.`)

if(idade >= 18 && idade < 65){
    console.log('Obrigado a votar!')
}else if(idade < 16){ 
    console.log('Não pode votar!')
}else{
    console.log('Voto opcional!')
}