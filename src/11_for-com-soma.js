// Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

const prompt = require('prompt-sync')();

let acc = 0;

for(let i = 0; i < 5; i++) {
    let n = Number(prompt("Digite um número: "));
    acc += n;
}

console.log(acc)