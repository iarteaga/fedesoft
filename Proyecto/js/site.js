"use strict";
//debugger;
//var val = window.prompt("Ingrese el valor: ");

/*
var cadena  = "hola mundo cruel";
console.log(cadena);
cadena  = ['h','o','l','a'];
console.log(cadena);
console.log("Longitud del arreglo: <b>" + cadena.length + " - " , cadena);
console.warn("Longitud del arreglo: <b>" + cadena.length + " - " , cadena);
*/


/*
//var mi_nombre = "Ivan Arteaga";
for (let letra in mi_nombre) {
    console.log("Letra : " + mi_nombre[letra] ) ;
    //console.log("Letra : " + letra ) ;
}
*/


/*
 Las letras en posiciones pares en mayuscula
 Las letras en posicione simpares en minuscula
 Se imprime letra a letra y muestra la posicion
 Al finalizar debe mostrar la plabra completa
*/
/*
function ejercicio_01(texto)   {
    var cadena = "";
    if (!(typeof texto === 'string' )) {
        throw Error("Pailas ingreaste n dato que no representa una cadena, ingresaste un: "  + (typeof texto).toUpperCase() );
    } else {
        for (let letra in texto) {
            cadena += (letra % 2 == 0) ? texto[letra].toUpperCase() : texto[letra].toLowerCase();
            console.log(cadena[letra],"=>",letra);
        }
    }
    console.log(cadena);
}
ejercicio_01("ivan Guillermo Arteaga");
ejercicio_01(1.346);
*/


/*
* Uso de funciones para resolver el problema
*/
/*
function isPar(numero) {
    return numero % 2 == 0;
}

function cambiarUpOrLower(letra, numero, isUp = function() {return isPar(numero);} ) {
    return isUp() ? letra.toUpperCase() : letra.toLowerCase();
}

function ejercicio_02(texto)   {
    var cadena = "";
    if (!(typeof texto === 'string' )) {
        throw Error("Pailas ingreaste n dato que no representa una cadena, ingresaste un: "  + (typeof texto).toUpperCase() );
    } else {
        for (let letra in texto) {
            cadena += cambiarUpOrLower(texto[letra], letra);
            console.log(cadena[letra],"=>",letra);
        }
    }
    console.log(cadena);
}
ejercicio_02("ivan Guillermo Arteaga h");
*/

/*
var Persona = {
    nombre : "Ivan",
    edad : 38,
    sexo : 'm',
    miNombre : function ()  {alert("Hola ivan care pan");}
};
console.log("" + Persona.miNombre());
*/

var arreglo = ["uno", 2, '3', 4, "cinco"];
arreglo = arreglo.map(item => item + 1);
console.log(arreglo);
console.log("----------");
var nueva = arreglo.reduce( (ac, cu) => {console.log(ac); return cu + ac; }, 0 );
console.log("->" + nueva);

console.log("->" + arreglo.filter(it => it < 4));

console.log("------------------");
arreglo.forEach(s => console.log("variable : " + s));