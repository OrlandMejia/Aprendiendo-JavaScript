//crearemos funciones artimeticas para utilizarlas en otro archivo

//estas funciones las englobamos en el objeto aritmetica por lo que no es necesario exportarlas individualmente
function sumar(a,b){
    return a+b;
}

function restar(a,b){
    return a-b;
}

//CREAMOS UN OBJETO PARA TAMBIEN USARLO
export const aritmetica = {
    //es porque el valor y la propiedad son iguales
    sumar,
    restar
};

//tambien alguna funcion o variable se puede importar por defecto
