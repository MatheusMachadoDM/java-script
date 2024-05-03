var agora = new Date()
var horas = agora.getHours()

if(horas == 1){
    console.log(`Agora é ${horas} HR`)
    console.log('Boa Noite!')
    
}else{
    console.log(`Agora são ${horas} HRs`)
    
    if(horas > 23.99 || horas < 0){
        console.log('Esse horário não existe!')
    }else if(horas < 13 && horas > 4){
        console.log('Bom Dia!')
    }else if(horas < 17 && horas > 4){
        console.log('Boa Tarde!')
    }else{
        console.log('Boa Noite!')
    }
}