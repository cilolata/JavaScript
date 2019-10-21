//peagando o conteúdo do input
var campoFiltro = document.querySelector("#filtrarTabela");

campoFiltro.addEventListener("input", function(){
    //o value é do campo input e o this refere-se ao campoFiltro
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");
    if(this.value.length > 0 ){
        for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent;
        //expressao regular que faz uma busca por como e qual/ o i representa a busca pode ser com minuscula e maiuscula
        var expressao = new RegExp(this.value, "i");
        //aqui nos vamos testar se o que eu digitar tem alguma coisa do nome que eu digitar
        if(!expressao.test(nome)){
            paciente.classList.add("invisivel");
        }else{
            paciente.classList.remove("invisivel");
        }
    }
    
}else{
    for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
        paciente.classList.remove("invisivel");
        
    }
}


});