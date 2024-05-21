/*
24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
*/

//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros 
//ordenados en forma ascendente y el segundo de forma descendiente, 
//pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

const orden = (array = []) =>{
    if(!array.length){
        console.log("Ingrese un arrego con datos");
        return 0
    }
    let arrayasc = array.slice(); // copia el array original
    let arraydesc = array.slice();
    let asc = arrayasc.sort((a,b)=>a-b);
    let desc = arraydesc.sort((a,b)=>b-a);

    let resultado = {
        asc,
        desc
    }

    console.log(resultado);
}
orden([7, 5,7,8,6]);

//25) Programa una función que dado un arreglo de elementos, elimine los duplicados, 
//pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const eliminarDuplicados = (array = []) =>{
    if(!array.length){
        console.log("Ingrese un arrego con datos");
        return 0
        }
        let arraySinDuplicados = [...new Set(array)];
        console.log(arraySinDuplicados);
}

eliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);

//26) Programa una función que dado un arreglo de números obtenga el promedio, 
//pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
const promedio = (array = []) =>{
    if(!array.length){
        console.log("Ingrese un arrego con datos");
        return 0
        }
    let promedio = array.reduce((a,e)=>a+e,0);
    let resultado = promedio / array.length;
    console.log(resultado);
}

promedio([9,8,7,6,5,4,3,2,1,0]);


