//pegando todos os pacientes
var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

//colocar o evento no pai de todos as elementos e ai todos são afetados
//o event é um objeto que captura uma propriedade (com target) e diz quem foi clicado
tabela.addEventListener("dblclick", function(event){
 
//além de atingir as propriedades filhos , add tb css para a transição da retirada 
  event.target.parentNode.classList.add("fadeOut")

  //para dar tempo para aparecer a animação e remover a linha - a função setTimeOut
    setTimeout(function(){

        event.target.parentNode.remove();
    }, 500);

/*    
    //vamos clicar no evento alvo e pegar o pai de quem foi clicado
    var alvoEvento = event.target;
    var paiAlvo = alvoEvento.parentNode; // tr

    paiAlvo.remove();
    */
});


/*
//fazendo um foreach para pegar os pacientes
pacientes.forEach(function(paciente){
    //escutando o evento com double click e ai chamo uma função
    paciente.addEventListener("dblclick", function(){
        // o evento ao atribb que tá atrelado - ou seja - o paciente
        this.remove();

    
    });

});
*/