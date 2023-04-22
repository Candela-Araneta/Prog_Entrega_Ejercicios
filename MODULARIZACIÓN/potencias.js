"use strict";
// Realice un programa que devuelva la potencia de un número.
// La base y el exponente deben ser ingresados por teclado.
// Solo deben admitirse exponentes mayores o iguales a 0.
// Recuerde que el resultado de un número elevado a 0 es 1.
// Separe la lógica de calcular la potencia utilizando métodos. //
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
function calcularPotencia(base, exponente) {
    if (exponente === 0) {
        return 1;
    }
    else {
        var resultado = 1;
        for (var i = 1; i <= exponente; i++) {
            resultado = resultado * base;
        }
        return resultado;
    }
}
var base = rls.questionInt("Ingrese la base:");
var exponente = rls.questionInt("Ingrese el exponente:");
if (exponente >= 0) {
    var potencia = calcularPotencia(base, exponente);
    console.log("La potencia de, ".concat(base, ", elevado a ").concat(exponente, " es: ").concat(potencia));
}
else {
    console.log("El exponente debe ser mayor o igual a 0.");
}
