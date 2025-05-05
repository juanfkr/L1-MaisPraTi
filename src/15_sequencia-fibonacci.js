// Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

let a = 0;
let b = 1;

console.log("Os 10 primeiros números da sequência de Fibonacci são:");
for (let i = 2; i <= 10; i++) {
    let proximo = a + b;
    console.log(proximo);
    a = b;
    b = proximo;
}