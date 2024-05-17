/**
 * contantes que usaremos para la otra funcion aritmetica o el otro archivo
 */
//esto es para que se exporte esta constante
export const PI = Math.PI;

//DECLARAMOS UN EJEMPLO CONEXION, USUARIO DATOS
export let usuario = "Orlando";
//TAMBIEN PODEMOS EXPORTAR POR DEFECTOS VARIABLES
const password = "qwerty";
//export default password;
//creamos un objeto o variable para exportarlo

//TAMBIEN PODEMOS HACER FUNCIONES QUE SE EJECUTEN POR DEFAULT
//NO SE PUEDEN EXPORTAR DOS FUNCIONES DEFAULT, SOLAMENTE UNA "export default function saludar(){ }"
//las unicas que permiten exportación por defecto explicito son las funciones y clases
export default function saludar(){
    console.log("Hola modulos +es6");
}

//clase saludar exportada por defecto
export class Saludar{
constructor(){
    console.log("Hola MOdulo +ES6 en clase")
}
}