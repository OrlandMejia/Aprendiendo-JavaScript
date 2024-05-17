/*
15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
*/

//15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
// Definición de la función para convertir entre binario y decimal, toma dos parámetros: el número y la base (2 para binario, 10 para decimal)
function convertirBinarioDecimal(numero, base) {
    // Verificar si se desea convertir de binario a decimal (base 2) o viceversa
    if (base === 2) {
      // Convertir binario a decimal
      let decimal = 0; // Inicializar la variable para almacenar el valor decimal
      let exponente = 0; // Inicializar el exponente que se usará para calcular el valor decimal
  
      // Iterar a través de cada dígito del número binario, empezando desde el último
      for (let i = numero.length - 1; i >= 0; i--) {
        let digitoBinario = parseInt(numero.charAt(i)); // Obtener el dígito binario en la posición actual y convertirlo a un número entero
        decimal += digitoBinario * Math.pow(2, exponente); // Sumar al valor decimal el producto del dígito binario por 2 elevado al exponente actual
        exponente++; // Incrementar el exponente para pasar al siguiente dígito binario
      }
  
      return decimal; 
      // Devolver el valor decimal convertido

    } else if (base === 10) {
      // Convertir decimal a binario
      let binario = ""; // Inicializar la cadena para almacenar el valor binario
      let cociente = numero; // Asignar el número decimal a una variable que se irá dividiendo
  
      // Iterar hasta que el cociente sea menor que 1
      while (cociente >= 1) {
        let residuo = cociente % 2; // Calcular el residuo de la división del cociente entre 2
        binario = residuo + binario; // Concatenar el residuo a la cadena binaria (se concatena al inicio para invertir el orden)
        cociente = Math.floor(cociente / 2); // Dividir el cociente entre 2 y redondear hacia abajo al entero más cercano
      }
  
      return binario; // Devolver el valor binario convertido
    } else {
      // Si la base no es 2 ni 10, arrojar un error
      return ("Base no válida: Debe ser 2 o 10");
    }
  }

  // Ejemplo de uso de la función: Convertir el número binario "110" a decimal
  console.log(convertirBinarioDecimal("110",5));
console.log(" ");
console.log("PROGRAMA QUE CALCULA DESCUENTOS");
  //16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, 
  //pe. miFuncion(1000, 20) devolverá 800.
  const descuento = (monto = 0, descuento = 0) =>{
    let montoFinal = 0;
    let porcentaje = 0;
    if(typeof monto != 'number' || typeof descuento != 'number'){
        console.log("Los valores ingresados deben ser Numeros!");
        return 0;
    }
    if(monto < 0 || descuento < 0){
        console.log("Debe ingresar un monto o un descuento Mayor a 0");
        return 0;
  }
  //calcular el porcentaje de descuento
  porcentaje = (descuento/100) * monto;
  //calcular el monto final
  montoFinal = monto - porcentaje;

  console.log(`El descuento del ${descuento}% a ${monto} es de: ${montoFinal}`);
}

descuento(58.6,20);
console.log(" ");
console.log("PROGRAMA QUE CALCULA AÑOS");
// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, 
//pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
function calcularEdad(fecha) {
    // Obtener el año actual
    const añoActual = new Date().getFullYear();
    // Obtener el año de la fecha proporcionada
    const añoFecha = fecha.getFullYear();

    // Restar el año actual al año de la fecha para obtener la edad
    const edad = añoActual - añoFecha;

    console.log(`${edad} años en ${añoActual}`)
}
calcularEdad(new Date(1984,4,23));