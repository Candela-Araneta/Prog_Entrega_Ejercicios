// Implemente un algoritmo que calcule y muestre por pantalla el precio final
// de un producto después de aplicarle un descuento.
// El precio inicial del producto se ingresa por pantalla.
// El descuento a aplicar es del 10%. Recuerde que puede obtener el 10% 
// de un valor multiplicado por 0,1.
// Precio final debe ser mostrado en pantalla.

import * as rls from 'readline-sync'

let precioInicial:number = rls.questionInt("Ingrese precio del producto:");
let descuento:number = 10;
let precioFinal:number = precioInicial - (precioInicial * 0.1) ;
 

console.log("El precio final con descuento es:", precioFinal);