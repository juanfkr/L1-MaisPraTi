// Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso)
// com base no valor fornecido, utilizando uma estrutura de controle if-else.

const prompt = require("prompt-sync")();

idade = Number(prompt("Digite sua idade: "));

function faixaEtaria(idade) {
    if(idade > 0 && idade <= 12) {
        console.log("Criança.")
    } else if (idade > 12 && idade < 18) {
        console.log("Adolescente.")
    } else if (idade >= 18 && idade < 60) {
        console.log("Adulto.");
    } else if (idade >= 60) {
        console.log("Idoso.");
    } else {
        console.log("Idade inválida.")
    }
}

faixaEtaria(idade);