// PAIR PROGRAMMING CON ENZO NOORDERMEER
var numeros = [1, 2, 0, -3, 0, 5, -7, 8, 0];
var positivos = 0;
var negativos = 0;
var ceros = 0;
numeros.forEach(function (numero) {
    if (numero > 0) {
        positivos++;
    }
    else if (numero < 0) {
        negativos++;
    }
    else {
        ceros++;
    }
});
console.log("Cantidad de positivos:", positivos);
console.log("Cantidad de negativos:", negativos);
console.log("Cantidad de ceros:", ceros);
