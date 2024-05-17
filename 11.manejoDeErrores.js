/* CLASE DE MANEJO DE ERRORES */

/* para la detección de errores tenemos try catch mos permitira evaluar
errores en el codigo, y se capturará en el catch*/

try{
//se evaulará el codigo
console.log("En el try se agrega el codigo a evaluar")
//creamos un error involuntario
noExiste;
console.log("Segundo mensaje del try")
//en el momento en el que el bloque try detecte un error en el codigo
//ya no continua ejecutando lo que le sigue a la linea erronea
}
catch(error){
//aca se captura el error que presente el codigo en try
console.log("catch captura los errores presentes en el try")
//imprimimos en consola el error que capturo
console.log(error)
}
finally{
//este bloque se ejecutará siempre al final de un bloque try, catch
console.log("el Finally Se ejecutará despues del try, catch")
}

//tambien podemos lanzar un error personalizado por ejemplo cuando queremos
//datos de un form en numeros pero lo colocan en tipo texto

/* EJEMPLO DE REALIZACION DE ERRORES PERSONALIZADOS */
try{
    let numero = "a"
    //isNaN es una funcion que si no es un numero devuelve Verdadero sino regresa falso
    if(isNaN(numero)){
        //si esto es una letra o caracter entonces arrojamos nuestro error
        /**con la palabra reservada throw, con un objeto standar Error */
        throw new Error("El dato no es un Número")

    }
    console.log("la multiplicacion es: ",numero*numero);

}
catch(e){
    //aca imprime lo que mostró el objeto error dentro del try
console.log(`Se produjo el siguiente error: ${e}`);
}




































