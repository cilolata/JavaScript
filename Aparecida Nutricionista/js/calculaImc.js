//trocando o conteúdo do meu título
var titulo = document.querySelector('.titulo'); 
titulo.textContent = "Aparecida Nutricionista";

//selecionando a class paciente da linha da tabela
var pacientes = document.querySelectorAll(".paciente"); 

//fazendo um for para modificar o texto dentro da td
for(var i = 0; i < pacientes.length ; i++){

    var paciente = pacientes[i];
    
    //pegando a class dentro da td
    var tdPeso = paciente.querySelector(".info-peso");
    //modificando o texto dentro da td
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent
    
    var tdImc = paciente.querySelector(".info-imc");
    
    //validando os dados para exibir
    var pesoValido = validaPeso(peso); //true ou false
    var alturaValida = validaAltura(altura);
    
    if(!pesoValido){
        pesoValido = false;
        tdPeso.textContent = "Peso Inválido";
        //add uma nova classe
        paciente.classList.add("paciente-invalido");
        
    }
    
    if(!alturaValida){
        alturaValida = false;  
        tdAltura.textContent = "Altura Inválida";
        paciente.classList.add("paciente-invalido");
    
    }
    
    if(alturaValida && pesoValido){
        var imc = calculaImc(peso, altura)
        //retornando o valor e mostrando apenas com 2 casas decimais
        tdImc.textContent = imc;
       
    }
    
    
}

//validando peso e altura
function validaPeso(peso){
    if(peso >= 0  && peso < 1000){
        return true;
    } else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.0){
        return true;
    }else{
        return false;
    }

}

//criando uma função para reutilizar em vários outros lugares
function calculaImc(peso, altura){
    var imc = 0

    imc = peso / (altura * altura);
    return imc.toFixed(2);
}




