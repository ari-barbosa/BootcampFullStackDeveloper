var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;


function increment() {
    currentNumber = currentNumber + 1;
    /* DETERMINANDO UM VALOR MÁXIMO */
    if( currentNumber <= 5){
        currentNumberWrapper.innerHTML = currentNumber;
        }
    }

    

function decrement() {
    currentNumber = currentNumber - 1;
    /* DETERMINANDO UM VALOR MINIMO */
    if( currentNumber >= -5){
        currentNumberWrapper.innerHTML = currentNumber;
        /*DEIXANDO O VALOR EM VERMELHO PARA NUMEROS NEGATIVOS*/
            if (currentNumber < 0) {
                currentNumberWrapper.style.color = 'red';
                currentNumberWrapper.style.fontWeight = 'bold';
            } 
        }
    }


/* USANDO O LISTENER PARA QUANDO CLICAR NO BOTAO '-' */
document.getElementById("subtrair").addEventListener("click", function(){
document.getElementById("text").innerText = "Você diminuiu o valor!";
});

/* USANDO O LISTENER PARA QUANDO CLICAR NO BOTAO '+' */

document.getElementById("adicionar").addEventListener("click", function(){
document.getElementById("text").innerText = "Você aumentou o valor!";
    });


    
