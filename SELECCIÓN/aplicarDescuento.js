"use strict";
// Desarrolle un algoritmo que diga el precio de una compra.
// La compra se compone del precio del producto y la cantidad.
// Si el cliente gasta más de $1000 debemos aplicarle un descuento del 10%. //
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var precioFinal;
var precioProductoUno = 200;
var precioProductoDos = 350;
var subtotal = 0;
var valorDescuento = 0;
var cantidadProductoUno = rls.questionInt("cantidad de producto 1 que compró el usuario: ");
var cantidadProductoDos = rls.questionInt("cantidad de producto 2 que compró el usuario: ");
subtotal = (cantidadProductoUno * precioProductoUno) + (cantidadProductoDos * precioProductoDos);
console.log("cantidad producto 1: ", cantidadProductoUno, "\ncantidad de producto 2: ", cantidadProductoDos, "\nsubtotal: ", subtotal);
if (subtotal > 1000) {
    valorDescuento = subtotal * 0.1;
    precioFinal = (subtotal - valorDescuento);
    console.log("uds ahorra: $", valorDescuento, "por haber comprado mas de $1000 \nel precio final es de: ", precioFinal);
}
else {
    precioFinal = subtotal;
    console.log("gracias por confiar en nosotros.\nel precio final es de: $", precioFinal);
}
