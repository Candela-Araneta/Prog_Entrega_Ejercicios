"use strict";
// Cree un método esMultiplo con 2 parámetros que devuelva el valor lógico verdadero o falso
// según si el primer número que se indique como parámetro es múltiplo del segundo.
// Recuerde que un número es múltiplo de otro si al dividirlo su resto es 0.
// Recuerde que la operación mod permite saber si el resto d euna división es 0. //
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
function esMultiplo(dividendo, divisor) {
    return ((dividendo % divisor) == 0);
}
var num1 = rls.questionInt("Ingrese primer número:");
var num2 = rls.questionInt("Ingrese segundo número:");
if (esMultiplo(num1, num2)) {
    console.log("El Numero", num1, "ES multiplo de", num2);
}
else {
    console.log("El Numero", num1, "NO es multiplo de", num2);
}
