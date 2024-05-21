/**
 * EJERCICIOS 1
*/

//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

let palabra ="Hola Mundo";

function contar(p){
    console.log("el total de letras de: ",p, " es de: ",p.length);
}

contar(palabra);

console.log(" ");
console.log("SOLUCION DEL PROFESOR")
//SOLUICION PLANTEADAPOR EL PROFESOR
function contarCaracteres(cadena=""){
    if(!cadena){
        console.warn("No ingresaste ninguna cadena");
    }else{
        console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);
    }
}

contarCaracteres();
contarCaracteres("Hola Mundo");

//FUNCIÓN HECHA CON ARROW FUNCTIONS
console.log(" ")
console.log("FUNCION HECHA CON ARROW FUNCTIONS")
const Caracteres = (cadenas = "") => 
(!cadenas) 
    ?  console.warn("No ingresaste ninguna cadena") 
        :  console.info(`La cadena "${cadenas}" tiene ${cadenas.length} caracteres`);


Caracteres();
Caracteres("Hola Mundo");


/**
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, 
pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
*/
console.log(" ");
function cortar(p,c){
    console.log("la palabra recortada es: ",p.slice(0,c));
}
cortar(palabra,3);

console.log(" ");
console.log("SOLUCION DEL PROFESOR");

 const recortarTexto = (cadena="", longitud=undefined) => 
 (!cadena) ? console.log("No ingresaste el texto") 
    :(longitud===undefined)
        ? console.log("No ingresaste la longitud")
            : console.log(cadena.slice(0,longitud)) ; 
 recortarTexto ("Hola Mundo");

/**
3) Programa una función que dado una String te devuelva un Array de textos separados por cierto caracter, 
pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
*/

console.log(" ");

let frase = "hola que tal";

function separar(texto,separador){
    return texto.split(separador);
}
console.log(separar(frase," "));

console.log(" ")
console.log("SOLUCION DEL PROFESOR");

const cadeArreglo = (cadena ="", separar=undefined) =>
(!cadena)
? console.log("No ingresaste texto")
    : (!separar)
        ?  console.log(`Ingresa el separador`) 
            : console.log(cadena.split(separar));

cadeArreglo("Hola que tal", "  ")


/*
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/
console.log(" ");

function repetir(palabra,rep){
    for(var i=0; i <rep; i++){
        console.log(palabra);
    }
}
repetir(palabra,3);

console.log(" ")
console.log("SOLUCION DEL PROFESOR");

const repetirTexto = (texto="", veces= undefined) => {
    if(!texto) return console.log("No ingresaste un texto");

    if(veces === undefined) return console.log("No ingresaste el numero de repeticiones");

    if(veces === 0) return console.log("No puede ser 0 las repeticiones");

    if(Math.sign(veces) === -1) return console.log("El numero no puede ser negativo");

    if(String(veces)) return console.log("las repeticiones no pueden ser texto")
    else{
    for(let x = 1; x <= veces; x++){
        console.log(`${x}: ${texto}`);
    }
}
}
repetirTexto("Hola Mundo",5);