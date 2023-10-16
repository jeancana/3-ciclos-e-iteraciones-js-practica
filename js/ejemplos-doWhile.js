
// Al principio el DO 
// Al Final el WHILE 

// ***** EJEMPLO NRO 1 ---> Inicializando Variables desde afuera del WHILE, Ejecutando el Bloque es Instrucciones al menos UNA VEZ y Colocando un Incrementador para Evitar el STACK OVERFLOW

let count = 20

do {
    console.log("He entrado en el Bucle DO While Al menos una vez y  Evaluo: ---> count = " + count + " es menor a 10? para poder Seguir")

    // Al colocar un incremantador dentro de la estructura interna, el valor de COUNT va cambiando en forma ascendente y se evita el STACK OVERFLOW
    count += 1

} while (count<10) 
    

// Es un Bucle Primitivo muy poco usado en la actualidad queda en mi NOTAS con Fines Academicos Solamente 



// ******** !!!!!!!!! IMPORTANTE IMPORTANTE ------ USAR EL CONDICIONAL SWITCH EN JAVASCRITP ES MALA PRACTICA 







