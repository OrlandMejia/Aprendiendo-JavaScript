/*********OBJETOS LITERALES************ */
//es una nueva forma de escribir atributos y metodos e incluso asignarlos
//por ejemplo

//esto es antes de los objetos literales
let nombre = "firulais",
edad = 7;

const perro = {
    nombre: nombre,
    edad: edad,
    ladrar: function(){
        console.log("Guauuu guauuuu!!!")
    }
}
console.log(perro);
perro.ladrar();

console.log(" ")
//CON LAS NUEVAS CARACTERISTICAS
//si la variable que asignaras tiene el mismo nombre de la propiedad
//se coloca de la siguiente manera
const dog = {
    nombre,
    edad,
    raza: "Callejero",
    //de igual forma los metodos se pueden simplificar
    //sin la necesidad de colocarle la palabra funcion
    ladrar(){
        console.log("guaaaaaaaaaaaaau")
    }
}
console.log(dog)
dog.ladrar();