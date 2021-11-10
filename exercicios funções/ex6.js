// crie uma função calcula o imc, recebe altura e peso , testa com varios valores diferentes

function imc (peso, altura){
    let imc_resultado = peso /(altura * altura);
    console.log("PESO: " + peso + " ALTURA: "+ altura +" IMC = " + imc_resultado.toFixed(2));
    
}

imc(69.2,1.7);
imc(25,1.5);
imc(10,2.0);