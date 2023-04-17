// Cuando llegamos a la parada, miramos si el colectivo arribó a la parada.
// Siempre tenemos que esperar antes de que llegue. //

import * as rls from "readline-sync";

let esperaColectivo:string = rls.question("¿Ya llegó el colectivo?:");
let S, N:string = "";

if (esperaColectivo == S) {
    console.log("Ya llegó. Subo y me voy.");
}
    else (esperaColectivo == N) 
         console.log("Todavía no ha llegado. Sigo esperando.");
