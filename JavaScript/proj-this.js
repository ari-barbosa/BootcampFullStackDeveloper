/*
Dada a função calculaIdade, utilize os métodos call e apply
para modificar o valor de this. Crie seus próprios objetos para esta atividade!
 */

const namorada = {
    nome: "Ariane",
    idade: 21
};

const namorado = {
    nome: "Lucas",
    idade: 24
};



function calculaIdade(anos) {
    console.log(`Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`);
}

calculaIdade.call(namorada, 5);

calculaIdade.apply(namorado, [10]);

