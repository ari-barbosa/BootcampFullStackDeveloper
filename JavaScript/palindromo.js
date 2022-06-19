// Solução 01
function verificaPalindromo(string){
    if(!string) return "String inexistente";

    string.split("").reverse().join("") === string;
    console.log("É palíndromo!")
}

let myVar = "ovo";
verificaPalindromo(myVar);

// Solução 02
function verificaPalindromo2(string){
    if(!string) return "String inexistente";

    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length - 1 - i]){
        return false;
         }
    }
    return true;
}

verificaPalindromo2("abba");