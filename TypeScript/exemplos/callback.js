"use strict";
function somaValoresNumericosETrata(numero1, numero2, callback) {
    let resultado = numero1 + numero2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividirPorEleMesmo(numero) {
    return numero / numero;
}
console.log(somaValoresNumericosETrata(1, 3, aoQuadrado));
console.log(somaValoresNumericosETrata(1, 6, aoQuadrado));
