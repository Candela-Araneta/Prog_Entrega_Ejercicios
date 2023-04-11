//Una tienda al cumplir años en Octubre ofrece un descuento del 15% a sus clientes en todas
//sus compras.
//Desarrolle un algoritmo que dada una compra: precio unitario, cantidad y el mes, indicados
//por el usuario, determine si el cliente tiene descuento o no.//

import * as rls from "readline-sync"

let precio:number = rls.questionInt("Ingrese precio del producto:");
let cantidad:number = rls.questionInt("Ingrese cantidad de unidades compradas:");
let mes:number = rls.questionInt("Ingrese el mes en que realizó la compra:");

let descuento:boolean = mes == 10 && precio == (precio * 0.15);

if(descuento) {
    console.log("Usted obtuvo un 15% de descuento. Gracias por acompañarnos en estos 15 años!");
} 
    else {
    console.log("Gracias por su compra. Hasta pronto!");
}
