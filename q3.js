
const input = require('prompt-sync')();

function main() {

// Entrada
    let num1 = Number(input('digite o primeiro número: '));
    let num2 = Number(input('digite o segundo número: '));

    mdc(num1, num2);
}

// Processamento 

function mdc(n1, n2) {
    let i = 2;
    let mdcR = 1;
    while(n1/i != 1 && n2/i != 1) {
        if (n1%i == 0 && n2%i == 0) {
            mdcR *= i;
            n1 = n1/i;
            n2 = n2/i;
        } else {
            i++;
        }
    }

// Saida
    console.log('o resultado do mdc é:', mdcR);
}

main()