//Desarrolle un algoritmo que dados tres numeros determine cual es el mayor de los tres//


import * as rls from "readline-sync";

let n1:number = rls.questionFloat ('Ingrese el primer numero:');
let n2:number = rls.questionFloat ('Ingrese el segundo numero:');
let n3:number = rls.questionFloat ('Ingrese el tercer numero:');

if (n1>n2 && n1>n3) {
console.log(n1, 'Es el numero mayor')
}
else if (n2>n3) {
    console.log(n2, 'Es el numero mayor')
}
else {
    console.log(n3, 'Es el numero mayor')
}
