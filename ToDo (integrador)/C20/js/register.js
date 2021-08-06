window.addEventListener("load", function() {

    let formulario = document.querySelector("#formRegister");
    let inputFirstName = document.querySelector("#firstName");
    let inputLastName = document.querySelector("#lastName");
    let inputPassword = document.querySelector("#password");
    let inputRePassword = document.querySelector("#rePassword");
    let inputEmail = document.querySelector("#email");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        // Validar el formulario. Hey, valídenlo!
        
        // Si todos los datos son válidos...
        let datos = {
            firstName: inputFirstName.value,
            lastName: inputLastName.value,
            email: inputEmail.value,
            password: inputPassword.value
        }

        fetch("https://ctd-todo-api.herokuapp.com/v1/users", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(datos)
        })
        .then(function(response) {
            return response.json()
        })
        .then(function(token) {
            let usuarioSession = {
                elToken: token.jwt,
                email: inputEmail.value,
                firstName: inputFirstName.value
            }
            localStorage.setItem("usuario", JSON.stringify(usuarioSession))
            window.location.href = "lista-tareas.html"
            // formulario.submit()
        })

    })

})