/* *********DESTRUCTURACION**************/
/**ES UNA FORMA DINAMICA LOS VALORES DE UN OBJETOS A VARIABLES O DE UNA CADENA 
 * 
*/
//EJEMPLO CON ARREGLOS, guardar los valores en variables diferentes

//SIN USAR DESTRUCTURACION
const numeros = [1,2,3]

let uno = numeros[0]
let dos = numeros[1]
let tres = numeros[2]

console.log(uno,dos,tres)
console.log(" ")

//CON DESTRUCTURACIÓN O DESTRUCTURING
/**dinamicamente las posiciones del arreglo las guardamos a las variables */
const [one, two, three] = numeros;
console.log(one, two, three)

//ejemplo 2 destructurar un objeto

const persona = {
    nombre: "Orlando",
    apellido: "Mejia",
    edad: 35
}

//asignamos o destructuramos
//creamos dinamicamente las variables y decimos que asigne las propiedades
//en objetos para que funcione la variable se debe llamar igual que la
//propiedad que queremos guardar en la variable
let {nombre, apellido, edad} = persona;
console.log(nombre,apellido,edad)
