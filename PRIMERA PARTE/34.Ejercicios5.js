/*
18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/

//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, 
//pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const search = (txt = '') =>{
    let totalVocales = 0;
    let totalconsonantes = 0;
// Array de vocales
    let vocales = ['a', 'e', 'i', 'o', 'u'];
// Array de consonantes
    let consonantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'ñ', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

    if(typeof txt != 'string'){
        console.log("El dato debe ser una cadena de texto");
        return 0
    }

    for(let i = 0; i < txt.length; i++){
        if(vocales.includes(txt[i].toLowerCase())){
            totalVocales++;
            }else if(consonantes.includes(txt[i].toLowerCase())){
                totalconsonantes++;
            }
    }
    console.log(`"${txt}" Vocales: ${totalVocales} Consonantes: ${totalconsonantes}`);
}

search('Hola Mundo');

//19) Programa una función que valide que un texto sea un nombre válido, 
//pe. miFuncion("Jonathan MirCha") devolverá verdadero.
function validarNombre(texto) {
    // Expresión regular que verifica si el texto contiene solo letras y espacios
    let expresionRegular = /^[a-zA-Z\s]+$/;

    // Verificar si el texto cumple con la expresión regular
    console.log(expresionRegular.test(texto));
}

// Ejemplo de uso
validarNombre("Jonathan MirCha"); // Salida: true

//20) Programa una función que valide que un texto sea un email válido, 
//pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
function validarEmail(texto) {
    // Expresión regular para validar una dirección de correo electrónico
    let expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verificar si el texto cumple con la expresión regular
    return expresionRegular.test(texto);
}

// Ejemplo de uso
console.log(validarEmail("jonmircha@gmail.com")); // Salida: true
