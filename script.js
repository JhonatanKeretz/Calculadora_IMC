

const calcular = document.getElementById('calcular');


function imc() {
    
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
 
    // validação

    if(nome !== '' && altura !== '' && peso !== ''){
       const valorIMC = (peso / (altura * altura)).toFixed(2);

       let classificacao = '';

       if(valorIMC < 18.5){
        classificacao = 'Você está abaixo do peso';
       }else if(valorIMC < 25){ 
        classificacao = "Você está com peso ideal"
       } else if(valorIMC < 30 ){
        classificacao = "Você está um pouco acima do peso"
       }else if(valorIMC < 35) {
        classificacao = "Você está com obesidade grau I";
       }else if(valorIMC < 40) {
        classificacao = "Você está com obesidade grau II";
       }
        else {
            classificacao = "Você está com obesidade grau III. CUIDADO!!"
        }
       
       resultado.textContent = `${nome} seu IMC é ${valorIMC} e está com a ${classificacao}`;
    }else {
        resultado.textContent = 'Preencha todos os campos!!'
    }

}

calcular.addEventListener('click', imc)