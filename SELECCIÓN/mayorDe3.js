"use strict";
//Desarrolle un algoritmo que dados tres numeros determine cual es el mayor de los tres//
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var n1 = rls.questionFloat('Ingrese el primer numero:');
var n2 = rls.questionFloat('Ingrese el segundo numero:');
var n3 = rls.questionFloat('Ingrese el tercer numero:');
if (n1 > n2 && n1 > n3) {
    console.log(n1, 'Es el numero mayor');
}
else if (n2 > n3) {
    console.log(n2, 'Es el numero mayor');
}
else {
    console.log(n3, 'Es el numero mayor');
}
