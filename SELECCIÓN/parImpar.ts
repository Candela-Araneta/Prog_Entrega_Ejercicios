//Desarrollar un algoritmo que dado un número, ingresado por el usuario determine si el
//número es par o impar y le informe al usuario.
//En el caso de ser 0 (cero) el algoritmo deberá informarlo//

import * as rls from "readline-sync"

let numero: number = rls.questionInt("Ingrese el numero que desea determinar:"); 

if (numero == 0) {
    console.log("El numero es cero");
} else if (numero % 2 == 0) {
    console.log("El numero es par");
} 
    else {
    console.log("El numero es impar");
} 


//ESTRUCTURA DE CONTROL: SELECCION (ALTERNATIVA)


const n1: number = rls.questionInt("Ingrese N° a evaluar:");

if (n1 == 0) {
    console.log("El numero ingresado es 0 (cero).");
}
else {
const numStr: string = n1.toString(); // convierte el numero en una cadena
const unit: string = numStr.slice(-1); // obtiene el ultimo caracter de la cadena

if (unit == "0"|| unit == "2"|| unit == "4"|| unit == "6"|| unit == "8") {
    console.log("El numero es PAR");
}
    else {
        console.log("El numero es IMPAR");
    }
}