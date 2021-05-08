
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");

    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValido = true;

    if(peso <= 0 || peso >= 1000){
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido!";
        paciente.classList.add("paciente-invalido");
    
    }

    if(altura <= 0 || altura >= 3){
        alturaEhValido = false
        tdImc.textContent = "Altura Inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if(alturaEhValido != false && pesoEhValido!=false){
        var imc = peso/(Math.pow(altura,2));
        tdImc.textContent = imc.toFixed(2);
    }

}

titulo.addEventListener("click",mostraMensagem); // Inserindo clique do botão

function mostraMensagem(){
    alert("Olá, eu fui clicado!");
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){ // Exemplo de função fantasma
    event.preventDefault(); // Limpa configurções do clique do botão

    var form = document.querySelector("#form-adiciona");
    var nome = form.nome.value;
    var altura = form.altura.value;   // Capturando valores do form
    var peso = form.peso.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr"); // Criando uma tr

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");  // Criando as relativas td's
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;         // Atribuindo o valor de cada variável a sua respectiva td's
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);   // Indexando as variáveis na Tr
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");   // Indexando os valores a tabela de pacientes.
    tabela.appendChild(pacienteTr);

}
);

