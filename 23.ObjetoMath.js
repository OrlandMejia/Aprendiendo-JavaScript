/***OBJETO MATH***/


//imprimiendo directamente el objeto math
console.log(Math);
//metodos de objeto MATH
console.log(Math.PI);

//abs devuelve el valor absoluto
console.log(Math.abs(-7.8));

//metodos para redondear numeros es decir aproximarlos 7.8 -> 8
console.log(Math.ceil(7.8));
//este metodo hace lo contrario de ceil
console.log(Math.floor(7.8));
//redondea al numero mas cercano
console.log(Math.round(7.5));

//para sacar raiz cuadrada
console.log(Math.sqrt(81));

//para elevar numeros
console.log(Math.pow(2, 5));

//indica que si un numero es negativo, cero o positivo, devuleve -1, 0, 1
console.log(Math.sign(80));

//metodo random que da un valor aleatorio, comprendido entre 0 y 1
console.log(Math.random());

//EJEMPLO DONDE HARIAMOS NUMEROS ALEATORIOS DE 0 A 1000***************
console.log(Math.random()*1000);
//este mismo ejemplo solo que utilizando metodos para redondear los numeros
console.log(Math.round(Math.random()*1000));

console.log(Math.ceil(Math.random()*1000));
