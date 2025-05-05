// Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

const prompt = require('prompt-sync')();

let nTabuada = Number(prompt("Escolha um numero de 1 a 10: "));

for(let i = 0; i <= 10; i++) {
    console.log(`${nTabuada}x${i} = ${i*nTabuada}`)
}