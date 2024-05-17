/*
12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F. */


//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, 
//pe. miFuncion(7) devolverá true.

const primo = (num = 0)=>{
    if(typeof num != 'number'){
        console.log(`EROR: "${num}" no es un numero`);
        return 0;
    }
    if(num <= 1){
        return false;
    }
    else{
        for(let i = 2; i <=Math.sqrt(num); i++){
            if(num % i == 0){
                return false;
            }
        }
    }
    return true;
}

console.log(primo(10));

//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
const parimpar = (num=0) =>{
    if(typeof num != 'number'){
        console.log(`EROR: "${num}" no es un numero`);
        return 0;
    }
    if(num%2==0){
        return "Par";
    }
    else{
        return "Impar";
    }
}
console.log(parimpar(28));

//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F. */

const convertidor = (valor = 0, tipo="") =>{
    let fa = 0;
    let ce = 0;
    if(typeof valor != 'number' || typeof tipo  != 'string'){
        console.log(`EROR: Datos ingresados no validos`);
        return 0;
    }

    switch(tipo.toLowerCase()){
        case "f":
            //Fahrenheit a Celsius
            ce = ((valor - 32) * (5/9));
            console.log(`${valor} Fahrenheit a Celcius ${ce.toFixed(6)}°C`);
        break;

            case "c":
                //Celsius a Fahrenheit
                fa = ((valor * (9/5))+32);
                console.log(`${valor} Celcius a Fahrenheit ${fa}°F`);
            break;

                default :
                    console.log("TIPO DE CONVERSIÓN NO VALIDO");
                    return 0;
    }
    /*if(tipo.toLowerCase() == "f"){
        //Fahrenheit a Celsius
        ce = ((valor - 32) * (5/9));
        console.log(`${valor} Fahrenheit a Celcius ${ce}°C`);
    }
    if(tipo.toLowerCase() == "c"){
        //Celsius a Fahrenheit
        fa = ((valor * (9/5))+32);
        console.log(`${valor} Celcius a Fahrenheit ${fa}°F`);
    }
*/
}
convertidor(20,"c");
