/* DESAFIO
Filtre e retorne todos os números pares de um array.
*/

function filter(array){
    return array.filter(function(valor){
        if(valor % 2 == 0){
            return valor;
        }
         return null;
    })
}

let nums = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(filter(nums));



