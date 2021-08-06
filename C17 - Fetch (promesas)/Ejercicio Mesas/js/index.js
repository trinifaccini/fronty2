/* -------------------------------- CONSIGNA 1 -------------------------------- */
/*  Aquí deben desarrollar una función que muestre en pantalla: la foto, el nombre completo del usuario y
    su email. Esto debe estar basado en la info que nos llega desde la API e insertarse en el HTML. */

function renderizarDatosUsuario(datos) {

    /*  Recordemos que datos es un objeto
        Este obejto datos tiene un atributo llamado results
        results,a su vez, es un ARRAY de objetos que corresponden a usuarios
        En este caso tenemos UN SOLO USUARIO por eso no usamos un bucle y simplemente accedemos a la 
        primera posicion del array results que corresponde al primer y unico usuario */

    let usuario1 = datos.results[0];

    /*  Con este console.log() veremos los atributos que tiene el objeto usuario */
    console.log(usuario1);

    let tarjeta = document.querySelector(".tarjeta");
    tarjeta.innerHTML = `
        <img src= "${usuario1.picture.medium}" alt = "imagen de usuario">
        <h3>${usuario1.name.title} ${usuario1.name.first} ${usuario1.name.last} </h3>
        <small> ${usuario1.email} </small>
    `;

}

function pedirUsuarioRandom(){

    /*  Aquí realizamos un la consulta de la promesa, esperando su respuesta asíncrona */
    fetch('https://randomuser.me/api/')
    .then(response => {

        /*  El metodo .json() se queda solo con el BODY de la RESPONSE y ademas lo devuelve ya PARSEADO
            Recordar que el metodo .json() devuelve una promesa, por eso para acceder a lo que nos devuelve 
            hacemos el siguiente .then */
        return response.json();
    })
    .then(data => {

        /*  data === response.json()
            El console.log() de la linea siguiente lo dejo simplemente para ver exactamente 
            lo que es response.json() */
        console.log(data);

        /*  Veremos entonces, con ese console.log() que data es es un objeto, el cual enviaremos como parametro a 
            la funcion renderizarDatosUsuario() para poder manipularlo desde ahí */
        renderizarDatosUsuario(data);
    });
    /* --> aca iria el catch */
}




/* --------------------------- CONSIGNA 2 --------------------------- */
/*  Aqui pueden ir por el punto extra de utilizar el boton que se encuentra comentado en el HTML
    Pueden descomentar el código del index.html y usar ese boton para ejecutar un nuevo pedido a la API, 
    sin necesidad de recargar la página.
    Es criterio del equipo QUÉ bloque del código debe contenerse dentro de una función para poder ser ejecutada 
    cada vez que se escuche un click. */

let boton = document.querySelector("#random");

boton.addEventListener("click", function(){

    pedirUsuarioRandom();

})