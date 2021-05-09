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