// Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

const prompt = require("prompt-sync")();

let peso = prompt("Digite seu peso: ");
let altura = prompt("Digite sua altura: ");

let imc = peso / (altura**2);

function calculoImc(imc) {
    if(imc > 0 && imc < 18.5) {
        console.log("Peso abaixo do normal.");
    } else if (imc >= 18.5 && imc < 24.9) {
        console.log("Peso normal.");
    } else if (imc >= 25 && imc < 29.9) {
        console.log("Sobrepeso.");
    } else if (imc >= 30 && imc < 39.9) {
        console.log("Obesidade.");
    } else if (imc >= 40){
        console.log("Obesidade grave.");
    } else {
        console.log("IMC inválido.");
    }
}