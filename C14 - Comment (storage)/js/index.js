/*
REQUERIMIENTOS
- utilizar el formulario para captar el texto ingresado 
- implementar el evento "submit", utilizarlo para guardar el comentario en un array
- cada vez que se agrega un nuevo comentario renderizarlo en una etiqueta "p" (sacar del html los hardcodeados y hacerlo dinamico)
- constantemente guardar la informacion en localStorage, si se recarga la pagina deberian mantenerse los comentarios
*/


window.addEventListener("load", function() {

    // Capturamos los elementos html que necesitamos
    let formulario = document.querySelector("form");
    let inputComentario = document.querySelector("#comentario");
    let cajaComentarios = document.querySelector(".comentarios");


    // Obtenemos lo que hay en localStorage en formato ARRAY...
    // formato ARRAY porque lo obtenemos ya con JSON.parse
    let loQueHayEnLocal = JSON.parse(localStorage.getItem("comentarios"));


    //Chequeo la diferencia entre ambos tipos de datos (NO ES NECESARIO, ES UNA PRUEBA)
    console.log("LocalStorage: " + localStorage.getItem("comentarios") + "\nTipo de dato: "  + typeof localStorage.getItem("comentarios"));
    console.log(loQueHayEnLocal);
    console.log("Tipo de dato: "  + typeof loQueHayEnLocal)


    // Si no existe el item "comentarios" en localStorage, entonces crea el item y allí dentro un array vacio...
    // Esto va a suceder solamente al inicio, donde todavia no existe ningun comentario
    if(loQueHayEnLocal == null) {
        loQueHayEnLocal = [];
    }


    //Agrego los comentarios existentes (si los hay) al html
    loQueHayEnLocal.forEach(function(element) {
        cajaComentarios.innerHTML += `<p>${element}</p>`;
    })

    
    formulario.addEventListener("submit", function(event) {
        

        //Prevengo que se envie el formulario
        event.preventDefault();


        // Al array de comentarios, le vamos a sumar lo nuevo que el usuario insertó...
        loQueHayEnLocal.push(inputComentario.value);


        // Ahora, con el array de comentarios ACTUALIZADO, vamos a volver a guardarlo en el item "comentarios" pero en formato JSON (texto)...
        localStorage.setItem("comentarios", JSON.stringify(loQueHayEnLocal));


        // Imprimimos en la div de comentarios un nuevo párrafo con el valor que acaba de ingresar el usuario...
        // No lo agrega si el usuario no ingreso nada (no se agrega algo vacío)
        if(inputComentario.value.length >= 1)
            cajaComentarios.innerHTML += `<p>${inputComentario.value}</p>`;
        

        // Magia...
        formulario.reset();
    })
})