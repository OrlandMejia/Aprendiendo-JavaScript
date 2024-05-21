/*****HERENCIA PROTOTIPICA******* */
/**JAVASCRIPT ES UN LENGUAJE BASADO EN PROTOTIPOS */
/**EJEMPLO DE UN OBJETO CON UN METODO */
//PROTOTIPO DEL OBJETO ANIMAL LITERAL
const animal = {
    nombre: "firulais",
    sonar(){
        console.log(" hago mucho RUIDOOOOOOO")
    }
}
console.log(animal)

//ejemplo en un animal animado
const animal2 = {
    nombre: "Lola Bunny",
    sonar(){
        console.log(" hago mucho RUIDOOOOOOO")
    }
}
console.log(animal2)

console.log(" ")

/**COMO PODRIAMOS GENERAR DE UN PROTOTIPO PARA GENERAR N CANTIDAD
 * DE ANIMALES, LO HARIAMOS DE LA SIGUIENTE MANERA
 */
/********************CREAMOS UNA FUNCION CONSTRUCTORA ******************/
//escrito con UpperCamelCase
/**si necesitamos pasar propiedades ala funcion constructura
 * los debemos pasar como parametros de la propia funcion
 */

/**FUNCION CONSTRUCTORA VERSION 1 */
function Animal(nombre,genero){
    //atributos, this que indica que segun lo que pase el usuario por los
    //parametros ese valor toma en el atributo
    this.nombre = nombre;
    this.genero = genero
    //cuando trabajemos con funciones constructoras, tanto los atributos
    //como los metodos deben colgar del metodo this
    this.sonar = function(){
        console.log(`${this.nombre} hago mucho RUIDOOOOOOO`)
    }
    this.saludar = function(){
        console.log(`Hola me llamo: ${this.nombre} y son un: ${this.genero}`)
    }
}
//new nos va a pemitir crer una nueva instancia, objeto del tipo que le
//especifiquemos
const snoppy = new Animal("Snoopy","Macho");
const lolaBunny = new Animal("Lola", "Hembra");

console.log(snoppy);
console.log(lolaBunny);

/**mientras que los primeros dos objetos literales, su prototipo es object
 * el constructor que hicimos Animal, estaba basado en el prototipo object
 */

/**En caso que sean miles de datos que debemos introducir */
console.log(`
 *****PROTOTIPOS***** SIN OPTIMIZAR`)
snoppy.sonar();
snoppy.saludar();
lolaBunny.sonar();
lolaBunny.saludar();
console.log(" ")

/**lo ideal es que nuestras fucniones constructoras tengan solo los atributos 
 * ESTA FUNCION ASIGNAREMOS LOS METODOS AL PROTOTIPO, NO A LA FUNCION COMO TAL
******************FUNCION CONSTRUCTORA VERSION 2********************/

console.log(`
*******************PROTOPIPOS OPTIMIZADOS*******************`)
function Animal2(nombre2,genero2){
    //atributos, this que indica que segun lo que pase el usuario por los
    //parametros ese valor toma en el atributo
    this.nombre2 = nombre2;
    this.genero2 = genero2;
}
//cuando trabajemos con funciones constructoras, tanto los atributos
    //como los metodos deben colgar del metodo this
    /**metodos agregados al prototipo de la funcion constructora
     * con la palabra reservada prototype
     */
Animal2.prototype.sonar2 = function(){
    console.log(`${this.nombre2} hago mucho RUIDOOOOOOO`)
}
Animal2.prototype.saludar2 = function(){
    console.log(`Hola me llamo: ${this.nombre2} y son un: ${this.genero2}`)
}

/***********************HERENCIA PROTOTIPICA************************** */
/**aca vamos a generar una funcion constructora para crear un perro
 * y va a heredar las caracteristicas de la funcion animal y recibirá
 * los mismos parametros del padre qu será Animal2, adicionalmente añadiremos
 * un campo con el tamaño del perro
 */
function Perro(nombre2, genero2, tamano){
    //Creamos una variable que va a colgar del this de la funcion y está será
    //igual al prototipo que nos vamos a bassar para hacer la herencia en este
    //caso seria animal 
    this.super = Animal2;
    //ejecutamos el metodo pero asignamos al prototipo de perro
    this.super(nombre2,genero2);
    this.tamano = tamano;
}
//generamos una nueva instancia en el prototipo que será igual a la funcion
//constructora, PERRO ESTA HEREDANDO DE ANIMAL2
Perro.prototype = new Animal2();
//generamos su propipio constructor a la funcion constructora perro
//jalaria todas las cracteristicas del contructor perro
Perro.prototype.constructor = Perro;
//INCLUSO PODEMOS SOBREESCRIBIR EL METODO DEL PROTOTIPO PADRE EN EL HIJO
Perro.prototype.sonar2 =function(){
    console.log("SOY UN PERRO GUAU GUAU")
}
//creamos un nuevo metodo en la clase perro que se llame ladrar, y este 
//será exclusivo de Perro
Perro.prototype.ladrar = function(){
    console.log("GUAU GUAU");
}



//**********INSTANCIAS PARA EL METODO ANIMAL *******/
/*const snoppy2 = new Animal2("Snoopy","Macho");
const lolaBunny2 = new Animal2("Lola", "Hembra");
snoppy2.sonar2();
snoppy2.saludar2();
lolaBunny2.sonar2();
lolaBunny2.saludar2();*/

//***********PRUEBAS DE LA HERENCIA********* */
//debemos tomar en cuenta el nuevo parametro que agregamos
const snoppy2 = new Perro("Snoppy","Macho", "Mediano");
const lola = new Animal2("LolaBunny","Hembra")
console.log(snoppy2);
//metodos de snoppy mostrados al ser sobreescritos
snoppy2.sonar2();
snoppy2.saludar2();
snoppy2.ladrar();

//metodos con el prototipo padre 
console.log(" ")
lola.sonar2();
lola.saludar2();