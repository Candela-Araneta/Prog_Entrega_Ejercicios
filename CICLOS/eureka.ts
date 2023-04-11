// Escribir un algoritmo que nos pida una clave y verifique que sea la
// correcta.Tenga en cuenta que la clave es la palabra “eureka”.
// Solo tenemos 3 intentos para acertar, si fallamos los 3 intentos el sistema 
// mostrará un mensaje indicándonos que hemos agotado todas las oportunidades.
// Si acertamos la clave, saldremos directamente del programa.

import * as rls from 'readline-sync'

const keyword: string = "Eureka";
let password: string = rls.question ("Introduce password");
let attempt: number = 0;

console.log( "You entered correctly:", keyword);
attempt = attempt + 1;

while (keyword != password && attempt < 3) {
      console.log("Wrong password, try again");
      password = rls.question ("Introduce password:");
      attempt = attempt + 1;

  if (password === keyword)
      console.log("Welcome!");
}
