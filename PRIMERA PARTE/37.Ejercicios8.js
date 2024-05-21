/**
 27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de 
estreno, país o países de origen, géneros y calificación en IMBD.
- Todos los datos del objeto son obligatorios.
- Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
- Valida que el título no rebase los 100 caracteres.
- Valida que el director no rebase los 50 caracteres.
- Valida que el año de estreno sea un número entero de 4 dígitos.
- Valida que el país o paises sea introducidos en forma de arreglo.
- Valida que los géneros sean introducidos en forma de arreglo.
- Valida que los géneros introducidos esten dentro de los géneros aceptados*.
- Crea un método estático que devuelva los géneros aceptados*.
- Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
- Crea un método que devuelva toda la ficha técnica de la película.
- Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la 
ficha técnica de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, 
Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, 
Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
 */

//CONSTRUYENDO CLASE PELICULA

class Pelicula {
    //ya que recibirá un objeto de datos lo conveniente es hacer una destructuración // también recibe un objeto
    constructor({id,titulo,director,estreno,pais,generos,calificacion}){
        // cuando instanciamos creamos un atributo que es igual a lo que recibe el constructor
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;

        //valida en los atributos, para invocar los metodos hay que hacerlo en el constructor
        this.validatIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarPais(pais);
        this.validarGeneros(generos);
        this.validarCalificacion(calificacion);
    }
    //********************** VALIDACIONES GENERICAS **********************************/
    //funcion que valida cadenas
    validarCadena(propiedad,valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" está vacío`);
            if(typeof valor !== "string") return console.error(`${propiedad} "${valor}" ingresado NO es una cadena de Texto`);
            return true; // si estas dos se cumplen envia un true que todo está correcto
    }

    //Metodo para validar longitud de las cadenas de los titulos
    validarLongitudCadena(propiedad,valor,longitud){
        if(valor.length > longitud) return console.warn(`${propiedad} "${valor}" Excede el numero de caracteres permitidos ("${longitud}")`);
            return true; // si estas dos se cumplen envia un true que todo está correcto
    }

    //validar que sea un numero
    validarNumero(propiedad,valor){
        if(!valor) return console.error(`${propiedad} "${valor}" está vacío`);
        if(typeof valor !== 'number') return console.error(`${propiedad} "${valor} ingresado NO es un Número"`);
        return true; // si no se cumple esa validación entonces retorna true
    }

    //validar que un arreglo no vaya vacio 
    validarArreglo(propiedad,valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" está vacío`); // validamos que no vaya vacio
        if(!(valor instanceof Array)) return console.error(`${propiedad} "${valor} ingresado NO es un Arreglo"`); //validamos que sea un arreglo
        if(valor.length === 0) return console.error(`${propiedad} "${valor}" NO tiene Datos`); // validamos que contenga datos
        //validamos que lo que contenga el arreglo sean cadenas de texto
        for(let cadena of valor){
            //validamos en cada iteración que sea un string
            if(typeof cadena !== 'string') return console.error(`El valor ${cadena} NO es una cadena de Texto`);
        }
        //si todo se cumple entonces
        return true;
    }

    //atributo estatico de tipo get para tener la lista de los generos
    static get listaGeneros(){
        return [
            "Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime",
            "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", 
            "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", 
            "Sport", "Talk-Show", "Thriller", "War", "Western"
        ];
        
    }
    //metodo para ver los generos aceptados
    static generosAceptados(){
        // retornamos instanciando la clase y su metodo get de lista de generos aceptados uniendolos con una , y un espacio para separarlos
        return console.info(`los generos aceptados son ${Pelicula.listaGeneros.join(", ")}`);
    }

// **************************** VALIDACIONES MAS ESPECIFICAS ****************************************
    // validaciones //primero validamos el id IMDB que tenga lo que pide
    validatIMDB(id){
        //validamos que ningun campo este vacio
        if(this.validarCadena('IMDB id',id)){ // aca lo pasamos a modo de texto y la propiedad en sí osea la propiedad y el valor
            /**
             * ^ = No debe de haber nada antes
             * $ = No debe de haber nada después
             * {2} = En este ejemplo indica cuantos caracteres de la a-z deben cumplirse
             */
            if(!(/^([a-z]){2}([0-9]){7}$/.test(id))){ //generamos una expresión regular // valida a true y si da false entonces muestra el sms
                return console.error(`IMDB id "${id}" NO es válido, debe tener 9 caracteres las 2 primeras letras minuctulas, los restantes numeros`);
            }
        }
    }

    //validar el titulo
    validarTitulo(titulo){
        //validamos que ningun campo este vacio
        if(this.validarCadena('Titulo',titulo)){ // aca lo pasamos a modo de texto y la propiedad en sí osea la propiedad y el valor
            this.validarLongitudCadena('Titulo',titulo,100); // luego de que se validara que no fuera vacio entonces ya pasa a llamar al metodo
            //para validar la longitud del titulo en este caso le pasamos la propiedad, luego el valor, y luego la longitud con this porque estamos referenciando a una instancia

        }
    }

    //validar director
    validarDirector(director){
        //validamos que ningun campo este vacio
        if(this.validarCadena('Director',director)){ // aca lo pasamos a modo de texto y la propiedad en sí osea la propiedad y el valor
            this.validarLongitudCadena('Director',director,50); // luego de que se validara que no fuera vacio entonces ya pasa a llamar al metodo
            //para validar la longitud del titulo en este caso le pasamos la propiedad, luego el valor, y luego la longitud con this porque estamos referenciando a una instancia
        }
    }

    //validamos el año para que sea de 4 digitos
    validarEstreno(estreno){
        if(this.validarNumero("Año de Estreno",estreno));
        // de igual forma decimos que si no contiene el año nada antes y numeros del 0-9 que deben ser obligado 4 digitos y nada despues
        // entonces continua con la validacion
        if(!(/^([0-9]){4}$/.test(estreno))){
            return console.error(`El año de Estreno ${estreno} NO es valido debe ser un numero de 4 digitos`)
        }
    }

    //validar el pais que sea un arreglo
    validarPais(pais){
        this.validarArreglo("Pais",pais);
    }

    //validar que los generos sean los permitidos
    validarGeneros(generos){
        if(this.validarArreglo("Generos",generos)){//usamos el mismo metodo parar validar que sea un arreglo
            // en este caso recorremos los generos que el usuario ingreso
            for(let genero of generos){
                // vemos que genero  ya que el metodo listageneros es get se usa como una variable entonces decimos si lo que tiene
                // el genero del usuario está incluido dentro de los valores de la cadena, no necesita el this sino el nombre de la clase
                //si valida que están manda true sino manda false
                //condición si al ejecutar el includes es false entonces, esto es como si fuera  === false
                if(!Pelicula.listaGeneros.includes(genero)){
                    console.error(`Genero(s) ${generos.join(", ")} Incorrectos`);
                    //luego de eso lanzamos o mostramos el metodo estatico que contiene los generos que están permitidos
                    Pelicula.generosAceptados();
                }
            }
        } 
    }

    //validar calificacion
    validarCalificacion(calificacion){
        if(this.validarNumero("Calificacion",calificacion));
        //evaluar que sea un numero comprendido entre cero y diez
        return (calificacion < 0 || calificacion > 10) ? console.error("La calificacion debe ser entre 0 y 10")
        : this.calificacion = calificacion.toFixed(1); // si la calificación trae mas de 1 decimal entonces la recortamos a 1 decimal
    }

    //imprimir la ficha tecnica de una pelicula
    fichaTecnica(){
        console.log(
            `Ficha Tecnica\n
            IMDB Id: ${this.id}
            Titulo: ${this.titulo}
            Director: ${this.director}
            Estreno: ${this.estreno}
            Pais(es): ${this.pais}
            genero(s): ${this.generos}
            calificacion: ${this.calificacion}`
        );
    }
}
/*
//enviar el bojeto para la validación en la clase
const peli = new Pelicula({
    id: 'tt1234567',
    titulo: 'Titanic',
    director: 'Orlando',
    estreno: 2020,
    pais: ['Guatemala'],
    generos: ['Comedy','Sport'],
    calificacion: 7.889
});

peli.fichaTecnica();*/

//Formar un arreglo con tres peliculas y que mustre las fichas tecnicas de ellas, de manera automatica
const peliculas = [
    {
        id: 'tt7654321',
        titulo: 'Inception',
        director: 'Christopher Nolan',
        estreno: 2010,
        pais: ['USA', 'UK'],
        generos: ['Action', 'Sci-Fi'],
        calificacion: 8.8
    },
    {
        id: 'tt2345678',
        titulo: 'The Shawshank Redemption',
        director: 'Frank Darabont',
        estreno: 1994,
        pais: ['USA'],
        generos: ['Drama'],
        calificacion: 9.3
    },
    {
        id: 'tt3456789',
        titulo: 'The Godfather',
        director: 'Francis Ford Coppola',
        estreno: 1972,
        pais: ['USA'],
        generos: ['Crime', 'Drama'],
        calificacion: 9.2
    }
];

peliculas.forEach(elemento => new Pelicula(elemento).fichaTecnica());