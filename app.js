// POR SERGIO SUAREZ

// Funcion

let cliente = prompt("Bienvenido, Ingrese su nombre para continuar");

function edadInvalida (edad){
    if((edad ="") && (edad = null)){
    alert("Error: Ingrese caracteres numericos");
    return (true);
    }else {
        return (false);
    }
}
do{
    edad = parseInt(prompt ("Ingrese su edad."));
}while (edadInvalida(edad));

alert("Bienvenido " + cliente + "!");
let dineroSolicitado = prompt ("Ingrese el importe que le gustaria obtener. (sin ceros, ni comas)")
let imporSolicitado = parseInt(dineroSolicitado);
alert("Dinero solicitado: " + dineroSolicitado + "\nHaz click en Aceptar si el valor es correcto, si no esta de acuerdo recargue nuevamente la pagina.")
let cuotas = prompt("Ingrese la cantidad de cuotas que desea. \nTeniendo en cuenta un 6% de intereses.")
let cuotasPagar= parseInt(cuotas);
let interesMensual = imporSolicitado * 0.06;
let interesTotal = interesMensual * cuotasPagar;

function totalPrestamo() {
    resultado = imporSolicitado + interesTotal;
    return(resultado);
}
totalPrestamo();
alert("Dinero solicitado: " + dineroSolicitado + "\nCuotas a pagar: " + cuotas + "\nIntereses totales: " + interesTotal)
alert ("Gracias por confiar en nosotros " + cliente) + "!";