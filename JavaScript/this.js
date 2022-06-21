/* A palavra reservada this é uma referência de contexto
No exemplo abaixo, this refere-se ao objeto pessoa */

const pessoa = {
    firstName: "Ariane",
    lastName : "Barbosa",
    id       : 1,
    fullName : function(){
        return this.firstName + " " + this.lastName;
    },
    getId: function(){
        return this.id;
    }
};


console.log(pessoa.fullName());

console.log(pessoa.getId());

/* MANIPULANDO O VALOR DE THIS */

/* CALL */

const pessoa1 = {
    nome: "Miguel",
};

const animal = {
    nome: "Murphy",
};

function getSomething() {
    console.log(this.nome);
}

getSomething.call(pessoa1);

/* OBS: É possível passar parametros para essa função separando-os por vírgula */

const myObj = {
    num1: 2,
    num2: 4,
};

function soma(a,b){
    console.log(this.num1 + this.num2 + a + b);
}

soma.call(myObj, 1, 4);


/* APPLY */

const pessoa2 = {
    nome: "Miguel",
};

const animal2 = {
    nome: "Godi",
};

function getSomething() {
    console.log(this.nome);
}

getSomething.apply(animal);

/* APPLY 
É possível passar parâmetros para essa função dentro de um array
*/

const myObj1 = {
    num1: 2,
    num2: 4,
};

function soma(a, b){
    console.log(this.num1 + this.num2 + a + b);
}

soma.apply(myObj, [1, 5]);

/* BIND
Clona a estrutura da função onde é chamada e aplica o valor
do objeto passado como parametro
*/

const retornaNomes = function (){
    return this.nome;
};

let bruno = retornaNomes.bind({nome: Bruno});

bruno();