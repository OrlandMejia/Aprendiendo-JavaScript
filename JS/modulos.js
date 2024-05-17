//ARCHIVO PARA LA CLASE DE ARCHIVOS DE MODULO JS
/**
 * ORDENAMIENTO DE CODIGO
 * 1. Importación de modulos
 * 2. Declaración de variables
 * 3. Declaración de funciones
 * 4. Ejecución de código
 */

//forma de mandar a llamar  el archivo, importarlo y utilizarlo en la clase
//COLOCAMOS IMPOR LUEGO EL NOMBRE DE LA FUNCION A EXPORTAR EN {} LUEGO FROM LUEGO EL ./ DE LA CARPETA ACTUAL SINO SE ESCALA ././ LUEGO EL NOMBRE DEL ARCHIVO
//aca tambien hay ejemplo de como exportar funciones, en este caso es saludar
import saludar, { Saludar,PI, usuario } from "./constantes.js";

//import saludar, { PI, usuario } from "./constantes.js";

//tambien podemos colocarle alias
import { aritmetica as calculos} from "./aritmetica.js";


console.log("archivo de modulos.js");
console.log("valor PI importado de otro archivo JS: ", PI);
console.log("usuario definido en otros archivo JS: ", usuario);

//tambien podemos exportar de manera de objeto
//funciones
console.log("SUMA HECHA CON MODULOS: ", calculos.sumar(4,4));
console.log("RESTA HECHA CON MODULOS: ", calculos.restar(8,2));
console.log("SUMA 2 DE EXPORTACIÓN; ", calculos.sumar(8,8));

//mandamos a llamar la funcion saludar por default
saludar();

//creamos una variable para guardar el objeto saludar
let saludo = new Saludar();
saludo;

//tambien podemos utilizar alias