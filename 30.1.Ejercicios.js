/*Crear una funcion que reciba dos numero como parametros y devuleva el mayor de ellos */
const numeroMayor = (numero1 =0, numero2=0) => {
    //agregamos una validacion para ver que sean solo numeros y no cadenas de texto
    if(typeof numero1 !== 'number' || typeof numero2 !== 'number'){
        console.log("Ingrese numeros validos")
        return;
    }
    if(numero1 == numero2){
        console.log("ambos numeros son iguales")
    }
    if(numero1 > numero2){
        console.log(`el numero mayor es ${numero1}`) 
    }else{
        console.log(`el numero mayor es ${numero2}`)
    }
} 
//llamamos la funcion con diferentes parametros
numeroMayor(5,"7");
numeroMayor(5,8);
numeroMayor(5,1);

/*
Crea una funcion que tome como argumento y devuelva la cadena si el numero es par o impar
 */

const parImpar = (numero=0) => (numero%2==0) ? console.log(`El numero ${numero} es par`) : console.log("el numero es impar");

//mandamos a llamar la funcion
parImpar(5)

/**
 * Crea una funcion que reciba tres numeros como parametros y devuelva su promedio
 */
const promedio = (num1=0, num2=0, num3=0)=>{
    const promedios = (num1+num2+num3)/3;
    console.log(`el promedio es de: ${promedios}`)
}
//mandamos a llamar la funcion
promedio(5,5,5);

/**
 * crea una funcion que calcule la longitud de una palabra si es corta o larga
 */

//forma 1 con metodo
const palabrasCortasLargas =(palabra ="")=>{
    if(palabra.length > 5){
        console.log(`La palabra: ${palabra} es LARGA porque tiene mas de 5 letras`)
    }else{
        console.log(`La palabra: ${palabra} es CORTA porque tiene menos de 5 letras`)
    }
}

//palabrasCortasLargas("dosTRESSS");

//forma 2 con logica
function contarPalabra(txt=""){
    let contador = 0;
    for(let i=0; i<txt.length; i++){
        contador++;
    }
    if(contador > 5){
        console.log(`La palabra: ${txt} es LARGA porque tiene mas de 5 letras tiene ${contador}`)
    }else{
        console.log(`La palabra: ${contador} es CORTA porque tiene menos de 5 letras tiene ${contador}`)
    }
}
contarPalabra("doss")

