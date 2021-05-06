
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector(".paciente");
var tdPeso = paciente.querySelector(".info-peso");

var peso = tdPeso.textContent;
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;
var tdImc = paciente.querySelector(".info-imc");

var imc = peso/(Math.pow(altura,2));

tdImc.textContent = imc;



console.log(imc);


