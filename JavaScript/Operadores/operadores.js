function conferencia(valor1, valor2){
    a===b?console.log("Os números são iguais"):console.log("Os números são diferentes");
}

function soma(valor1, valor2){
    var soma;

    soma = valor1 + valor2;

    if(soma > 10 && soma < 20){
        console.log("A soma é maior que 10 e menor que 20");
    } else {
        console.log("A soma é menor que 10 ou maior que 20")
    }
}


a = 10;
b = 5;
conferencia(a,b);
soma(a, b);
