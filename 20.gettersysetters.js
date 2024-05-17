/******Métodos estáticos, getters y setters***********/
//caracteristicas private en JS no existe, todo es clase publica
//pero hay ciertas caracteristicas que si existen en la escritura de clases

/**METODOS ESTATICOS
 * es aquel que se puede ejecutar sin la necesidad de instanciar la clase
 * 
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
        //variable para ejemplo getters y setters
        this.raza = null;
    }
    //sobreescritura de un metodo
    sonar(){
        console.log(`Soy ${this.nombre} y mi sonido es un ladrido GUAAUU GUAUU`)
    }
    //metodo propio de la clase perro
    ladrar(){
        console.log("GUAAAAAAU GUAAAAAAAAU GUAU")
    }

    //*******METODOS ESTATICOS********** */
    /**para volver un metodo estatico usamos STATIC 
     * podemos usarlo sin la necesidad de crear una instancia o un objeto 
     * a la que pertenece la clase
    */
    static queEres(){
        console.log("Los perros somo animales mamiferos y somos conocimos como el mejor amigo del hombre");
    }

    /*****METODOS SETTERS Y GETTERS******* 
     * son metodos especiales que nos permiten establecer y obtener los valores
     * de atributos de nuestra clase
     * ESTOS METODOS LOS VAMOS A UTILIZAR COMO SI FUERAN ATRIBUTOS
    */
   //METODO OBTENEDOR
    get getRaza(){
        /**un metodo obtenedor lo que hará es retornar el valor en cuestion */
        return this.raza;
    }
    //METODO ESTABLECEDOR que modifique el valor de dicha propiedad
    set setRaza(raza){
        this.raza = raza;
    }



}

//invocar METODO ESTATICO
Perro.queEres();





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

//EJECUTAR METODO GET RAZA, despues de la creacion de instancias
console.log(Scobby2.getRaza);
Scobby2.setRaza = "Gran Danes";
console.log(Scobby2.getRaza);