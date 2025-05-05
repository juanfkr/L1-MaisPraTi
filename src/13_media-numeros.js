// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require('prompt-sync')();

let acumulador = 0;
let contador = 0;
let media;
let n;


do {
    n = Number(prompt("Digite um número: "));
    acumulador += n;
    if(n !== 0) {
        contador++;
    }
} while(n !== 0);

media = acumulador / contador
console.log(media)