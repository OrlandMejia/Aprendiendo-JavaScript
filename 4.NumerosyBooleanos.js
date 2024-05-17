//*********************NUMBERS************** */
let a = 2
//tambien podemos hacerlo con su constructuor
let b = new Number(1);
let c = 7.19
let d = "123.321"
console.log(a,b)

//metodos

//toFixed, es para saber cuandos numeros decimales tendrá un valor numerico
//que tendremos que colocar cuantos decimales queremos, y los redondea
console.log(c.toFixed(3))

//parseInt, devuelve la parte entera unicamente de un numero o cadena
console.log(parseInt(c)) //en este caso devuelve 7 unicamente

//parseFloat, devuelve con valores flotantes
console.log(parseFloat(c))

//typeof, dice de que tipo de dato es una variable
console.log(typeof a, typeof b, typeof c, typeof d)

//tambien podemos sumar
console.log( a + b)

console.log("EJEMPLO DE SUMA ENTRE NUMERO Y CADENA")
console.log(c+d)

//Metodo de casting, cambio de dato
console.log("CAMBIO DE DATO CADENA A ENTERO")
console.log(c + parseInt(d))
//aca unicamente sumo los enteros, por eso el error de la no suma de los decimales
//entonces lo convertimos a float
console.log("CON CONVERSION A FLOAT")
console.log(c+parseFloat(d))

//************************VALORES BOOLEANOS************************************** */
/*Este tipo de datos como en todos los lenguajes es TRUE o FALSE*/
console.log(" ")
console.log("*****VALORES BOOLEANOS******")
let verdadero = true;
let falso = false;
//tambien podemos declararlo con su constructor
let v = Boolean(true)
let f = Boolean(false)

console.log(verdadero,falso)

//un numero 0 es un valor que tiende a falso y uno negativo a verdadero
//una cadena vacia tiende a falso y una con almenos un elmento o un espacio tienden a verdader

//***********UNDEFINED, NULL Y NaN ********************/
console.log("  ")
console.log("*******valores undefined, null & NaN*********")
//estos valores, son un muy particulares en JS
//tanto null como undefined, van a representar un valor  ausente
/* pero la diferencia es que undefined es una variable sin valor definido, puesto automaticamente por JS
ejemplo:*/
let indefinida;
console.log(indefinida)
/*en cambio con null, es un valor especial que significa que la variable esta vacia
y es asignada intencionalmente por el programador
ejemplo: */
let nulo = null;
console.log(nulo)
/*Nan significa Not a Number, indica que las operaciones que se hacen y alguno
de los datos implicados no sea un numero*/
//tecnica camelCase para variables primitiva lowerCamelCase
let noEsUnNumero ="hola"*3.7
console.log(noEsUnNumero)

