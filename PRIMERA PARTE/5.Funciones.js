//**********FUNCIONES************ */
/*las funciones son un bloque de codigo, autocontenido independiente al ambito global, que se define una sola vez
y se puede utilizar en cualquier momento, ademas una funcion puede o no recibir parametros
y tambien puede devolver o no valores 
las funciones se consideran objetos y son elementos poderosos*/

//FORMAS DE DECLARAR UNA FUNCION
//Funciones declaradas y funciones expresadas
//***funcion declarada*** */
function estoEsUnaFuncion(){
    //cuerpo de la funcion
    console.log("uno")
    console.log("dos")
    console.log("tres")
}

//para utilizarla hay que mandarla a llamar "invocacion de funciones"
estoEsUnaFuncion();

console.log(" ")
console.log("******funcion que devuelve valores**********")
//una funcion tambien puede aceptar parametros y devolver valores
//ejemplo de una funcion que devuelve un valor
function funcionDevuelveValor(){
    //para esto usamos una palabra reservada return
    //cuando una funcion dentro del cuerpo de la misma funcion encuentra a palabra reservada return
    //en ese momento ignora todo lo que este abajo de ese return
    console.log("Hola")
    console.log("como")
    console.log("estas")
    return "La funcion ha retornado una cadena de texto"
}
//variable que guardara el valor de la funcion
let valorDeFuncion = funcionDevuelveValor();
console.log(valorDeFuncion)

//FUNCION QUE RECIBE PARAMETROS
console.log(" ")
console.log("****funcion que recibe valores*********")

//lo quue esta dentro del () son parametros
//tambien le podemos asignar de una vez valores a los parametros
function saludar(nombre,edad){
    console.log(`Hola Mi Nombre es: ${nombre} y tengo ${edad} años`);

}
saludar("Orlando",7)
console.log(" ")

funcionDeclarada()
//Funciones declaradas vs Funciones Expresadas
//una funcion puede invocarse desde cualquier parte
function funcionDeclarada(){
    console.log("Esto es una Funcion Declarada, puede invocarse en cualquier parte de nuestro codigo, incluso antes de que la funcion sea declarada")
}

funcionDeclarada();

console.log(" ")
console.log(" ****FUNCIONES EXPRESADAS ****")
//cuando creamos una funcion de manera declarada JS automaticamente hace el hoisting, osea las eleva a primeros puestos dinamicamente junto a las variables

//otra forma es asignarle una variable en funciones expresadas
//se recomienda siempre utilizarla con const
//se le conoce como funcion anonima
const funcionExpresada = function(){
    console.log("esto es una funcion expresada, es decir una funcion que se le ha asignado como valor a una variable, si invocamos esta funcion antes de su definicion JS nos dirá...")
}
funcionExpresada()
//en estas funciones se deben ejecutar despues de su declaracion, y esa es la diferencia con las declaradas

//realizar funciones de manera expresada es buena practica para evitar errores en la ejecucion

let sumar = (a,b)=> (a + b);

console.log(sumar(5,5))
