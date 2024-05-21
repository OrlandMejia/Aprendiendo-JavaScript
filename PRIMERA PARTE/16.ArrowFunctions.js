/*******ARROW FUNCTIONS******* */
//es una implementacion que mejora la manera de escribir una funcion
//es una función flecha, es una nueva forma de definir funciones anonimas
//que sean expresadas, 
/**estas funciones son otra manera de escribir una funcion anonima */

/**EJEMPLO de función expresada escrita normalmente */

const saludo = function(){
    console.log("Funcion expresada escrita normalmente")
}
const saludar = () =>{
    console.log("Funcion expresada con Arrow Function");
}
//OTRA FORMA DE ESCRIBIR UNA FUNCION ES DE LA SIGUIENTE FORMA MAS EXPRESIVA
const saludar2 = () => console.log("Otra forma de escribir");

//EJEMPLO CON UN PARAMETRO QUE PASA EL USUARIO
/**Cuando una función flecha NO RECIBE PARAMETROS es obligatorio colocar
 * los ( ) pero cuando recibe UN parametro ya NO ES NECESARIO:
 * con varios parametros si encerramos en parentesis
 
Esto tambien es un RETURN IMPLICITO*/
const nombre = nombre => console.log(`Hola ${nombre}`)


saludo();
saludar();
saludar2();
nombre("Orlando")

//otro ejemplo de una funcion flecha
//ACA LO HACEMOS UNA FUNCION EXPRESIVA NORMAL
const sumar = function(a,b){
    return a+b;
}
console.log(sumar(2,3));

//MISMA FUNCION CON UNA ARROW FUNCTION
//este tipo de funciones son un return explicito, es decir retorna automaticamente
const suma = (a,b) => a+b;

console.log(suma(9,9));

/**CUANDO UNA FUNCION EXPRESADA EN FORMA DE FLECHA TIENE VARIAS LINEAS
 * DE CODIGO DEBEMOS RESPETAR EL CUERPO DE UNA FUNCION NORMAL
 */
const funcionDeVariasLineas = () =>{
    console.log("Uno");
    console.log("Dos");
    console.log("Tres")
}
funcionDeVariasLineas();

/**
 * tambien podemos iterar en arreglos, en este caso queremos recorrer
 * cada posicion, podemos usar el metodo forEach para recorrerlos como 
 * el siguiente ejemplo
 */
const numeros = [1,2,3,4,5];
numeros.forEach(function(elemento,index){
    console.log(`El elemento ${elemento} esta en la posicion ${index}`)
});

/**ESTA MISMA FUNCION LA PODEMOS CONVERTIR A UNA ARROW FUNCTION 
 * 
*/
console.log(" ")
numeros.forEach((el,indice) =>
    console.log(` ${el} se encuentra en la posicion ${indice} con =>`)
)

/**OTRA CARACTERISTICA ES QUE TIENEN LA CAPACIDAD DE CAPTURAR EL OBJETO 
 * THIS DEL CONTEXTO EN EL QUE SE ENCUENTREN
 * EJEMPLO
 * como la funcion existe el objeto this, lo identifica como un ambito global
 * del windows
 */
console.log(" ")
function perro(){
    console.log(this)
}
perro();

/**En CAMBIO SI TENEMOS UN OBJETO 
 * en este caso this hace referencia al objeto que tiene dos propiedades


cuando colocamos una funcion flecha en cambio cambian el contexto en el que se
encuentran, en este caso la cambia a contexto global
saltan el contexto y heredan el contexto padre de donde son declarados
*/
console.log(" ")
console.log("THIS CON =>")
const perros = {
    nombre: "Firulais",
    //CON ESTA NUEVA FORMA DE COLOCAR LAS FUNCIONES SI RECONOCE EL CONTEXTO
    ladrar(){
        console.log(this)
    }
}
perros.ladrar();







