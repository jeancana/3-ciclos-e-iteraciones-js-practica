
// ***** Ejemplos del Ciclo WHILE(){} Reales Varios en JAVASCRIPT ******


// ***** EJEMPLO NRO 1 ---> CICLO QUE TIENDE A INFINITO o STACK OVERFLOW (se lleno la pila) --- Nunca trabajar de esa manera un While 
// OJO NO dejar condiciones que tiendan eternamente a INFINITO
// Se Debe Asumir que le repeticion FINALIZARA en algun momento y NO tender al Infinito

/* let repetir = true

while (repetir) {
    
    console.log("Al infito y mas Alla")
} */


// ***** EJEMPLO NRO 2 ---> Inicializando Variables desde afuera del WHILE y Colocando un Incrementador para Evitar el STACK OVERFLOW

/* let count = 0

while (count<10) {
    console.log("He entrado en el Bucle while xq count " + count + " y es menor a 10")
    
    // Al colocar un incremantador dentro de la estructura interna, el valor de COUNT va cambiando en forma ascendente y se evita el STACK OVERFLOW
    count += 1
} */


// ***** EJEMPLO NRO 3 ---> Aceptando Datos del Usurio via promtp y mostrandolos en el Browser 

let entrada = prompt("1- Ingrese UN PRODUCTO y si desea Terminar la LISTA del SUPER Ingrese la Palabra ESC").toUpperCase();

// Verificando que esta dentro de la variable entrada
console.log('Dato Inicial Ingresado ' + entrada)

document.write('LISTA DEL SUPERMERCADO Ejemplo 1 <br><br>')

while (entrada != "ESC") {
    
    // Aca los hago salir por el DOM del Browser y coloco el <br> para que de un salto de linea
    document.write("Quiero Comprar: " + entrada + '<br>')

    entrada = prompt("Ingrese Otro PRODUCTO y si desea Terminar la LISTA del SUPER Ingrese la Palabra ESC").toUpperCase()
    //Verificando con Piso el Dato y lo cambio
    console.log('Dato Pisado ahora es: '+ entrada)
}

document.write("------------------------------------------------ " + '<br>')


// Otra Forma de Hacer el EJEMPLO NRO 3 sin Usar .toUpperCase() y Usando el Operador NOT--> "!" 

let ingreso = prompt("2- Ingrese UN PRODUCTO y si desea Terminar la LISTA del SUPER Ingrese la Palabra ESC")
// Verificando que esta dentro de la variable ingreso
console.log('Dato Inicial Ingresado ' + ingreso)

document.write('LISTA DEL SUPERMERCADO Ejemplo2 <br><br>')


// Traduccion de la Logica Operando : Mientras Entrada2 NO SEA Igual a "ESC" o Igual a "esc" ---> Puedes Entrar al While y hacer la LISTA DE SUPERMERCADO
while (!(ingreso == "ESC" || ingreso == "esc")) {

    // Aca los hago salir por el DOM del Browser y coloco el <br> para que de un salto de linea
    document.write("Quiero Comprar: " + ingreso + '<br>')

    ingreso = prompt("2- Ingrese Otro PRODUCTO y si desea Terminar la LISTA del SUPER Ingrese la Palabra ESC")
    //Verificando con Piso el Dato y lo cambio
    console.log('Dato Pisado ahora es: ' + ingreso)
}





