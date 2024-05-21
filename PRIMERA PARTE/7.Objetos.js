//**************OBJETOS EN JAVASCRIPT********** */

/* frase: en javascript todo es un objeto*/

//declarar una variable como objeto es muy adecuado declararlos con const
const b = {}
console.log(typeof b)

//un objeto es una coleccion de llaves, valores, los objetos se definen con llaves
//un objeto puede tener cualquier tipo de datos, incluso una funcion
/* los objetos dentroi de un objeto a las variables se le van a llamar
atributos/propiedades y a las funciones se les llama metodos
todos los metodos son funciones de un objeto */

//ejemplo, crear un objeto con mis datos
const orlando = {
    nombre: "Orlando",
    apellido: "Mejia",
    edad: 21,
    pasatiempos: ["Correr","Dibujar","Aprender"],
    soltero: true,
    //podemos crear otro objeto adentro
    contacto:{
        email:"orlandmejia374@gmail.com",
        twitter:"orlandmejia1",
        telefono:"59626761"
    },
    //tambien podemos asignar funciones dentro del objeto
    saludar: function(){
        console.log("Hola")
    },
    //CREAMOS OTRA FUNCION DECIR MI NOMBRE
    decirminombre: function(){
        //vamos a concatenar propiedades dentro del objeto
        //para eso utilizamos la palabra reservada this
        //this se usa para hacer referencias al mismo objeto
        console.log(`Hola me llamo: ${this.nombre} ${this.apellido}
        y tengo ${this.edad} años y me puedes seguir como 
        ${this.contacto.twitter} en twitter :)`)
    }
}

//ahora mandamos a llamar al objeto
console.log(orlando)

//FORMAS DE ACCEDER A LOS VALORES DE LOS OBJETOS
//podemos para acceder puntos o corchetes
//corchetes []
console.log(orlando["nombre"])//no es muy utilizada
//punto .
console.log(orlando.nombre)
console.log(orlando.pasatiempos)
console.log(orlando.soltero)
//accedemos al contacto que es un objeto dentro de otro objeto
console.log(orlando.contacto)
console.log(orlando.contacto.twitter)

//para llamar a la muncion lo hacemos de la siguiente manera
orlando.saludar()
orlando.decirminombre()

//ALGUNOS METODOS DE LOS OBJETOS
console.log(" ")

//metodo keys espera recibir un objeto y permite listar todas las llaves del objeto
console.log(Object.keys(orlando))

//metodo muy parecido el cual es values
//forma un arreglo que nos da los valores
console.log(Object.values(orlando))

//otra propiedad permite saber si un objeto tiene otra proiedad
//metodo hasOwnProperty
console.log(orlando.hasOwnProperty("nombre"))
//lanza true o false que indica que si existe dentro del objeto
console.log(orlando.hasOwnProperty("nacimiento"))
//en este caso es false ya que no existe dentro del objeto


