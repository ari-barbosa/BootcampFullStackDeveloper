const alunos = [
    {
        nome: "Ariane",
        nota: 5,
        turma: "18",
    },

    {
        nome: "Lucas",
        nota: 9,
        turma: "18",
    },

    { 
        nome: "Analu",
        nota: 10,
        turma: "2C",
    },

    { 
        nome: "Miguel",
        nota: 5,
        turma: "2C",
    },
];


function alunosAprovados(arr, media){
    let aprovados = [];

    for( let i = 0; i < arr.lenght; i++){

     const   {nota, nome} = arr[i];

        if( nota >= media){
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 5));
