/*
Haciendo la verificacion Inicial de Linkeo - para chequear que el main.js esta bien
alert('Hola') */


// ************* Estudiando  CICLOS E ITERACIONES  *************************

/*
-- Los BUCLES O CICLOS  sirven para repetir INSTRUCCIONES una cierta cantidad de veces 
-- Fueron Disenados especialmente para recibir Cosos por Parametro
-- Una de sus funciones es ser una herramienta para recorrer ARRAYS 

-- En otras Palabras: Estructura que permite repetir un bloque de código varias veces

-- Se los Bucles O Ciclos dividen en 2:
-- 1) Por Conteo ---> Estructura "for"
-- 2) Por Condicionales ---> Estructura while / do..While

-- IMPORTANTE: Son la BASE de la Programacion Estructurada (Dividir el Problema o Programa en bloques pequeños para resolverlo de manera Logica)
*/


// **** 1. Estudiando la Estructura FOR (en su forma mas basica es una funcion y me fijo de ello xq tiene parentesis "()" 

// Al estar escrito de esta manera "for()" le estoy indicando al lenguaje que voy a ejecutar una funcion llamada FOR
// Tiene una FIRMA ---> forma de escribirse

// ****** Ejemplo Primario: 
/* 
    for ( desde ; hasta ; incremento/Recorrido ) { 

    } 

    Traduccion de la Logica Operando :: 
    1. desde ---> Inicia el ciclo for() DESDE la posicion inicial "n"
    2. hasta ---> Recorre el ciclo for() HASTA la posicion "n" (Es LA CONDICION (true/false) que permite hasta donde va el recorrido del FOR)
    3. Incrementa ---> Recorre el Ciclo FOR y cuentame las veces que se ha repetido  medieante un "CONTADOR i=i+1 /i+=1 /i++"
    Tambien se puede usar un Decrementador "CONTADOR i=i-1 /i-=1 /i--"
*/


// **** 2. Estudiando la Estructura WHILE (en su forma mas basica es una funcion y me fijo de ello xq tiene parentesis "()" 

// Al estar escrito de esta manera "WHILE()" le estoy indicando al lenguaje que voy a ejecutar una funcion llamada WHILE

// Tiene una FIRMA ---> forma de escribirse

// ****** Ejemplo Primario: 
/* 
    WHILE ( CONDICION ) { 
        
        **** Aca se ejecutaran las Instrucciones en caso de ser TRUE la condicion
    } 

    Traduccion de la Logica Operando :: 
    1. WHILE ---> significa es "MIENTRAS" 
    2. (CONDICION) ---> Si LA CONDICION a Evaluar es true Entrara y ejecutara el Bloque de Instrucciones que estan dentro del WHILE
    3. { } ---> Aca se ejecutaran las Instrucciones en caso de ser TRUE la condicion - mientas la CONDICION evualada siga siendo VERDADERA
*/


// NOTA: Todo Proyecto WEB es mejor arranclarlo desde la primesa MOBILE FIRST - las dimensiones de diseno a realizar en el browser 
// Siempre sera mas facil arrancar de un diseno que vaya desde lo mas chico a los mas grande
// DESDE el Media Query al Media Query Especifico ( El mas grande)

//IMPORTANTE TODO PROYECTO DEBE TENER ESTAS PREMISAS: El diseño web responsive o adaptativo es una técnica de diseño web que busca la correcta visualización de una misma página en distintos dispositivos. Desde ordenadores de escritorio a tablets y móviles


// **** 3. Estudiando la Estructura DO WHILE (en su forma mas basica es una funcion y me fijo de ello xq tiene parentesis "()"

// Al estar escrito de esta manera "DO{ } WHILE ()" le estoy indicando al lenguaje que voy a ejecutar el BUCLE al menos una vez antes de entrar en el While

// Tiene una FIRMA ---> forma de escribirse

// ****** Ejemplo Primario: 
/*
    do {
    
        **** Aca se ejecutaran las Instrucciones - BLOQUE de CODIGO al menos una vez sin evaluar condicion Previamente
       
    } WHILE ( CONDICION ) 

    Traduccion de la Logica Operando ::
    1. DO ---> Ejecuta el Bloque de Codigo (las instrucciones) al menos una vez 
    2.WHILE (CONDICION) ---> Luego de ejecutado el Bloque de Codigo al menos una vez - Evaluar  Mientras se siga Cumpliendo la CONDICION vuelve a Ejecutarlo
    3. ---> Si LA CONDICION a Evaluar es true Entrara y ejecutara el Bloque de Instrucciones que esta dentro del "DO" otra vez 
   
*/