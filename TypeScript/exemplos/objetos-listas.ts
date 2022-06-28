// const pessoa = {
//     nome: "Ariane",
//     idade: 20,
//     profissao: "Analista de sistemas"
// }


// pessoa.idade = 21;

// const lucas: {nome: string, idade: number, profissao: string} = {
//     nome: "Lucas",
//     idade: 24,
//     profissao: "Vigilante"

// }

// const analu = {
//     nome: "Analu",
//     idade: 18,
//     profissao: "analista de sistemas"
// }

// enum Profissao {
//     Professora,
//     pintor,
//     Atriz,
//     "Analista de Sistemas"
// }

// interface Pessoa{
//     nome: string,
//     idade: number,
//     profissao?: Profissao; // O sinal "?" siginifica que o campo é adicional
// }

// const luan: Pessoa = {
//     nome: "Luan", 
//     idade: 18,
//     profissao: Profissao["Analista de Sistemas"]

// }

// const Luna: Pessoa = {
//     nome: "Luna", 
//     idade: 19,
//     profissao: Profissao["Analista de Sistemas"]

// }


// interface Estudante extends Pessoa {
//     materias: string[] // criando lista
// }


// const levi: Estudante ={
//     nome: "Levi",
//     idade: 20,
//     profissao: Profissao.pintor,
//     materias: ["Matematica", "Programacao"]
// }

// const lucca: Estudante ={
//     nome: "Lucca",
//     idade: 20,
//     materias: ["Matematica", "Programacao", "Estrutura de dados"]
// }

// function listar(lista: string[]){ // Função para exibir os itens de listas
//     for(const item of lista){
//         console.log(' - ', item);
//     }
// }

// listar(lucca.materias); // exibindo os itens de materias