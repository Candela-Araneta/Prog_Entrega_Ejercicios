// Escriba un programa que solicite 10 números al usuario y calcule el promedio de las mismas.
// Luego, muestre el resultado por pantalla.//

import *as rls from "readline-sync";

let nota, suma, promedio, contador:number;
contador = 1;
nota = 0;

while (contador<=10) {
    nota = rls.questionInt("Ingrese una nota:");
    suma = 0 + nota;
    contador = contador + 1;
}

promedio = (suma + nota) / 10;
    console.log("El promedio de las notas es:", promedio);

