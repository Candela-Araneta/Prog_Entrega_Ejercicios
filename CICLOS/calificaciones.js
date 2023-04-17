"use strict";
// Calcular las calificaciones de un grupo de alumnos, donde la nota final de cada alumno se 
// calcula según el siguiente criterio: la parte práctica vale el 10%, la parte de problemas 
// vale el 50% y la parte teórica el 40%.
// Se debe ingresar el nombre del alumno y sus tres notas, se  escribirá el resultado y se volverá
// a pedir los datos del siguiente alumno hasta que el nombre sea una cadena vacía.
// Las notas deben estar entre 0 y 10 (si no lo están, no imprimirá las notas, mostrará un mensaje
// de error y continuará con otro alumno). //
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var nombreAlumno = "";
var notaPractica, notaProblemas, notaTeoria = 0;
var notaFinal = notaPractica * 0.1 + notaProblemas * 0.5 + notaTeoria * 0.4;
while (nombreAlumno !== "") {
    if (nombreAlumno !== "") {
        notaPractica = rls.questionInt("Ingrese nota de Práctica:");
        notaProblemas = rls.questionInt("Ingrese nota de Problemas:");
        notaTeoria = rls.questionInt("Ingrese nota de Teoría:");
        notaFinal = notaFinal;
    }
    if (notaPractica > 0 && notaPractica < 10 || notaProblemas > 0 && notaProblemas < 10 || notaTeoria > 0 && notaTeoria < 10)
        ;
    console.log("Valor erróneo. Ingrese nombre del alumno:");
    if (notaPractica < 0 && notaPractica > 10 || notaProblemas < 0 && notaProblemas > 10 || notaTeoria < 0 && notaTeoria > 10)
        ;
    console.log(" Ingrese nombre del alumno:", nombreAlumno, notaPractica, notaProblemas, notaTeoria, notaFinal);
}
