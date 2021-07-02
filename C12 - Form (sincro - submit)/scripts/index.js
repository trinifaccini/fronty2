const formRegistro = document.querySelector("#formRegistro");
const passwordInput = document.querySelector("#password-input");
const togglePassword = document.querySelector("#togglePassword");
const repasswordInput = document.querySelector("#repassword-input");

togglePassword.addEventListener("click", function() {

  if(passwordInput.getAttribute("type") == "password") {
    passwordInput.setAttribute("type", "text")
  } else {
    passwordInput.setAttribute("type", "password")
  }
})

formRegistro.addEventListener("submit", (event) => {

  event.preventDefault();
  console.log("Hemos detenido el envío del formulario");


  // 1. Obtenemos los datos ingresados en el input de password
  let passwordValue = passwordInput.value;

  // 2. Obtenemos los datos ingresados en el input de repassword
  let repasswordValue = repasswordInput.value;

  // 3. Obtenemos el valor del input checkbox
  let tycValue = document.querySelector("#tyc-input").checked;

  // 4. Si todo esta correcto, lo enviamos a la página de inicio
  if(passwordValue == repasswordValue && tycValue){
    formRegistro.submit();
  }

});
