"use strict";
// En una prueba, un piloto tiene que completar 4 vueltas.
// Se necesita un programa que permita ingresar por teclado el tiempo de cada vuelta.
// El programa debe retornar el tiempo total y el promedio de vuelta. //
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var tiempoLap1 = rls.questionFloat("Ingrese tiempo de la 1era vuelta:");
var tiempoLap2 = rls.questionFloat("Ingrese tiempo de la 2da vuelta:");
var tiempoLap3 = rls.questionFloat("Ingrese tiempo de la 3era vuelta:");
var tiempoLap4 = rls.questionFloat("Ingrese tiempo de la 4ta vuelta:");
var tiempoTotal = tiempoLap1 + tiempoLap2 + tiempoLap3 + tiempoLap4;
var media = tiempoTotal / 4;
console.log("El tiempo total es de:", tiempoTotal);
console.log("El promedio de vuelta es de:", media);
