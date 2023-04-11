// El usuario debe ingresar la base y altura por teclado.
// El área debe guardarse en una variable.
// El resultado debe ser mostrado por pantalla.

import * as rls from 'readline-sync'

let base:number = rls.questionInt("Ingrese la base:");
let altura:number = rls.questionInt("Ingrese la altura:");

let area:number = base * altura;
console.log("El area es:", area);

