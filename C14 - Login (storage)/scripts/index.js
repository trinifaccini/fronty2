// Esta es la base de datos de nuestros usuarios
const baseDeDatos = {
  usuarios: [
    {
      id: 1,
      name: "Steve Jobs",
      email: "steve@jobs.com",
      password: "Steve123",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "shanna@melissa.tv",
      password: "Ervin345",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "nathan@yesenia.net",
      password: "Floppy39876",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "julianne.oconner@kory.org",
      password: "MysuperPassword345",
    },
  ],
};

// ACTIVIDAD

// Paso a paso:

// 1) Al momento de que la persona inicia sesión, si las validaciones que ya tenemos implementadas
// han sido exitosas, deberemos almacenar la información del usuario en el LocalStorage.

window.addEventListener("load", function(){ 
  let formulario = document.querySelector("form");

  formulario.addEventListener("submit", function(event){
    
    //Prevenimos el envío del formulario 
    event.preventDefault();
    console.log("Se detuvo el envío de la informacion...");

    //Capturamos los elementos html que necesitamos
    let inputEmail = document.querySelector("#email-input");
    let inputPassword = document.querySelector("#password-input");


    //Validamos
    baseDeDatos.usuarios.forEach(function(element) {

      //Primero chequeamos que el email ingresado coincide con alguno de todos los que tenemos en la base de datos
      if(element.email == inputEmail.value) {

        //Si se dió esa coincidencia, chequeamos que la contraseña coincida también para almacenar 
        // su inicio de sesión en LocalStorage y para llevarlo a la página de incio
        if(element.password == inputPassword.value) {
          localStorage.setItem("email", element.email);
          formulario.submit();
        }
      }
    })
  })

})

/* 
TIPS:
  - Para lograr los objetivos de este ejercicio, deberás valerte de algunos eventos y métodos que vimos en
    las clases anteriores. Te invitamos a que revises los recursos en caso de que tengas dudas, ya que allí
    encontrarás todas las respuestas que necesitas para completar la actividad.

  - Recuerda que puedes seleccionar y manipular los elementos del archivo index.html, usando los
    recursos que Javascript te ofrece para ello. Además, en el archivo styles.css tiene algunas clases y 
    estilos predefinidos para ayudarte a completar la actividad.

  - Al momento de guardar información del usuario en el navegador, recuerda que debemos almacenar solo la 
    información necesaria, y EN NINGUN CASO DEBEMOS GUARDAR LA CONTRASEÑA. Por ello, deberás seleccionar y
    separar la información que tienes que almacenar, a partir del objeto que contiene la información del 
    usuario.

   ¡Manos a la obra!
*/
