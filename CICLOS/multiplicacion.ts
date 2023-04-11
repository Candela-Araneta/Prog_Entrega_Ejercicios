// Diseñar un algoritmo que muestre por pantalla la tabla de multiplicación 
// del número ingresado por el usuario.
// Para definir hasta qué número desea que muestre la tabla de multiplicación, 
// el usuario también deberá ingresar dicho valor. //

import * as rls from "readline-sync"

let num: number = rls.questionInt("Ingrese un numero que muestre su tabla de multiplicar:");
let limit: number = rls.questionInt("Ingrese valor límite hasta donde desee mostrar resultados:");
let result: string = "";

for (let i:number = 1; i >= limit; i--) {
     if (i >= limit) {
          result = '${num * limit}';
          }
          console.log (num, "x", i, "=", result);
     }