let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

function qs(elemento){
  return document.querySelector(elemento);
}

function obtenerDatosDelUsuario() {
  
  let anioActual = new Date().getFullYear();

  datosPersona.nombre = prompt("Ingresa tu nombre");

  datosPersona.edad = anioActual - parseInt(prompt("Ingresa el año en que naciste"));
  
  datosPersona.ciudad = prompt("Ingresa la ciudad donde vives");

  datosPersona.interesPorJs = confirm("Te inseresa Javascript?");
}


function renderizarDatosUsuario() {

  obtenerDatosDelUsuario();

  qs("#nombre").innerText = datosPersona.nombre;
  qs("#edad").innerText = datosPersona.edad;
  qs("#ciudad").innerText = datosPersona.ciudad;
  qs("#javascript").innerText = (datosPersona.interesPorJs ? "Si" : "No");
}


const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919828.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919851.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];


function agregarMateria(materia){
      
  const templateMateria = `

    <div class = "caja">
    <img src = ${materia.imgUrl} alt = ${materia.lenguajes}>
    <p class = "lenguajes">Lenguajes: ${materia.lenguajes}</p>
    <p class = "bimestre">Bimestre: ${materia.bimestre}</p>
    </div>
    `
  ;
  
  qs("#fila").innerHTML += templateMateria;
}


/* USO UN FLAG PARA QUE LAS MATERIAS SE AGREGUEN UNA SOLA VEZ */
var flagMateria = 0;

function recorrerListadoYRenderizarTarjetas() {

  if(flagMateria == 0){
    listado.forEach(materia => {
      agregarMateria(materia);
    });

    flagMateria++;
  }
}


function mostrarYOcultarDescripcionCompleta() {
 
  let contenedor = qs(".sobre-mi");
  
  contenedor.classList.toggle("sobre-mi-completo");
}