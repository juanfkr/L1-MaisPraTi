// Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require("prompt-sync")();

let nota = Number(prompt("Digite sua nota final: "));

function statusAluno(nota) {
    if(nota > 0 && nota < 4) {
        console.log("Reprovado.");
    } else if(nota >= 4 && nota < 6) {
        console.log("Recuperação.");
    } else if(nota >= 6 && nota <= 10) {
        console.log("Aprovado");
    } else {
        console.log("Nota inválida.");
    }
}

statusAluno(nota);