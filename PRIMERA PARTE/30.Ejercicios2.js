/**
 * **********************************EJERCICIOS PARA REALIZAR********************************************
5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
 */



//****************************MIS SOLUCIONES********************************* */
//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const palabraReversa = (palabra="") => 
(!palabra)
    ? console.log("No ingresaste ninguna cadena")
        : (typeof palabra !== 'string') 
            ? console.log("Debe ingresar una cadena de texto valida")
                : palabra.split("").reverse().join("");

console.log(palabraReversa("0011"));

/*
//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, 
pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
*/

function contadorPalabras(texto, busqueda){
     let arrayTexto=texto.toLowerCase().split(' ') //Convierte todo a minúsculas y separa por espacios
     let count=0;
      for (let i=0 ;i<arrayTexto.length;i++){
          if (arrayTexto[i]===busqueda) {count++}
       }
   return count
}
//console.log(contadorPalabras ("Hola Mundo Adios Mundo", "mundo"));

const contarPalabras = (text="", buscar="") =>{
	let contador = 0;
	let cadena=text.split(' ');

    if (!text  || !buscar){ 
         console.log("Ingrese los datos faltantes") 
		 return; }
    
            if ( typeof text!=='string' || typeof buscar!=='string'){
            console.log("Los parametros deben ser cadenas de texto")
				return; }
			
			for(let x=0; x<cadena.length; x++){
				if (cadena [x] === buscar ){
					contador++;
				}
			}
return console.log(`Las coincidencias de la palabra: "${buscar}", fueron: ${contador}`); 
}
contarPalabras ("Hola HOla Hola Mundo Adios Mundo","HOla");

/*
7) Programa una función que valide si una palabra o frase dada, es un palíndromo 
(que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
*/
function esPalindromo(palabra){
    palabra=palabra.replace(/ /g,"").toLowerCase(); //Elimina los espacios y convierte a minusculas
    let invertida=""
    for (let i=palabra.length-1; i>=0; i--) {
        invertida+=palabra[i];
    }
    if (invertida===palabra) {return true;} else {return false};
}
console.log(esPalindromo("salas"));

function Palindromo(palabra=""){
	if(!palabra){
		return console.log("No ingreso ninguna palabra para verificar.")
	}
	if(typeof palabra!=='string'){
		return console.log("La entrada debe ser una cadena de texto.");
	}
	let cadena = palabra.toLowerCase().split(" ").reverse().join('')
	if(cadena === palabra){
		return true; 
	}else{return false;}
	
}
console.log(Palindromo("anita lava la tina"));

const palindromo = (txt="") => {
	let array = "";
	(!txt) ? console.log("ingrese un dato") : (typeof  txt !== 'string') ? console.log("el dato debe ser una cadena"): 
	array = txt.toLowerCase().split('').reverse().join('');

	if(array === txt){
		return true;
	}
	else{
		return false;
	}
}
//console.log(palindromo(5));

/*
//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/
const eliminarPatrronDeCaracteres=(texto,patrton)=>{
   return texto.replace(new RegExp(patrton,"g"),"");
}
console.log(eliminarPatrronDeCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5","xyz"))

//9) Diseña e implementa en JavaScript una función que devuelva el mayor común divisor (mcd) de dos números enteros.
const maximoComunDivisor = (numeroUno, numeroDos) => {
    let i=1;
    while(i<=numeroUno && i <= numeroDos){
        if(numeroUno % i ==0 && numeroDos % i ==  0 )
            return i;
        else
           i++;
     }          
}

console.log(maximoComunDivisor(97,72))




