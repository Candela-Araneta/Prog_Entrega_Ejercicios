"use strict";
// Diseñar un algoritmo que recorra las butacas de una sala de cine y determine cuántas butacas 
// desocupadas hay. 
// Suponga que para modelar este problema, se utiliza un arreglo con valores lógicos.
// La presencia de un valor verdadero (true) en el arreglo indica que la butaca está ocupada.
// La presencia de un valor falso (false) en el arreglo indica que la butaca está desocupada. //
Object.defineProperty(exports, "__esModule", { value: true });
var butacas = [true, false, false, false, true, true, false, true, false, false, true];
var contador = 0;
for (var i = 0; i < butacas.length; i++) {
    if (!butacas[i]) {
        contador++;
    }
}
console.log("La cantidad de butacas desocupadas es: ".concat(contador));
