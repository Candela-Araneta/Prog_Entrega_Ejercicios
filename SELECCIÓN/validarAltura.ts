// Desarrolle un algoritmo que, de acuerdo a la altura de una persona, 
// decida si puede entrar a un juego en un parque de diversiones.
// Para poder subirse a la montaña rusa la persona debe medir 1.30 mts. o más. //

import * as rls from "readline-sync"

const alturaReq: number = 1.30

let altura:number = rls.questionFloat("Ingrese su altura:");
    if (altura >= alturaReq) {
    console.log("Puede subir:");
    } 
        else {
            console.log("Acceso denegado:");
        }
        
