// Realice un programa que devuelva el área del triángulo usando los siguientes pares de
// base-altura: (1,2) (2,4) (3,6) (4,8) (5,10) (6,12) (7,14).
// Implemente un método llamado calcularAreaTriangulo que reciba 2 números por parámetro (uno
// llamado base y otro llamado altura). //

function calcularAreaTriangulo(base:number, altura:number) {

let area = (base * altura) /2;
return area;
}

const pares = [ [{1:2},{2:4},{3:6},{4:8},{5:10},{6:12},{7:14}], ];

for (let i= 0; i < pares.length; i++) {
const base = pares [i] [0];
const altura = pares [i] [1]; 
const area = calcularAreaTriangulo( base, altura);


    console.log ("El área del triángulo con", base,"y", altura, "es", area);
    
}
