window.addEventListener("load", function(){

    let formHogwarts = document.querySelector("#formHogwarts");
    
    formHogwarts.addEventListener("submit", (event) => {


        //No permito que el formulario se envíe automáticamente porque tengo que validar
        event.preventDefault();
        console.log("Hemos detenido el envío del formulario");


        //Declaro un objeto para los errores, NO un array
        let errores = {};


        //Capturo los elementos que necesito
        let inputNombre = document.querySelector("#nombre");
        let errorNombre = document.querySelector("#errorNombre");
        let inputPass = document.querySelector("#pass");
        let errorPass = document.querySelector("#errorPass");
        let inputRePass = document.querySelector("#repass");
        let errorRePass = document.querySelector("#errorRePass");


        //Vacío los elementos del HTML que imprimen los errores para que no se repitan
        errorNombre.innerText = "";
        errorPass.innerText = "";
        errorRePass.innerText = "";


        //Valido el campo nombre
        if(inputNombre.value.length <= 3){
            //1: this.alert("Mínimo 4 caracteres");
            //La siguiente es la forma para agregar atributos a un objeto
            errores.nombre = "Mínimo 4 caracteres";
            errorNombre.innerText = errores.nombre;
        }


        //Valido el campo contraseña
        //Paso 1: Que al menos tenga un caracter
        if(inputPass.value.length < 1){
            errores.password = "No ha ingresado la contraseña";
            errorPass.innerText = errores.password;
        }

        console.log(inputPass.value);
        console.log(typeof inputPass.value);
        console.log(inputRePass.value);
        console.log(typeof inputRePass.value);

        //Paso 2: Que las contraseñas coincidan 

        if(inputPass.value.length >= 1 && inputPass.value != inputRePass.value){
            errores.repassword = "Las contraseñas no coinciden";
            errorRePass.innerText = errores.repassword;
        }


        console.log(errores);
        //Luego de validar, comprobar si hay o no errores. Si no los hay, puede ingresar
        //Objet.keys(errores) me devuelve un array con los nombre de las PROPIEDADES --keys-- del objeto errores
        
        if(Object.keys(errores).length == 0){
            formHogwarts.submit();
        }
    })
})
