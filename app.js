/* POR SERGIO SUAREZ

    Este código consiste en ir preguntando mediante un prompt, cuales son los jugadores de un equipo.

    Variables que se usarán: 
        listaDeJugadores, es un string donde se irán anexando los invitados.
        numeroDeJugador, que indica el órden en el que se ingresaron.
        jugador, que es la variable que va a irse utilizando para ir anexando los jugadores.
*/
let listaDeJugadores = "";
let numeroDeJugador = 1;
let jugador = "";

// Alertas indicando cómo ingresar los datos
alert("REGISTRO DE INVITACIÓN A TORNEO")
alert("A continuación, escribe el nombre de cada uno de tus Jugadores, y finaliza pulsando la tecla 'Esc' o 'Cancelar'");

// Decidí el Ciclo do, para que se preguntara por al menos un jugador
do {
    jugador = prompt("Jugador #" + numeroDeJugador + ":                (Pulsa 'Esc' o Cancelar para Finalizar)");
    
    // La condición es que no se presione esc y que el jugador tenga al menos 1 caracter
    if (jugador != null && jugador != "") {
        listaDeJugadores += numeroDeJugador + ". " + jugador + "\n";
        console.log("Se registró al jugador "+numeroDeJugador+", el cual se llama "+jugador);
        numeroDeJugador++;
    } else {
        console.log("No se hizo un registro adicional");
    }

} 
// El bucle termina cuando se presiona la tecla Esc y por tanto el jugador es null
while (jugador != null);

// Finalización del código
console.log("Finaliza el registro de jugadores. En total fueron " + (numeroDeJugador-1))
if (listaDeJugadores != "") alert("LOS JUGADORES SON:\n" + listaDeJugadores)
else alert("No hay jugadores");