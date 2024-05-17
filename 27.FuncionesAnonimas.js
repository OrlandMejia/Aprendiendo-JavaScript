// clase veintisiete FUNCIONES ANONIMAS AUTOEJECUTABLES
// una función anónima es aquella donde englobamos todo lo que querramos ejecutar

//FUNCION ANONIMA AUTOEJECUTABLE
//se coloca entre parentesis la funcion anoima y entre parentesis externo es donde se ejecutará la función, siempre usar punto y coma
//FORMAS DE ESCRIBIR FUNCIONES ANONIMAS
//CLASICA
(function(){
    console.log("Mi primer IIFE");
})();

//en la deficinicion de la función podemos colocarle los parametros a recibir, en ete ejemplo le asignamos las variables a los objetos globales window, document etc.
(function(d,w,c){
    console.log("Mi segunda IIFE");
    console.log(d);
    console.log(w);
    c.log("Este es un console.log");
})(document,window,console);

//LA CROCKFOR (JS THE GOOD PARTS)
((function (){
    console.log('version crockford')
})());

//UNARIA
+function(){
    console.log("version unaria")
}();

//FACEBOOK
!function(){
    console.log("version facebook")
}();
