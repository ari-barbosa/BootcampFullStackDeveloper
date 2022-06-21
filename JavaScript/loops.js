/* IF ELSE */

function numeroPositivo(num){
    let resultado;

    if(num < 0) {
        resultado = false;
    } else {
        resultado = true;
    }

    return resultado;
}

numeroPositivo(2);
numeroPositivo(-9);

/* SWITCH CASE
Equivale a uma comparação de tipo e valor (==)
Sempre precisa de um valor "Default"
Ideal para quando se precisa comparar muitos valores
*/


function getAnimal(id){
    switch(id){
        case 1:
            return "cao";
        case 2:
            return "gato";
        case 3:
            return "passaro";
        default:
            return "peixe";
    }
}

getAnimal(1)
getAnimal(4)
getAnimal("1")


/* FOR
Loop dentro de elementos iteráveis (arrays, string)
*/

function multiplicaPorDois(arr){
    let multiplicados = [];

    for(let i = 0; i < arr.lenght; i++){
        multiplicados.push(arr[i] * 2);
    }

    return multiplicados;

    const meusNumeros = [2, 33, 456, 356, 40];
    multiplicaPorDois(meusNumeros);
}

/* FOR IN
Loop entre propriedades enumeráveis de um objeto
*/
function forInExemplo(obj){
    for(prop in obj){
        console.log(obj[prop]);
    }
}

const meuObjeto = {
    nome: "Joao",
    idade: "20",
    cidade: "Salvador"
}

forInExemplo(meuObjeto);



/* FOR OF */
function logLetras(palavras){
    for(letra of palavras){
        console.log(letra)
    }
}

    const palavras = "abacaxi";

    logLetras(palavras)


    /* WHILE
    Executa instruções até que a condição se torne falsa 
    */

    function exemploWhile(){
        let num = 0

        while(num <= 5){
            console.log(num);
            num++;
        }
    }

    exemploWhile()

    /* DO WHILE 
    Executa instruções até que a condição se torne falsa.
    Porém a primeira execução sempre ocorre
    */

    function exemploDoWhile(){
        let num = 0;

        do {
            console.log(num);
            num++;
        } while(num <= 5)
    }

    exemploDoWhile()