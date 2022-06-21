/* Valores padrão e objeto "arguments" */


/**/

function exponencial(array, num = 1){
    const result = [];

    for(let i = 0; i < array.length; i++){
        result.push(array[i] ** num);
    }

    return result;

}

exponencial([1, 2, 3, 4]);

/* Arguments */

/* Um array com todos os parametros passados quando a função foi invocada */
function findMax(){
    let max = -Infinity;

    for(let i = 0; i < arguments.length; i++){
        if (arguments[i] > max){
            max = arguments[i];
        }
    }
    return max;
}