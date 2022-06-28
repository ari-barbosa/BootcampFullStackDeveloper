let valorAny: any;

valorAny = 3;
valorAny = true;
valorAny = "Olá";


let valorString: string = "String";
valorString = valorAny;
let valorString2: string = "teste";
valorString2 = valorAny;


function somarStrings(string1: string, string2: string){
    console.log(string1 + string2);
}