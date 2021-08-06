window.addEventListener("load", function() {
    let recuperoUsuario = JSON.parse(localStorage.getItem("usuario"));
    console.log(recuperoUsuario);
    fetch("https://ctd-todo-api.herokuapp.com/v1/tasks", {
        headers: {
            "Authorization": recuperoUsuario.elToken
        }
    })
    .then(function(response) {
        return response.json()
    })
    .then(function(noTengoIdea) {
        console.log(noTengoIdea)
    })
    .catch(function(error) {
        console.error(error)
    })

})