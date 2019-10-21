//buscando o botao
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
    //esta função previne o compotamento padrao pra configurar o que quer fazer depois de clicar
    event.preventDefault();

    //capturar os dados do form
    var form = document.querySelector("#form-adiciona");

    //chamando a função
    var paciente = obtemInfosForm(form);

    adicionaPaciente(paciente);

    //trazendo a mensagem de erro
    var erros = validaPaciente(paciente);
    console.log(erros)
    //validando o paciente e mostrando o erro
    if (erros.length > 0) {
       // retornando a mensagem de erro 
        var mensagemErro = document.querySelector("#mensagemErro")
        exibeMensagensErro(erros);
        //assim ele sai da função ennão vai add na tabela abaixo
        return;
    }


    //apos add um novo paciente limpar o form
    form.reset();

     //limpar as mensagens de erro após colocar os dados válidos
     var mensagemErro = document.querySelector("#mensagensErro");
     mensagemErro.innerHTML = "";

});


function obtemInfosForm(form) {

    //criando um objeto
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        //passando o imc pela função
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;


    /*
     //capturando o name do input e o valor de cada campo do form - value
     var nome = form.nome.value;
     var peso = form.peso.value;
     var altura = form.altura.value;
     var gordura = form.gordura.value;
     */
}

function montaTr(paciente) {

    //criando uma linha tr na tabela
    var pacienteTr = document.createElement("tr");

    //adicionando uma classe na tr
    pacienteTr.classList.add("paciente");

    /*
    //chamando a função e add o dado e a classe
    var nomeTd = montaTd(paciente.nome, "info-nome");
    var pesoTd = montaTd(paciente.peso, "info-peso"); 
    var alturaTd = montaTd(paciente.altura, "info-altura"); 
    var gorduraTd = montaTd(paciente.gordura, "info-gordura"); 
    var imcTd = montaTd(paciente.imc, "info-imc");
    */



    //funcao appendChild adicionar como filho da tr as tds filhas
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));


    return pacienteTr;

}

function montaTd(dado, classe) {
    //criando a td
    var td = document.createElement("td");
    //passando o dado na tg
    td.textContent = dado;
    //add classe
    td.classList.add(classe);

    return td;


    /*
   //criando as tds
   var nomeTd = document.createElement("td");
   //adicionando uma classe na td
   nomeTd.classList.add("info-nome");

   var pesoTd = document.createElement("td");
    //adicionando uma classe na td
   pesoTd.classList.add("info-peso");

   var alturaTd = document.createElement("td");
    //adicionando uma classe na td
   alturaTd.classList.add("info-altura");

   var gorduraTd = document.createElement("td");
    //adicionando uma classe na td
   gorduraTd.classList.add("info-gordura");

   var imcTd = document.createElement("td");
    //adicionando uma classe na td
   imcTd.classList.add("info-imc");

   //colocando o conteúdo dentro da td pela varaivel nome 
   nomeTd.textContent = paciente.nome;
   pesoTd.textContent = paciente.peso;
   alturaTd.textContent = paciente.altura;
   gorduraTd.textContent = paciente.gordura;
   imcTd.textContent = paciente.imc;
   */


}

//validando no form altura e peso
function validaPaciente(paciente) {
    //declarando um array de erros
    var erros = [];

    if (!validaPeso(paciente.peso))  erros.push("Peso é inválido");
    if(!validaAltura(paciente.altura)) erros.push("Altura é inválida");
    if(paciente.nome.length === 0 ) erros.push("Nome inválido");
    if(paciente.gordura.length === 0) erros.push("Gordura inválida");
    if(paciente.peso.length === 0) erros.push("Peso inválida");
    if(paciente.altura.length === 0) erros.push("Altura inválida")
    
    return erros;

}

//add paciente na tabela
function adicionaPaciente(paciente){
    //retorna uma tr montada
    var pacienteTr = montaTr(paciente);
    //pegar o tr criado e colocar dentro do tbody
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

//funcao para trazer cada mensagem de erro
function exibeMensagensErro(erros){
    var ul = document.querySelector("#mensagensErro");

    //esvaziar a ul depois de mostrar msgm de erro
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });

}