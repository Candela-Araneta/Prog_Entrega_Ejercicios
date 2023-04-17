// Leer valores hasta que se introduzca un cero (0).
// El usuario puede introducir valores positivos y negativos.
// Encontrar el máximo de los elementos que se introdujeron.
// Analizar cómo cambia el programa para hallar el mínimo. //

import *as rls from "readline-sync";

let valor :number = rls.questionInt("Ingrese un valor positivo o negativo:");
let valorMax = 0

do {
  valor = rls.questionInt("Ingrese un valor positivo o negativo:");
  
  if (valor !== 0) {

    if ( valor > valorMax) {
        valorMax = valor;
        }
    }

 } while (valor !== 0);
        console.log ("El valor máximo ingresado es:", valorMax);
        