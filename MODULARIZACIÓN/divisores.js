"use strict";
// Implemente un método llamado cantidadDeDivisores que reciba un número entero y devuelva la
// cantidad de divisores.
// Por ejemplo, para el número 16, sus divisores son 1,2,4,8 y 16 por lo que la respuesta
// debería ser 5.
// Re-utilice el método esMultiplo implementado para el ejercicio anterior. //
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
//Método utilizado en el ejercicio anterior.
function esMultiplo(dividendo, divisor) {
    return ((dividendo % divisor) == 0);
}
function cantidadDeDivisores(nro) {
    var i;
    var cantidad = 0;
    for (i = 1; i <= nro; i++) {
        if (esMultiplo(nro, i)) {
            cantidad = cantidad + 1;
        }
    }
    return cantidad;
}
var numero = rls.questionInt("Ingrese un Numero: ");
console.log("La cantidad de divisores del Numero", numero, "es", cantidadDeDivisores(numero));
