const input = require('prompt-sync')();

function main() {

// Entrada

    let numero = Number(input('Digite um número: '));

    divisao(numero);
}

// processamento

function divisao(num) {
    while(num/2 >= 1) {
        num /= 2;
    }

// Saida

    console.log(num);
}

main();