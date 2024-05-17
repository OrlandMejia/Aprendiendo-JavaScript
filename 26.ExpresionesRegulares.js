/*
EXPRESIONES REGULARES
Una secuencia de caracteres que forma un patron de busqueda, usado en la busqueda de cadenas de texto
*/

//como definimos una expresión regultar

//cadena de texto

let cadena ="Lorem ipsum dolor sit amet,042 consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla lorem. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"

// funcion constructora la g significa global, y significa que seguira iterando en todo el texto, y busca todas las coincidencias
//PRIMERA FORMA DE UTILIZAR EXPRESIONES REGULARES
/*
let expReg = new RegExp("lorem","ig");
//metodos de expresiones, test, para probar que exista la cadena
console.log(expReg.test(cadena));
//metodo exc devuelve un arreglo  con las coincidencias encontradas con sus datos puestos
console.log(expReg.exec(cadena));
*/

//segunda manera de expresar una expresion regulta
let expReg2 =/lorem{3}/ig;

//metodos de expresiones, test, para probar que exista la cadena
console.log(expReg2.test(cadena));
//metodo exc devuelve un arreglo  con las coincidencias encontradas con sus datos puestos
console.log(expReg2.exec(cadena));

