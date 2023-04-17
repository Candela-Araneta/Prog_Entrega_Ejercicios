"use strict";
// Leer valores hasta que se introduzca un cero (0).
// El usuario puede introducir valores positivos y negativos.
// Encontrar el máximo de los elementos que se introdujeron.
// Analizar cómo cambia el programa para hallar el mínimo. //
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var valor = rls.questionInt("Ingrese un valor positivo o negativo:");
var valorMax = 0;
do {
    valor = rls.questionInt("Ingrese un valor positivo o negativo:");
    if (valor !== 0) {
        if (valor > valorMax) {
            valorMax = valor;
        }
    }
} while (valor !== 0);
console.log("El valor máximo ingresado es:", valorMax);
