/*
EJERCICIO HECHO EN CLASE
let listaDeImagenes = document.querySelectorAll("img");

listaDeImagenes.forEach(function(imagen) {
    let url = prompt("Inserta la URL de una imagen");
    imagen.setAttribute("src", url)
})
*/

/* ETAPA 2 FORMA 1 */

let listaLinks = document.querySelectorAll('.rutas-img');
let listaDeImagenes = document.querySelectorAll("img");

for(let i = 0; i < listaLinks.length; i++){

    let url = prompt("Inserta la URL de una imagen");
    listaLinks[i].setAttribute("href", url);
    listaLinks[i].setAttribute("target","blank");
    listaDeImagenes[i].setAttribute("src", url);
}

/* ETAPA 2 FORMA 2 (habria que borrar todo lo que esta dentro del div con clase contenedor antes*/

let contenedor = document.querySelector(".contenedor");

for(let i = 0; i < 3; i++){

    let div = document.createElement("div");
    div.setAttribute("class", "tarjeta");

    let link = document.createElement("a");
    link.setAttribute("class", "rutas-img");

    let img = document.createElement("img");

    let url = prompt("Inserta la URL de una imagen");
    link.setAttribute("href", url);
    link.setAttribute("target","blank");
    img.setAttribute("src", url);

    link.appendChild(img);
    div.appendChild(link);

    contenedor.appendChild(div);
}


/* ETAPA 3 (creo) (acá también habria que borrar todo lo que esta dentro del div con clase contenedor antes*/
function agregarImagen(url){
    
    const templateImagen = `

        <div class = "tarjeta">
            <a class = "rutas-img" href = ${url} target = "blank"><img src = ${url}></a>
        </div>
    `;

    return templateImagen;
}

let contenedor = document.querySelector(".contenedor");

for(let i = 0; i < 3; i++){

    let url = prompt("Inserta la URL de una imagen");
    contenedor.innerHTML += agregarImagen(url);
}


