
const prompt = require('prompt-sync')();

function main(){


    const X = Number(prompt('Informe o primero número: '));
    const N = Number(prompt('Informe o segundo número: '));

    function divisao(x, y){
        while(y >= 0){
            divisao = x / y;
            console.log(divisao);
            y = y - 1;
            x = divisao
        }
    }

        divisao(X, N);

}

main()