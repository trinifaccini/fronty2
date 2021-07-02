/*
function pelear(jugadaUsuario, jugadaCompu, pUsuario, pCompu){

    console.log("INICIO PELEAR C " + pCompu);
    console.log("INICIO PELEAR U " + pUsuario);

    if(jugadaUsuario == jugadaCompu) alert("Empataste esta ronda 🤔");
        
    if(jugadaUsuario == 1){ // Si elegiste piedra..
    
        if(jugadaCompu == 2){
            alert("Perdiste esta ronda 😥")
            pCompu++;
        }
        else if(jugadaCompu == 3){
            alert("Ganaste esta ronda😁");
            pUsuario++;
        }
    }
    
    if(jugadaUsuario == 2){ // Si elegiste papel...

        if(jugadaCompu == 1){
            alert("Ganaste esta ronda 😁");
            pUsuario++;
        }
        else if(jugadaCompu == 3){
            alert("Perdiste esta ronda 😥");
            pCompu++;
        }
    }
    
    if(jugadaUsuario == 3){ // Si elegiste tijera...

        if(jugadaCompu == 1){
            alert("Perdiste esta ronda 😥");
            pCompu++;
        }
        else if(jugadaCompu == 2){
            alert("Ganaste esta ronda 😁");
            pUsuario++;
        }
    } 

    console.log("FIN PELEAR C " + pCompu);
    console.log("FIN PELEAR U " + pUsuario);
}
*/


function pedirJugadaUsuario(){

   return parseInt(prompt("Ingrese piedra:1, papel:2 o tijera:3"));
}


function generarJugadaCompu(){

    return Math.floor(Math.random()* 3 + 1);
}


//Esta funcion a retornar 1 si gano la jugada el usuario y -1 si gano la jugada la compu !
function pelear(jugadaUsuario, jugadaCompu){

    if(jugadaUsuario == jugadaCompu) alert("Empataste esta ronda 🤔");
        
    if(jugadaUsuario == 1){ // Si elegiste piedra..
    
        if(jugadaCompu == 2){
            alert("Perdiste esta ronda 😥")
            return -1;
        }
        if(jugadaCompu == 3){
            alert("Ganaste esta ronda😁");
            return 1;
        }
    }
    
    if(jugadaUsuario == 2){ // Si elegiste papel...

        if(jugadaCompu == 1){
            alert("Ganaste esta ronda 😁");
            return 1;
        }
        if(jugadaCompu == 3){
            alert("Perdiste esta ronda 😥");
            return -1;
        }
    }
    
    if(jugadaUsuario == 3){ // Si elegiste tijera...

        if(jugadaCompu == 1){
            alert("Perdiste esta ronda 😥");
            return -1;
        }
        if(jugadaCompu == 2){
            alert("Ganaste esta ronda 😁");
            return 1;
        }
    } 
}


function juego(){

    let jugadaUsuario = 0;
    let jugadaCompu = 0;

    let resultadoPelea = 0;

    let jugar = confirm("¿Desea jugar a piedra papel o tijera?");

    while(jugar == true){

        for(let i = 0; i < 3; i++){

            jugadaUsuario = pedirJugadaUsuario();
            jugadaCompu = generarJugadaCompu();

            resultadoPelea = pelear(jugadaUsuario, jugadaCompu);

            if(resultadoPelea == 1) puntosUsuario++;
    
            if(resultadoPelea == -1) puntosCompu++;

        }

        if(puntosUsuario > puntosCompu){
            alert("Has ganado la partida!");
        }
        else if(puntosUsuario < puntosCompu){
            alert("Has perdido la partida!");
        }
        else{
            alert("Han empatado la partida!");
        }

        jugar = confirm("¿Quiere jugar otra vez?");
    }
}


juego();





