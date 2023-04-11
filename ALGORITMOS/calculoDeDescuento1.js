"use strict";
// Implemente un algoritmo que calcule y muestre por pantalla el precio final
// de un producto después de aplicarle un descuento.
// El precio inicial del producto se ingresa por pantalla.
// El descuento a aplicar es del 10%. Recuerde que puede obtener el 10% 
// de un valor multiplicado por 0,1.
// Precio final debe ser mostrado en pantalla.
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var precioInicial = rls.questionInt("Ingrese precio del producto:");
var descuento = 10;
var precioFinal = precioInicial - (precioInicial * 0.1);
console.log("El precio final con descuento es:", precioFinal);
