/**********CLASES Y HERENCIAS************ */
/**javascript es un lenguaje orientado a objetos, basado en prototipos
 * 
 ahora vamos a cambiar la funcin constructora animal y la convertiremos
 a una clase
*/
/**las clases no reciben parametros, para eso tienen un metodo especial
 * que se llama constructuor
 */

class Animal{
    //El constructor de una clase es un metodo especial que se ejecuta
    //en el momento de instanciar la clase
    constructor(nombre, genero){
        //atributos
        this.nombre = nombre;
        this.genero = genero
    }
    
    //los metodos si pueden recibir parametros
    sonar(){
        console.log(`${this.nombre} hago mucho RUIDOOOOOOO`)
    }
    saludar(){
        console.log(`Hola me llamo: ${this.nombre} y soy: ${this.genero}`)
    }
}
console.log(" ");
//creacion de la clase Perro que heredará de Animal
//con la palabra extends damos a enteder de donde estara heredando
class Perro extends Animal{
    constructor(nombre, genero, tamano){
        //super es un metodo que manda a llamar al constructor de la clase
        //padre
        super(nombre, genero);
        this.tamano = tamano;
    }
    //sobreescritura de un metodo
    sonar(){
        console.log(`Soy ${this.nombre} y mi sonido es un ladrido GUAAUU GUAUU`)
    }
    //metodo propio de la clase perro
    ladrar(){
        console.log("GUAAAAAAU GUAAAAAAAAU GUAU")
    }
}




//creacion de instancias
const mimi = new Animal("Mimi","Hembra");
const scobby = new Animal("Scobby","Macho");

//INSTANCIAS CON LA CLASE PERRO QUE HEREDA DE ANIMAL
const Scobby2 = new Perro("Scobby Doo", "Macho", "Grande");

//como hacer la herencia
//super es un metodo que nos permite invocar al constructor de la clase que se hereada

//llamado de metodos
mimi.saludar();
mimi.sonar();

console.log(" ");

scobby.saludar();
scobby.sonar();

console.log(" ");
//llamado de metodos de perro
Scobby2.sonar();
Scobby2.ladrar();