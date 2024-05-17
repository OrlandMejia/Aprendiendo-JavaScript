/*****PROPIEDADES ALERT, CONFIRM Y PROMPT*****************/

//METODOS QUE SON PARA INTERACTUAR CON EL USUARIO
//DERIVAN DEL METODO PADRE WINDOW
console.log(window);
//muestra un mensaje en una ventana de window
window.alert("Hola esto es una alerta");
//muestra un mensaje de cnfirmacion con confirmar y cancelar
window.confirm("esto es una confirmación");
//nos permite ingresar datos en teclado
window.prompt("Ingresa un Valor")

//se pueden ejecutar sin la necesidad de colocar el window
/*
alert("esto es un aler");
confirm("esto es un confirm");
prompt("ingrese un dato"); 
*/

//ahora los vamos a guardar en variables
//muestra un mensaje en una ventana de window
let alerta = window.alert("Hola esto es una alerta");
//muestra un mensaje de cnfirmacion con confirmar y cancelar
let confirmacion = window.confirm("esto es una confirmación");
//nos permite ingresar datos en teclado
let ingreso = window.prompt("Ingresa un Valor");

console.log(alerta);
console.log(confirmacion);
console.log(ingreso);