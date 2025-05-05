// Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const prompt = require('prompt-sync')();

// Solicita o número e converte para número inteiro
let nFatorial = Number(prompt("Escolha um número de 1 a 10: "));

let resultado = 1;

for (let i = 1; i <= nFatorial; i++) {
    resultado *= i;
}

console.log(`O fatorial de ${nFatorial} é: ${resultado}`);