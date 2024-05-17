/*********OBJETO DATE************** */

//detecta la hora local
console.log(Date());

//lo ideal es guardarlo en una variable
let fecha = new Date();
console.log(fecha);

//ejecutar dia del mes, lo escribe como numero
console.log(fecha.getDate());

//guarda los datos en un arreglo, iniciando siempre en el 0
//ejecutar el día de la semana en la que nos encontramos lo presenta en numeros
// D,L,M,M,J,V,S = 0,1,2,3,4,5,6,7
console.log(fecha.getDay());

//Obtener el mes
//en este caso, es tres, porque enero lo toma como numero 0 
console.log(fecha.getMonth());

//obtener el año
console.log(fecha.getFullYear());

//Obtener horas, minutos, segundos y milisegundos
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());

//METODOS PARA BOTENER LA FECHA DE MANERA VISIBLE PARA EL SER HUMANO
console.log(fecha.toString());
//derivado de esto podemos obtener solo ciertos datos
console.log(fecha.toDateString());
//obtener hora y fecha local
console.log(fecha.toLocaleString());
//mostrar solo la fecha local
console.log(fecha.toLocaleDateString());
//mostrar solo la hora local
console.log(fecha.toLocaleTimeString());

//metodo para obtener el uso horario
console.log(fecha.getTimezoneOffset());

//obtener los datos de la hora cero en GTM
console.log(fecha.getUTCDate());
console.log(fecha.getUTCHours());

//Metodo con now, timeStamp, tira los segundos que han pasado desde la hora cero
console.log(Date.now());

//LIBRERIA MOMENT JS (buscar en google) es una libreria potente que maneja diversos formatos de expresion de tiempos

//CALCULAR EL MOMENTO DE AHORA A MI FECHA DE NACIMIENTO
//podemos pasarle varios parametros
let cumple = new Date(2001,2,13);
console.log(cumple)