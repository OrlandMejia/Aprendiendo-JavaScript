/*****OPERADOR DE CORTO CIRCUITO***************/
//funcionan poniendo dos condiciones ya sea con or, and


//CORTOCIRCUITO OR: cuando el valor de la izquierda en la expresión siempre pueda validar a true, es el valor que se cargará por defecto
//esto asigna valores por defecto en caso en el que no existe un valor asignado
function saludar(nombre){
    nombre = nombre || "Desconocido";
    console.log(`Hola Como estas ${nombre}`);
}
saludar("Orlando");
saludar();
//aca esto es como si valorará siempre que el primero sea true, al contraro se colocaría el valor de la derecha 
console.log("Hola" || "como estas");
console.log(0 || "valor de la derecha");


//CORTOCIRCUITO AND: cuando el valor de la izquierda en la expresión siempre pueda validar a false, es el valor que se cargará por defecto
console.log(19 && "valor de la derecha");
console.log(0 && "valor de la derecha");

const sumar = (num1,num2) =>{
    let resultado = num1 + num2;
    (resultado > 50 && resultado < 100) ? console.log("el numero está entre los parametros permitidos") 
    : console.log("el numero no llega a 50 y se excede de 100");
    return resultado;
}

console.log(sumar(25,26));
