// Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require("prompt-sync")();

const opcao = Number(prompt("Selecione uma opção: \n1. Opção; \n2. Opção; \n3. Opção; \n>> "));

function menu(opcao) {
    switch(opcao) {
        case 1:
            console.log(`Você selecionou a opção: ${opcao}`);
            break;
        case 2:
            console.log(`Você selecionou a opção: ${opcao}`);
            break;
        case 3:
            console.log(`Você selecionou a opção: ${opcao}`);
            break;
        default:
            console.log("Opção inválida.");
            break;
    }
}

menu(opcao);