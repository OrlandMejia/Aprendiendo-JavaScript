/*
 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
*/

//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, 
//pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const potencia = (array = []) =>{
    if(!array.length){
        console.log("Arreglo vacio, de uno con datos");
        return 0
    }
    let resultado = array.map(valor => valor*valor);
    console.log(resultado);
}

potencia([1,4,5]);

//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, 
//pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
const MaximoMinimo = (array = []) =>{
    if(!array.length){
        console.log("Arreglo vacio, de uno con datos");
    }
    let numeroMayor = Math.max(...array); 
    let numeroMenor = Math.min(...array);
    let numeros = [numeroMayor,numeroMenor]
    console.log(numeros);
}

MaximoMinimo([1, 4, 5, 99, -60]);

//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números 
//pares y en el segundo los impares, 
//pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const comparar = (array = []) =>{
    if(!array.length){
        console.log("Arreglo vacio, de uno con datos");
    }
    let pares = array.filter(valor => valor % 2 === 0);
    let impares = array.filter(valor => valor % 2 !== 0);
    let resultado = {pares, impares}
    console.log(resultado);
}

comparar([1,2,3,4,5,6,7,8,9,0]);
