/*
Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.

- Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
    Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
    Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
    Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
*/

const prompt = require('prompt-sync')();

let a = Number(prompt("Digite o valor do lado A: "));
let b = Number(prompt("Digite o valor do lado B: "));
let c = Number(prompt("Digite o valor do lado C: "));

function tipoTriangulo(a, b, c) {
    if(a < (b + c) && b < (a+c) && c < (a +b)) {
        if(a == b || a == c || b == c) {
            console.log("Triângulo isóceles.");
        } else if((a < b || b < a) && (b < c || c < b)) {
            console.log("Triângulo escaleno.");
        } else if((a == b && b == c)) {
            console.log("Triângulo equilátero.");
        } else {
            console.log("Outro tipo de triângulo.");
        }
    }
}

tipoTriangulo(a, b, c);