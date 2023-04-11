"use strict";
//Una tienda al cumplir años en Octubre ofrece un descuento del 15% a sus clientes en todas
//sus compras.
//Desarrolle un algoritmo que dada una compra: precio unitario, cantidad y el mes, indicados
//por el usuario, determine si el cliente tiene descuento o no.//
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var precio = rls.questionInt("Ingrese precio del producto:");
var cantidad = rls.questionInt("Ingrese cantidad de unidades compradas:");
var mes = rls.questionInt("Ingrese el mes en que realizó la compra:");
var descuento = mes == 10 && precio == (precio * 0.15);
if (descuento) {
    console.log("Usted obtuvo un 15% de descuento. Gracias por acompañarnos en estos 15 años!");
}
else {
    console.log("Gracias por su compra. Hasta pronto!");
}
