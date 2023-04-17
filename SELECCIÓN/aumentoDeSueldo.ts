//Una empresa desea premiar a sus empleados con un aumento de sueldo. 
//Este aumento se ajusta a la siguiente tabla:
//      Sueldo Actual                 Sueldo con Aumento
//       0 - 15.000 $                       20%
//  15.001 - 20.000 $                       10%
//  20.001 - 25.000 $                        5%
//    Más de 25.000 $                  No hay aumento
//Desarrolle un algoritmo dado el salario actual de un empleado determine el aumento de sueldo a 
//aplicar y se lo muestre.//

import * as rls from "readline-sync";

let salario:number = rls.questionInt("Ingrese su salario actual:");
let n1:number = (<=15000);
let n2:number = (<=15001) && (>=20000);
let n3:number = (<=20001) && (>=25000);
let n4:number = (>=25000);

if (salario == n1) {
        console.log("Este mes usted tendrá un 20% de aumento.");
}
    if else (salario == n2); {
        console.log("Este mes usted tendrá un 10% de aumento.");
    }
    if else (salario == n3); {
        console.log("Este mes usted tendrá un 5% de aumento.");
    }
    else (salario == n4); {
        console.log("Este mes no le corresponde aumento.");
}
