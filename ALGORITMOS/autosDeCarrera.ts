// En una prueba, un piloto tiene que completar 4 vueltas.
// Se necesita un programa que permita ingresar por teclado el tiempo de cada vuelta.
// El programa debe retornar el tiempo total y el promedio de vuelta. //

import * as rls from "readline-sync"

const tiempoLap1: number = rls.questionFloat("Ingrese tiempo de la 1era vuelta:");
const tiempoLap2: number = rls.questionFloat("Ingrese tiempo de la 2da vuelta:");
const tiempoLap3: number = rls.questionFloat("Ingrese tiempo de la 3era vuelta:");
const tiempoLap4: number = rls.questionFloat("Ingrese tiempo de la 4ta vuelta:");

const tiempoTotal: number = tiempoLap1 + tiempoLap2 + tiempoLap3 + tiempoLap4;
const media: number = tiempoTotal / 4;

console.log("El tiempo total es de:", tiempoTotal);
console.log("El promedio de vuelta es de:", media);
