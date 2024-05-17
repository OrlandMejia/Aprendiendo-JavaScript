/************CONDICIONALES********* */
//UNA ESTRUCTURA DE CONTROL ES AQUEL MECANISMO QUE PERMITE CONTROLAR EL FLUJO DE LA PROGRAMACION

// if, else

//ejemplo: la mayoria de edad
let edad = 19

if(edad > 17){
    console.log("Es mayor de edad")
}else{
    console.log("eres menor de edad")
}

// if-else if-else
//ejemplo if anidados
/*
-Dejame Dormir = 0hrs - 5hrs 
-Buenos dias = 6hrs - 11hrs
-Buenas tardes = 12hrs - 18hrs
-Buenas noches = 19hrs - 23hrs */
let hora = 21;
if(hora >= 0 && hora <=5){
    console.log("Dejame Domir")
}else if(hora >= 6 && hora <= 11){
    console.log("Buenos dias")
}else if(hora >= 12 && hora <= 18){
    console.log("Buenas Tades")
}else {
    console.log("Buenas noches")
}

//Simplificacion del if else
//se llama operador ternario
//tiene tres partes, una condicion (), ? verdadero : falsa
//el ejemplo anterior lo resolveremos con un operador ternario
console.log(" ")
console.log("OPERADOR TERNARIO")
let eresMayor = (edad >= 18 ) 
? "Eres mayor de edad" 
: "Eres menor de edad"
console.log(eresMayor)

//ESTRUCTURA switch-case
//nos sirve cuando tengamos que evaluar una situacion donde tengamos diferentes valores 
//para una misma variable
//ejemplo
console.log(" ")
/*
Domingo = 0
Lunes = 1
Martes = 2
Miercoles = 3
Jueves = 4
Viernes = 5
Sabado = 6 */
let dia = 8

switch(dia){
    case 0:
        console.log("Domingo")
        break;
        case 1:
            console.log("Lunes")
            break;
            case 2:
                console.log("Martes")
                break;
                case 3:
                    console.log("Miercoles")
                    break;
                    case 4:
                        console.log("Jueves")
                        break;
                        case 5:
                            console.log("Viernes")
                            break;
                            case 6:
                                console.log("Sabado")
                                break;
                                //si no es ninguno de los casos cae al valor por defecto
                                default:
                                    console.log("El día no existe")
                                    break;
}

