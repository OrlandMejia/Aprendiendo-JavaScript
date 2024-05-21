/******USO DEL BREAK Y CONTINUE******** */
//NOS VAN A AYUDAR A CONTROLAR UN POCO EL FLUJO DE NUESTRAS ESTRUCTURAS DE
//CONTROL POR EJEMPLO UN LOOP, hasta llegar a cierto numero de repeticiones
//saltar la estructura, en base a un patron

//ejemplo
const numeros = [1,2,3,4,5,6,7,8,9,0];
//break
console.log("recorrido con BREAK");
for(let i = 0; i < numeros.length; i++){
    if(i === 5){
        break;
        //para el programa cuando llegue el conteo a 5
    }
    console.log(numeros[i]);

}
console.log(" ")

//continue
console.log("recorrido con CONTINUE");
for(let i = 0; i < numeros.length; i++){
    if(i === 5){
        continue;
        //lo que hace es que no dice que salga del programa, solo hace que se
        //omita la iteración del ciclo, es decir, que la posicion que vale 5
        //se salta esa posición por eso no aparece el 6, porque recorre posiciones
    }
    console.log(numeros[i]);

}

//EJERCICIO:
/*Programaque muestre los numeros pares con el uso de continue y break */
const datos = [0,1,2,3,4,5,6,7,8,9];

for(let x = 0; x < datos.length; x++){
    if(datos[x] % 2 !== 0){
        continue;
    }
    console.log("los numeros pares son: ",datos[x])
}