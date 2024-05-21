/*****PROTOTIPOS****** */
/**JAVA ES UN LENGUAJE MULTIPARADIGMA */

//En Programacion Orientada a Objetos POO
/**Existen 4 conceptos muy importantes para entender
 * 1.CLASES: es un modelo a seguir, como esquema y basarnos, para poder
 * generar instancias
 * 2.OBJETOS: Atributos y metodos, es una instancia de una clase, es una
 * copia de ese modelo para aplicarlo al mundo real
 *      Atributo: es una caracteristica o propiedad del objeto
 *      so variables dentro de un metodo
 *      Metodos: son las acciones que un objeto puede realizar
 *      funciones dentro de un objeto
 */

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


/**CREAMOS UNA FUNCION CONSTRUCTORA */
//escrito con UpperCamelCase
/**si necesitamos pasar propiedades ala funcion constructura
 * los debemos pasar como parametros de la propia funcion
 */

/**FUNCION CONSTRUCTORA VERSION 1 */
function Animal(nombre,genero){p
    //atributos, this que indica que segun lo que pase el usuario por los
    //parametros ese valor toma en el atributo
    this.nombre = nombre;
    this.genero = genero;
    //cuando trabajemos con funciones constructoras, tanto los atributos
    //como los metodos deben colgar del metodo this
    this.sonar = function(){
        console.log(`${this.nombre} hago mucho RUIDOOOOOOO`)
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
snoppy.sonar();
lolaBunny.sonar();
console.log(" ")

/**lo ideal es que nuestras fucniones constructoras tengan solo los atributos 
 * ESTA FUNCION ASIGNAREMOS LOS METODOS AL PROTOTIPO, NO A LA FUNCION COMO TAL
*/
function Animal2(nombre,genero){
    //atributos, this que indica que segun lo que pase el usuario por los
    //parametros ese valor toma en el atributo
    this.nombre = nombre;
    this.genero = genero
}
//cuando trabajemos con funciones constructoras, tanto los atributos
    //como los metodos deben colgar del metodo this
    /**metodos agregados al prototipo de la funcion constructora
     * con la palabra reservada prototype
     */
Animal2.prototype.sonar2 = function(){
    console.log(`${this.nombre} hago mucho RUIDOOOOOOO`)
}

const snoppy2 = new Animal("Snoopy","Macho");
const lolaBunny2 = new Animal("Lola", "Hembra");

snoppy2.sonar();
lolaBunny2.sonar();