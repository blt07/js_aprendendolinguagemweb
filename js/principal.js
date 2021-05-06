
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector(".paciente");
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
    
}

if(altura <= 0 || altura >= 3){
    alturaEhValido = false
    tdImc.textContent = "Altura Inválida!";
}

if(alturaEhValido != false && pesoEhValido!=false){
    var imc = peso/(Math.pow(altura,2));
    tdImc.textContent = imc;
}



console.log(imc);


