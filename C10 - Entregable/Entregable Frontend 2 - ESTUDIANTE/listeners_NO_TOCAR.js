const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
verMasBtn.addEventListener("mouseenter", mostrarYOcultarDescripcionCompleta);
verMasBtn.addEventListener("mouseleave", mostrarYOcultarDescripcionCompleta);
