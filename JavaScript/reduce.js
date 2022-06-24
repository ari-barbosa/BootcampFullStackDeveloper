/*Some todos os números de um array
Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. 
Calcule qual será o saldo final após subtrair todos os preços da lista enviada. */

console.log(" DESAFIO 01 ")
function somaNumeros(arr){
    return arr.reduce(function(anterior, atual){
        return anterior + atual;
    })
}

const nums = [1, 2]
console.log(somaNumeros(nums));
console.log(" ");


console.log(" DESAFIO 02 ")
function saldoDisponivel(array){
    return array.reduce(function(saldoAnterior, saldoAtual){

        return saldoAnterior - saldoAtual;

    }, 1000);
}


const compras = [100, 100, 100, 100];
console.log(saldoDisponivel(compras));