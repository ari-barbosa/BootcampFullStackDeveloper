function somaValoresNumericosETrata(numero1: number, numero2: number, callback: (numero: number) => number): number {
    let resultado = numero1 + numero2;
    return callback(resultado);
}

function aoQuadrado(numero: number): number {
    return numero * numero;
}

function dividirPorEleMesmo(numero: number): number{
    return numero / numero;
}

console.log(somaValoresNumericosETrata(1, 3, aoQuadrado));
console.log(somaValoresNumericosETrata(1, 6, aoQuadrado));