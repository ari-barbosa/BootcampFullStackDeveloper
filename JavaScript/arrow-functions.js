const helloWorld = () => "Hello World";

/* REGRAS
- Caso exista apenas uma linha, pode dispensar as chaves e o return
- Caso exista apenas um parametro, pode dispensar os parenteses
- Não faz hoisting 
- "This" sempre será o objeto global. Metodos para modificar seu valor não irão funcionar;
- Não existe o objeto "arguments";
- O construtur (ex: new MeuObjeto()) também não pode ser utilizado
*/

const soma = (a, b) => a + b;
soma(4, 6);

const soma1 = a => a;
soma(4);
