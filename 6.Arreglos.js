//****************ARREGLOS (ARRAY)********************* */

//un arreglo es un conjunto de valores

//pueden ser declarados con let o const
//en los objetos compuestos se accede a la coordenada del valor
//PROPIEDADES
const a = []
const b = [1,true,"Hola",["A","B","C"]]
console.log(a)
console.log(b)
console.log(b.length)

//las posiciones en los arreglos siempre empiezan en cero
//por ejemplo si tiene siete elementos, tendra seis posiciones
console.log(b[2])

//por ejemplo si queremos acceder al segundo arreglo dentro del primero
console.log(b[3][2])
//podemos meter varios arreglos dentro de un arreglo

//FORMAS DE CREAR ARREGLOS}
//metodo of accedemos al objeto Array
const c = Array.of("x","Y","Z",9,8,7)
console.log(c)

//otro ejemplo con el metodo que permite inicializar un arreglo y asignarle
//a todas sus posiciones un valor
//ejemplo de que dentro de nuestro arreglo tenemos precios de productos y necesitamos aplicar un descuento
//a uno solo, pero llenamos de una vez con el metodo fill con lo que queremos
const d = Array(1).fill(false)
console.log(d)
console.log(" ")
//METODOS
const colores = ["Rojo","Verde","Azul"]
console.log(colores)

colores.push("Negro") //metodo para insertar en un arreglo al final
console.log(colores)

colores.pop()//metodo para eliminar el ultimo elemento de un array
console.log(colores)

//METODO QUE PERMITE EJECUTAR UNA FUNCION POR CADA ELEMENTO QUE TENGA UN ARREGLO
console.log(" ")
// arrowfunction =>
//y declaramos el elmento que va a estar recorriendo el arreglo
//otro parametro es el indice que posee el arreglo
colores.forEach(function (el, index){
    //aca imprimimos los valores de colores en <li>
    console.log(`id="${index}">${el}`)

})



