"use strict";
// El usuario debe ingresar la base y altura por teclado.
// El área debe guardarse en una variable.
// El resultado debe ser mostrado por pantalla.
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var base = rls.questionInt("Ingrese la base:");
var altura = rls.questionInt("Ingrese la altura:");
var area = base * altura;
console.log("El area es:", area);
