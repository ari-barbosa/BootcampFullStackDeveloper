function substituiPares(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] === 0){
            console.log("Você já é zero!")
        } else if (array[i] % 2 === 0) {
            console.log(`Substituindo ${array[i]} por 0...`); 
            array[i] = 0;
        }
    }

    return array;
}
let array = [1, 3, 6, 80, 33, 23, 90];
substituiPares(array);