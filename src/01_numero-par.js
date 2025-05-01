// Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

const prompt = require('prompt-sync')();

let numero = Number(prompt("Digite um número: "));

function isEven(numero) {
    if(numero % 2 == 0) {
        console.log("Número é par.")
        return;
    } 
    console.log("Número é ímpar.")
}

isEven(numero);