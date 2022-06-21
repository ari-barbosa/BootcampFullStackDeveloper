/* Spread (...): uma orma de lidar separadamente com elementos 
O que era parte de um array se torna um elemento independente
*/

function sum(x,y,z){
    return x + y + x;
}

const number = [1,2,3];
console.log(sum(...number));

/* Rest: Combina os elementos em um array 
O que era um elemento independente se torna parte de um array
*/

function confereTamanho(...args){
    console.log(args.length)
}

confereTamanho();
confereTamanho(1, 2);
confereTamanho(3, 4, 5);

/* OBJETOS - Object Destructuring
Entre chaves {}, podemos filtrar apenas os dados que nos interessam
em um objeto
*/

const user = {
    id: 42,
    displayName: "jdoe",
    fullName: {
        firstName: "John",
        lastName: "Doe"
    }
};

function userId({id}){
    return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}) {
    return `${first} ${last}`;
}

userId(user)
getFullName(user)
