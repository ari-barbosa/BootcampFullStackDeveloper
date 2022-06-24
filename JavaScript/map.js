/* Uma coleção de arrays no formato [chave, valor];
   Pode ser iterado por um loop for of
   - Maps podem ter chaves de qualquer tipo
   - Maps possuem a propriedade length
   - Utilizando quando o valor fsd chaves é desconhecido
   
*/

const myMap = new Map()

/* Adicionar, ler e deletar */
myMap.set("Apple", "fruit");

myMap.get("Apple");

myMap.delete("Apple")

myMap.get("Apple")

/* DESAFIO
Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você,
e depois sem ele. */

const maca = {
   value: 2,
}

const laranja = {
   value: 3,
}

function mapComThis(arr, thisArg){
   return arr.map(function(item){
      return item * this.value;
   }, thisArg)
}

const nums = [1, 2];
console.log("This -> maca", mapComThis(nums, maca));

console.log("This -> laranja", mapComThis(nums, laranja));


function mapSemThis(arr){
   return arr.map(function(item){
      return item * 2;
   })
   }

   const nums1 = [2, 4, 10];
   console.log(mapSemThis(nums1));


