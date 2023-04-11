//Desarrolle un algoritmo que, dada una posición en una carrera se determine el tipo de medalla 
//a entregar. Tenga en cuenta que para el primer puesto se entrega medalla de oro, segundo puesto
//medalla de plata y tercer puesto medalla de bronce. En caso que quede en otra posición se entrega
//certificado de participación.//


import * as rls from "readline-sync";

const position: number = rls.questionInt( "Ingrese la posición de llegada");

let message: string = ""
if (position === 1) {
    message= "Medalla de Oro"
} else if (position === 2) {
    message= "Medalla de Plata"
} else if (position === 3) {
    message= "Medalla de Bronce"
} else {
    message= "Certificado de Participación";
}

console.log (message);


// ESTRUCTURAS DE CONTROL: SELECCIÓN MÚLTIPLE

posicionLlegada: number = rls.questionInt("Ingrese posición de llegada del competidor:");

switch (posicionLlegada) {
    case 1:
        console.log("Entregar Medalla de Oro");
        break;
    case 2:
        console.log("Entregar Medalla de Plata");
        break;
    case 3:
        console.log("Entregar Medalla de Bronce");
        break;
    default:
        console.log("Entregar Mención de Participación");
}
