// Al tirar un dado tenemos 1/6 de probabilidades de sacar 6.
// Si tiramos dos dados tenemos 1/36 probabilidades de sacar doble 6.
// Al aumentar el número de dados la probabilidad de sacar todos 6 es cada vez menor.
// Escriba un programa que calcule la probabilidad de sacar todos los dados 6 siendo que tiramos
// N dados (dato ingresado por el usuario). //

import * as rls from "readline-sync";

const numDados:number = rls.questionInt("Ingrese cantidad de veces que desea arrojar los dados:");

const casosPosibles:number = Math.pow (6, numDados);
const casosFavorables:number = 1;

const probabilidad:number = casosFavorables/casosPosibles;

    console.log("La probabilidad de sacar 6 en todos arrojando los dados esa cantidad de veces es de:", probabilidad);
