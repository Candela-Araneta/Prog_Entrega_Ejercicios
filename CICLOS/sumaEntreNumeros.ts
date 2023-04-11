// Escriba un programa que pida al usuario dos números enteros, 
// y luego retorne la suma de todos los números que están entre ellos.
// Por ejemplo, si los números son 2 y 7, debe entregar como resultado 
// 2 + 3 + 4 + 5 + 6 + 7 = 27. //

import * as rls from "readline-sync"

const num1: number = rls.questionInt("Ingrese el primer numero entero:");
const num2: number = rls.questionInt ("Ingrese el segundo numero entero:");
let result: number = 0;

// REDUCER (función reductora)

for (let i: number = num1; i <= num2; i++) {
    result = result + i;
}

console.log (result);