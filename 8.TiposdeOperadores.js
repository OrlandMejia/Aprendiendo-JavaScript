//*****************TIPOS DE OPERADORES*************** */

//Operadores Aritmeticos
/*+, -, *, /, %, () */
let a = 5+5-10*3
//el operador % nos devuelde el residuo de una division
let modulo = 5%2

console.log(a)
console.log(modulo)
console.log(" ")

//Operadores Relacionales*/
// >, <, -->=, <=, ==, ===, !=, !==, */
/*
menor = <
mayor = >
menor o igual = <=
mayor o igual = >=
igual a = == comparacion de valores (estamos comparando solamente los valores)
igual a valor = === comparacion de tipo de dato y de valor (es ideal siempre usar este)
para ver que coincida el valor y el tipo de dato  */
console.log(8>9)
console.log(9>8)
// en programacion esto es una condicion
console.log(8>=9)
console.log(9>=8)
//operadores
console.log(" ")
console.log(7==7)
console.log("7"==7)
console.log(0===false)

//OPERADORES DE INCREMOS Y DECREMENTO******************}
console.log(" ")
let i = 1
//variable de incremento
i = i + 2
console.log(i)
//se puede expresar de la siguiente manera
i += 3
console.log(i)
//tambien es valido para * y / +=, /=, *= etc.

//Operador Unario de uno en uno
//precaucion con este tipo de operadores
i++
i--

//tambien podemos colocarlo de la siguiente forma, solo cuando aumentamos o disminuimos por UNIDAD
++i
--i
console.log(" ")
//operadores logicos **************
/*
! Not
|| Or
&& and 
para comparar dos condiciones al mismo tiempo, not negar, or si es una es otra, and comparar dos al mismo tiempo*/
console.log(!true) //niega o cambia un true por un false y viceversa
console.log(!false)
console.log(" ")
//oeprador or si una se cumple sino se cumple la otra para validar
console.log(9===9 || "9"=== 9)
//operador and && espara que todas las condiciones se cumplan para ser verdadero
console.log((9===9)&&("9"=== 9))