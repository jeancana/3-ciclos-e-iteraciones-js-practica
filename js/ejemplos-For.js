
// ***** Ejemplos del Ciclo FOR(){} Reales Varios en JAVASCRIPT ******

// 1.1 FIRMA en JavaScript de un FOR -- La manera mas comun usada

for (let i = 0; i < 10; i++) {

    console.log("Prueba1/ let i=0 ---> Iniciando en Posicion 0 / i<10 --->Si Condicion es True / Recorriendo el FOR uno en uno - Incrementador(contador) i++ " + i)

}

/* Traduccion de la Logica Operando :
1. Inicia el Ciclo for() DESDE la posicion "let i= 0 " --- "otra forma decirlo es; el Ciclo a arranca su repeticion en posicion CERO"

2. Recorre el Ciclo for() HASTA la posicion donde i sea menor a 10  "i<10" -- "otra forma decirlo es; el Ciclo se va repetir 10 veces y termina"

3. Incrementa---> repite  y recorre el Ciclo de uno en uno usando el incrementador "i++" 
*/


// 1.2 FIRMA en JavaScript de un FOR -- La manera forma mas eficiente de Contar las vueltas del Ciclo

// Empiza en posicion Cero, Se repite 10 veces y Incrementa de uno en uno 
for (let i = 0; i < 10; i += 1) {

    console.log("Prueba2/ let i=0 ---> Iniciando en Posicion 0 / i<10 --->Si Condicion es True / Recorriendo el FOR de uno en uno - Incrementador(contador) i+=1 " + i)

}


// Empiza en posicion Cero, Se repite 10 veces el Ciclo y Incrementa de Dos en Dos (pares) 
// Esta Manera CASI NUNCA SE VA A USAR EN LA VIDA REAL -- es solo para efectos ACADEMICOS 
for (let i = 0; i < 10; i += 2) {

    console.log("Prueba3 / let i=0 ---> Iniciando en Posicion 0 / i<10 --->Si Condicion es True / Recorriendo el FOR de Dos en Dos (pares) - Incrementador(contador) i+=2 " + i)

}

// Haciendo el FOR pero en DECREMENTO de 100 a 1 
//Empiza en posicion 100, Se repite Ciclo SIEMPRE Y CUANDO 1 sea Mayor a Cero y DECREMENTA de uno en uno
for (let i = 100; i > 0; i -= 1) {

    console.log("Prueba4/ let i=100 ---> Iniciando en Posicion 100 / i>0 --->Si Condicion es True / Recorriendo el FOR de uno en uno - Decrementrador(contador) i-=1 " + i)
}


// ************* Estudiando LA SENTENCIA BREAK y CONTINUE ************************

console.log('USANDO LA SENTENCIA BREAK para en la condicion evaluada y no sigue mas')

for (i = 1; i <= 10; i += 1) {

    // Cuando i sea igual a 5 interrumpo el Ciclo del FOR
    if (i === 5) {
        break;
    }

    // Verificando a traves de un i cuando vuelta dio el el FOR antes de ser interrumpido
    console.log('vuelta ' + i)

}

console.log('USANDO LA SENTENCIA CONTINUE / Salta la condicion evaluada y sigue')

for (i = 1; i <= 10; i += 1) {

    // Cuando i sea igual a 5, Salta el "i=5". Continua el Ciclo del FOR
    if (i === 5) {
        continue;
    }

    // Verificando a traves de un i cuando vuelta dio el FOR 
    console.log('vuelta ' + i)

}

console.log('USANDO LA SENTENCIA CONTINUE / Saltando Varias veces/ Salta la Vuelta 5 y 8 ')

for (i = 1; i <= 10; i += 1) {

    // Cuando i sea igual a 5 o i sea igual a 8, Salta el "i===5 y i=== 8". Continua el Ciclo del FOR
    if (i === 5 || i === 8) {
        continue;
    }

    // Verificando a traves de un i cuando vuelta dio el FOR 
    console.log('vuelta ' + i)

}


// ***** Ejemplos Reales Mas COMPLEJOS Varios en JAVASCRIPT ******

// Variable Global 

// ----------- Ejemplo Nro1. Haciendo la tabla de Multplicar -------------

document.write("Esta es una Tabla hardcoeada desde VS ")
document.write("<br>")
let tabla =1
for (let i = 0; i < 10; i+=1) {

    let res = tabla*i
    document.write(tabla + " x " + i + " = " + res + "<br>")
    
}

document.write("<br>")

// ----------- Ejemplo Nro2. Haciendo la tabla de Multplicar y que el usuario Ingrese los Datos via "prompt" -------------

// declaramos la variable tabla2 y convertimos el Dato tipo String recibido por PROMPT del usuario a Dato Tipo NUMBER
// Nota: todo dato que ingresa el usuario via "PROMPT" llegara inicialmente como String

let tabla2 = Number(prompt("Ingrese la tabla a Calcular"))

document.write("La Tabla a Calcular es la del " + tabla2) 
document.write("<br>")

for (let i = 0; i < 10; i += 1) {

    let res = tabla2 * i
    document.write(tabla2 + " x " + i + " = " + res + "<br>")

}

/* CAPITULO ESPECIAL: 

------- 4 FORMAS DE CONVERTIR UN STRING EN NUMBER ----------- 
 
1. Ejemplo Nro1---> let tabla = Number(prompt("Ingrese la tabla a Calcular"))
2. Ejemplo Nro2---> let tabla = +prompt("Ingrese la tabla a Calcular")
3. Ejemplo Nro3---> let tabla = parseInt(prompt("Ingrese la tabla a Calcular"))
4. Ejemplo Nro4---> let tabla = parseFloat(prompt("Ingrese la tabla a Calcular"))

*/


 