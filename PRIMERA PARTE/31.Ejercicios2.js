/**
 * 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) 
devolverá true.
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos 
    los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
 */

//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
function getRandomNumberBetweenFiveHundredAndSixtyOneAndSixHundred() {  
    const min = 501;
    const max = 600;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumberBetweenFiveHundredAndSixtyOneAndSixHundred(5));

//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
const capicua = (cadena=0) => {
    if (typeof cadena != 'number') {
        console.log("La cadena introducida no es numérica");
        return 0;
    }
    let cadenas = cadena.toString();
    let  reversed= cadenas.split("").reverse().join(""); //Convertir la cadena a array con split, luego invertir el array con reverse y vol
    //comprobar si la cadena es numerica o no
    if(reversed == cadena){
        console.log(`El numero ${cadena} es capicula`,reversed);

    }
    else{
        console.log(`El numero ${cadena} no es capicúa`);
    }
}
capicua(121);

/*11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos 
    los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
    FACTORIAL 5 = 5*4*3*2*1 = 
    */

const factorial = (num = 0) => {
    if(typeof num != 'number' || num <= 0){
        console.log("error: el dato ingresado no es Valido");
        return 0;
    }
    let result = 1;
    for(let i = 1; i<= num ;i++){
       result *= i;  
    }
    console.log(result);
}
factorial(0);
