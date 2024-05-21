    //**********CADENAS DE TEXTO aka Stirings*******
        //pueden ser comillas simples o comillas dobles
        let nombre = "Orlando"
        let apellido = 'Mejia'
        let lorem = "lorem ipsum, dolor sit   amet consectetur adipisicing elit. Est, et dolorum. Adipisci sequi, voluptates"



        //PERO ESTO ES POR NINES DE ENSEÑANZA YA QUE NADIE LA USA
        //una manera mas formal de declarar una cadena es con un constructor
        let saludo = new String("Hola Mundo")
        //new es un operador, sirve para crear un objeto nuevo de un tipo de dato

        //imprimos varios dados para ver los resultados
        console.log(nombre,apellido,saludo)
        
        //PROPIEDAD LENGTH lo que hace es que cuenta el total de elementos de un arreglo, 
        console.log(nombre.length,
            apellido.length,
            saludo.length,
            nombre.toLocaleUpperCase(),
            apellido.toLocaleLowerCase(),)

        //EJEMPLO PARA FORZAR AL USUARIO A ESCRIBIR TODO EL MAYUSCULAS
        //UTILIZANDO EL METODO toUpperCase() 
        //y para minusculas usamos toLowerCase()
        
/*AHORA VAMOS A VER SI UNA PALABRA EXISTE DENTRO DE UNA CADENA DE TEXTO
CON LA FUNCION includes(), y devuelve un valor tipo TRUE o FALSE*/
            console.log(lorem.includes("amet"))
            console.log(lorem.includes("jon"))

/*AHORA VAMOS A UTILIZAR OTRA FUNCION QUE ES trim()
esta lo que hace es quitar los espacios en blanco de los caracteres*/
console.log(lorem.trim(" "))

/* EL METODO SPLIT lo que hace es que parte y genera un arreglo
y genera un separador */
console.log(lorem.split())


//*******************CARACTERISTICAS DE LAS CADENAS DE TEXTO tempale String ************///

//CONCATENACION LA UNION DE DOS VARIABLES DE TIPO CADENA MAS USUALMENTE
//Ejemplo
let nombre1 = "Orlando"
let apellido1 = "Mejia"

//tambien otra forma para concatenar es variable += (lo que se concatenará)
//Concatenación
let saludos = "Hola mi nombre es con Concatenar: "+ nombre1+" "+apellido1+"."
console.log(saludos)

//ESTA FORMA ES MUY CANSADA ASI QUE TAMBIEN PODEMOS HACER LO SIGUIENTE:
//interpolación de Variables, que es poner dentro de una cadena el valor dinamico de una variable
//para esto usamos Template String y el acento invertido  `
//y usamos ${} con la siguiente sintaxis
let saludo1 = `Hola mi nombre es con interpolacion: ${nombre1} ${apellido1}.`
console.log(saludo1)
//las template string permite realizar saltos de lineas dentro de una cadena
