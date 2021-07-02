let body = document.querySelector('body');

/* OPCION 1: cambiar el tema a dark con un confirm*/

/*
let cambiarTema = confirm('¿Desea cambiar al tema oscuro?');

if(cambiarTema){
    body.classList.add('dark');
}
*/

let botonTema = document.querySelector('#tema');
botonTema.addEventListener("click", function(){
    body.classList.toggle('dark');
});

