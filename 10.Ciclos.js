//*********ESTRUCTURAS REPETITIVAS (CICLOS)********* */
//WHILE
//ejemplo:
//una iteracion es una vuelta dentro del ciclo
//esta estructura es muy rara para utilizar
console.log("ESTRUCTURA WHILE")
let contador = 0;

while(contador < 2){
console.log(contador);
contador++;
}

//CICLO DO WHILE
//otra estructura muy pero muy rara de encontrar
//ejemplo
//aca primero ejecutaremos luego se evalua con forme a la primer condicion
console.log(" ")
console.log("ESTRUCTURA DO WHILE")
let contador1 = 4
while(contador1 < 8 ){
    console.log("while "+contador1)
    contador1++;
}
do{
    console.log("do while "+contador1);
    contador++;
} while(contador1 <2)

/*********************************ESTRUCTURA FOR******************************* */
console.log(" ")
console.log("ESTRUCTURA FOR")

//sintaxis
for(let i = 0; i<2; i++){

}

//ejemplo: recorrer un arreglo con un for
let numeros = [10,20,30,40,50,60,70,80,90];
for(let index = 0; index < numeros.length; index++){
    //console.log(numeros[index]);
}

//VARIANTES DEL FOR: forif
//es un loop que permite recorrer oiterar las propiedades de un objeto
//ejemplo: vamos a recorer un objeto de la siguiente manera
//FOR IF
console.log("FOR IN")
const orlando = {
    nombre: "Orlando",
    apellido: "Mejia",
    edad: 21
}
//aca colocamos una constante propiedad, dentro del objeto
for(const propiedad in orlando){
    //unicamente colocamos la propiedad,
    console.log(propiedad);
    //ahora vamos a imprimir la proiedad y su valor
    console.log(`Key: ${propiedad}, value: ${orlando[propiedad]}`)
    //de esta forma podemos imprimir los valores dentro de los atributos del objeto con las []

}
//VARIANTE for OF
console.log(" ")
let cadena = ["Hola Mundo"]
console.log("FOR OF ")
//el for of permite recorrer todos los elementos de cualquier objeto que sea
//iterable en javascript
for(const elemento of cadena){
    console.log(elemento)

}


