/********************OBJETO CONSOLE*********************** */
//console.log(console)

//mostrar errores en consola personalizados
console.error("Esto es un error")

//Aviso personalizado Warning
console.warn("Esto es un aviso")

//objeto console para dar informacion al usuario
console.info("Esto es un mensaje informativo")

//objeto log, registro de lo que pasa en la app
console.log("Cambios en la app")

let nombre = "Orlando";
let apellido = "Mejia";
let edad = 22;

console.log(nombre, apellido, edad)

//interpolar variables con mensaje
console.log(`hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años`)

//metodo para limpiar todo lo que esta en la consola
console.clear()

//objeto dir es para mostrar todas las propiedades de un objeto
//console.dir(window)
console.log(" ")
//AGRUPAR EN LA CONSOLA
console.group("Cursos de Js en YT")
console.log("Curso de JS")
console.log("Curso de Node.js")
console.log("Curso de Git y Github")
console.log("Curso de PHP POO")
console.groupEnd();

//create a function where input a array and show in console the numbers par
console.log(" ")
//HACER TABLAS CON CONSOLE, PARA ANALIZAR UN OBJETO
//lo hacemos con table y con la propiedad object. entries para filas y columas
console.log(console)
//y podemos ordenarlos en forma ascendente
console.table(Object.entries(console).sort())

//REPRESENTAR ARREGLOS U OBJETOS EN FORMA DE TABLA en este caso mismo no. de posiciones
const numeros = [1,2,3,4,5]
const vocales = ["a","e","i","o","u"]

console.table(numeros)
console.table(vocales)

//con objetos
const perro = {
    nombre: "Boni",
    raza: "Boxer",
    color: "cafe"
}
console.table(perro)

//SI QUISIERAMOS SABER EL TIEMPO EXACTO QUE TARDA UNA PETICION
//para eso usamos el uso de time de console
console.time("TIME");
const arreglo = Array(1000000);

for(let i=0; i<arreglo.length; i++){
    arreglo[i] = i;
}

console.timeEnd("TIME");
//INICIA EN CONSOLE.TIME Y CUENTA EL CODIGO HASTA QUE ACABE EN CONSOLE.TIMEEND

//CUANTAS VECES SE EJECUTA CIERTO FRAGMENTO DE CODIGO CON CONSOLE
for(let i=0; i<=20; i++){
    //cuenta cuantas veces se ejecuta este codigo
    //recibe un alias de igual forma que console.time
    console.count("FOR")
    console.log(i);
}

//EL OBJETO CONSOLE TIENE UN METODO QUE ES COMO UNA MINI LIBRERIA PARA HACER
//PRUEBAS DEL FUNCIONAMIENTO DEL CODIGO EL CUAL ES EL SIGUIENTE
let x= 3;
let y = 2;
let purebaXY ="se espera que x siempre sea menor que y"

console.assert(x<y,[x,y,purebaXY]);
