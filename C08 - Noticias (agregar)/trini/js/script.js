const noticias = [
    
    {
        titulo:"Turismo de vacunas: 2.000 personas por día reciben su dosis en el aeropuerto de Miami",
        imgUrl: "https://www.infobae.com/new-resizer/H9B9uvmwpunxOo6DwuGGMoaVGiE=/265x149/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/YXOQB3X5SZ2HPD2SWP2HOCBDZA.jpg",
        descripcion: "Fácil y rápido son los dos adjetivos que más repitenlas personas que describen cómo es el proceso de vacunación en el aeropuerto internacional de Miami. En su mayoría son turistas internacionales quienes se inoculan al día en la clínica instalada en la terminal aérea.",
        fecha:"07/06/21",
        tipoNacional: true
    },
    
    {
        titulo:"El gran gesto por amor de Jennifer Lopez hacia Ben Affleck",
        imgUrl:"https://www.infobae.com/new-resizer/9qc1rervLRhJWJ5iTr0ODd_ctMM=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/MSQDSQCH7NDAFLLCXFS7IO2PFU.jpg",
        descripcion: "La cantante fue vista averiguando sobre escuelas enLos Ángeles, lo que hace suponer que podría mudarse con sus hijos allí para estar cerca del actor.",
        fecha:"02/06/21",
        tipoNacional: false
    },

    {
        titulo:"Cómo evitar que se empañen los anteojos al usar barbijo",
        imgUrl: "https://www.infobae.com/new-resizer/ORz7JmzOGrdIjerazIGIpwiqOHk=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/QVRO3YNJMNGNFP773UOWZYM3FU.jpg",
        descripcion: "Para quienes utilizan anteojos, la combinación del uso obligatorio de tapabocas desde el año pasado se volvió una complicación. Paso a paso para evitar que se empañen.",
        fecha:"01/06/21",
        tipoNacional: true
    },

    {
        titulo:"La UE aprobó el fondo de USD 21.000 millones para apoyar a las regiones más afectadas por la transición verde",
        imgUrl:"https://www.infobae.com/new-resizer/n515a-2ZZvJJgZ3EI6sfxWYm5Lg=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/UEEVG5ND43BTLP5RTK3V62NISM.jpg",
        descripcion: "El objetivo es ayudar a los países a emprender la transición ecológica en su camino hacia una economía libre de emisiones de gases de efecto invernadero a mitad de siglo.", 
        fecha:"04/06/21",
        tipoNacional: false
    },
    
    {
        titulo:"Maradona: cómo es la muestra fotográfica argentina que deslumbra a todos en Serbia",
        imgUrl:"https://www.infobae.com/new-resizer/mmsbZbq2RWQDDHGiP4MxaBbK6RQ=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/TM2UEM7JNZE4JH2SXGPPGPTTOQ.jpg",
        descripcion: "La exposición, que cuenta con postales icónicas de “El Diez” que capturaron los fotógrafos de la agencia de noticias Télam, es uno de los hitos del festival Mes de la Fotografía de Belgrado.",
        fecha:"07/06/21",
        tipoNacional: true
    },
];

let seccionNacional = document.querySelector(".nacional");
let seccionInternacional = document.querySelector(".internacional");

/* 
OPCION DONDE AGREGO EL TITULO DE LAS SECCIONES DESDE JS (habría que borrar los h2 que ya estan escritos en el HTML

let flagN = 0;
let flagI = 0;

function agregarNoticia2(noticia){

    let seccion;

    if(noticia.tipoNacional){
        
        if(flagN == 0){
            seccionNacional.innerHTML += "<h2> Nacionales </h2>";
            flagN++;
        }

        seccion = seccionNacional;
    }
    else{

        if(flagI == 0){
            seccionInternacional.innerHTML += "<h2> Internacionales </h2>";
            flagI++;
        }

        seccion = seccionInternacional;
    }
    
    const templateNoticia = `

    <article>
    <h4>${noticia.titulo}</h4>
    <img src = ${noticia.imgUrl}>
    <p>${noticia.descripcion}</p>
    <h6>${noticia.fecha}</h6>
    </article>
    `;
    
    seccion.innerHTML += templateNoticia;
}

for(let noticia of noticias){
    agregarNoticia(noticia);
}
*/

function agregarNoticia(noticia){

    let seccion;

    noticia.tipoNacional? (seccion = seccionNacional) : (seccion = seccionInternacional);
        
    const templateNoticia = `

    <article>
    <h4>${noticia.titulo}</h4>
    <img src = ${noticia.imgUrl}>
    <p>${noticia.descripcion}</p>
    <h6>${noticia.fecha}</h6>
    </article>
    `;
    
    seccion.innerHTML += templateNoticia;
}

noticias.forEach(noticia => {
    agregarNoticia(noticia);
});



function obtenerDatosDelUsuario() {
  
    let anioActual = 2021;
    let anioNacimiento = 0;
  
    datosPersona.nombre = prompt("Ingresa tu nombre");
    while(datosPersona.nombre == null || datosPersona.nombre == ""){
      console.log(datosPersona.nombre);
      datosPersona.nombre = prompt("Por favor, ingresa tu nombre");
    }
  
    anioNacimiento = prompt("Ingresa el año en que naciste");
    while(anioNacimiento < 1920 || anioNacimiento >= anioActual || isNaN(anioNacimiento)){
      anioNacimiento = prompt("Por favor, ingresa un año de nacimiento válido");
    }
  
    datosPersona.edad = (anioActual - anioNacimiento);
  
    datosPersona.ciudad = prompt("Ingresa la ciudad donde vives");
    while(datosPersona.ciudad == null || datosPersona.ciudad == ""){
      datosPersona.ciudad = prompt("Por favor, ingresa la ciudad en donde vives")
    }
  
    datosPersona.interesPorJs = confirm("Te inseresa Javascript?");
  }

