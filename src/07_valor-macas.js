/* 
As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
*/

const prompt = require('prompt-sync')();

let qtdMacas = Number(prompt("Qtd. de maçãs compradas: "));
let preco;
let valorTotal;

qtdMacas < 12 ? preco = 0.3 : preco = 0.25;

valorTotal = qtdMacas * preco

console.log(`Valor total: ${valorTotal}`)
