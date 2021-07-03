window.addEventListener("load", function(){

    // 2) Al mensaje de bienvenida que ya teníamos implementado, deberemos agregarle el nombre de la
    // persona y un botón de "Cerrar Sesión".

    //HACERLO DE FORMA DINAMICA

    // 3) Una vez iniciada la sesión, la misma se deberá mantener en ese estado para el caso de que la persona
    // recargue la página. Para ello, deberás validar si existe información del usuario al momento en
    // que se produce la carga de la página, y en base a dicha condción decidir que elementos mostrar. 

    //HACERLO

    // 4) Para el caso de que la persona haga click en el botón "Cerrar Sesión", se deberá eliminar
    // la información del usuario, mostrar un mensaje indicando que se ha cerrado la sesión, y recargar
    // la página para mostrar nuevamente el formulario de login.

    let btnCerrarSesion = document.querySelector("#cerrarSesion");

    btnCerrarSesion.addEventListener("click", function() {
        localStorage.removeItem("email");
        console.log("Buuuuuuuuuu! Te vamos a extrañar...");
        window.location.href = "index.html"
    })


})


