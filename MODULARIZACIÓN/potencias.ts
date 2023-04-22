// Realice un programa que devuelva la potencia de un número.
// La base y el exponente deben ser ingresados por teclado.
// Solo deben admitirse exponentes mayores o iguales a 0.
// Recuerde que el resultado de un número elevado a 0 es 1.
// Separe la lógica de calcular la potencia utilizando métodos. //

import * as rls from "readline-sync";

function calcularPotencia(base: number, exponente: number): number {
    if (exponente === 0) {
      return 1;
    } else {
      let resultado = 1;
      for (let i = 1; i <= exponente; i++) {
        resultado = resultado * base;
      }
      return resultado;
    }
  }
  
  const base: number = rls.questionInt("Ingrese la base:");
  const exponente: number = rls.questionInt("Ingrese el exponente:");
  
  if (exponente >= 0) {
    const potencia = calcularPotencia(base, exponente);
    console.log(`La potencia de, ${base}, elevado a ${exponente} es: ${potencia}`);
  } else {
    console.log("El exponente debe ser mayor o igual a 0.");
  }
  