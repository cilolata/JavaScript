//Usando API com AJAX - requisição de modo assincrona

var botaoAdicionar = document.querySelector("#buscar-pacientes")
botaoAdicionar.addEventListener("click", function(){
    
    //HMLHttp é um objeto responsavel para fazer requisições
    var xhr = new XMLHttpRequest();
    
    //abrindo a requisição
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");


    //evento que escuta o xhr
    xhr.addEventListener("load", function(){
        if(xhr.status == 200){
            erroAjax.classList.add("invisivel")
            var resposta = xhr.responseText;
            //typeof operador que responde o tipo
            //console.log(typeof resposta)
            
            //transformar o json e devolve um obj javaScript
            var pacientes = JSON.parse(resposta);
    
            pacientes.forEach(function(paciente) {
                //add o paciente na tabela - pela função que está no form
                adicionaPaciente(paciente);
                
            });
        } else {
            console.log(xhr.status)
            console.log(xhr.responseText)
            erroAjax.classList.remove("invisivel");
        }
    });

    //metodo para enviar a requisição
    xhr.send()
});
