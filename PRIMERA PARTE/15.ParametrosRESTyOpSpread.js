/********PARAMETROS REST Y OPERADOR SPREAD **********/
//operador de propagacion
/**los parametros REST son una forma de virutalmente ir agregando
 * parametros infinitos dentro de una funcion o de una variable para luego
 * procesarlos
 */
//para definir un parametro REST es de la siguiente manera con ...x

//funcion que permita sumar pero no sabemos cuantos valores vamos a recibir
function sumar(a,b,...c){
let resultado = a + b;

//el foreach lo que hace es recorrer funciones
c.forEach(function(n){
    resultado += n;
});
return resultado;
}
//recibe parametros dinamicos y se ejecutaran en la funcion
console.log(sumar(1,2))
console.log(sumar(1,2,3))
console.log(sumar(1,2,3,4))
console.log(sumar(1,2,3,4,5))

//OPERADOR DE PROPAGACION SPREAD OPERATION
//en ocaciones donde tengamos que almacenar multiples elementos o argumentos
//tambien usan los puntos suspensivos ...
console.log(" ")

const arr1 = [1,2,3,4,5],
      arr2 = [6,7,8,9,0];

console.log(arr1,arr2)
//ahora suponamos que debemos crear un arreglo 3 en base de esos dos elementos
//si queremos que se expanga en los elementos o valores que tengan en realidad
console.log(" ")
const arr3 = [...arr1,...arr2]
console.log(arr3)