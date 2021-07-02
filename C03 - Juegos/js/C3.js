/*CAMBIE TODAS LAS CONSTANTES A MAYUSCULA PORQUE ES UNA BUENA PRACTICA*/

/*GENERAR UN NUMERO RANDOM CON LIMITE INFERIOR Y LIMITE SUPERIOR

Generar números aleatorios en Javascript entre un mínimo y un máximo

Si deseamos obtener un número aleatorio en otro rango lo podemos conseguir con un poco de matemáticas y la clase Math 
para el cálculo del valor random y su redondeo. Para ilustrarlo vamos a hacer una función que devuelve un número aleatorio comprendido en un 
intervalo. El intervalo lo recibe como parámetro con dos variables, una para el límite por la parte inferior 
y otra para la el límite por la parte superior.

Math.floor((Math.random() * (max - min + 1)) + min);

*/

/*
1. “Tragamonedas”
Crear una función que reciba un número que será la cantidad de aciertos del
usuario sobre el total de casillas disponibles. 

!! La cantidad de aciertos puede ir de 0 (no acertó ninguna) a 10 (acertó todas), por eso en la línea 46 creo una variable que se llama aciertos
con un Math.random para que genere un numero que vaya de 0 a 10.

La función deberá devolver el monto del premio, el cual es proporcional al número de aciertos.

!!Si la cantidad total de casillas es 10 y el premio total que se puede obtener es 2500, signfica que por cada casilla acertada 
el premio es $250. Este calculo lo hago en la linea 38.

!!Para saber lo que el usuario ganó, multimplico la cantidad de aciertos recibia por parametro por premioCasilla
*/

const PREMIOTOTAL = 2500;
const CASILLA = 10;

function calcular(aciertos){

    let premioCasilla = PREMIOTOTAL/CASILLA;

    return premioCasilla * aciertos;

}

//En este caso el minimo de aciertos es 0 y el maximo de aciertos es 10 (uso la constante CASILLA para reperesntar ese 10)
let aciertos = Math.floor(Math.random()* (CASILLA - 0 + 1) + 0);

console.log("==== EJERCICIO 1 ====");
console.log("Aciertos generados de manera random: " + aciertos);
console.log("Premio ganado: " + calcular(aciertos));

/*
2. “Loteria”
Crear un programa que consista en una apuesta donde el usuario tenga que
ingresar un objeto o lugar con el que soñó ese día, para que luego lo muestre
en pantalla y se calcule aleatoriamente un resultado numérico con 4 posibles
casos de premios que pueda ganar: si el resultado es 0, gana $1000, si es 1,
gana $10000; si es 2 gana $10000, y si es 3 gana $100000.
*/

function resultadoLoteria() {

    let rtaUsuario = prompt("Ingrese un objeto o lugar con el que hayas soñado hoy");

    alert("Has soñado: " + rtaUsuario);

    let resultado = Math.floor(Math.random()* 4);

    console.log("Resultado numerico generado de manera aleatoria: " + resultado);

    switch (resultado){

        case 0: 
            alert("Ganaste $1000");
            break;

        case 1:
            alert("Ganaste $10000");
            break;
        
        case 2:
            alert("Ganaste $100000");
            break;

        case 3:
            alert("Ganaste $1000000");
            break;
    }

}

console.log("==== EJERCICIO 2 ====");
resultadoLoteria();

/*
3. “Ruleta”
Crear una función que sortee un numero random ganador, luego haga un ciclo
desde 1 hasta el final de la ruleta, imprimiendo por consola el número de esa
iteración. Pero en el caso del número que sea el ganador, imprimir por consola
“Numero ganador:” seguido del número.
*/

const FINALRULETA = 25;

function tirarRuleta(){

    let resultado = Math.floor(Math.random()* FINALRULETA + 1);
    console.log("Resultado numerico generado de manera aleatoria: " + resultado);

    for(let i = 1; i <= FINALRULETA; i++){

        console.log(i);

        if(i == resultado) console.log("Numero ganador: " + i);
    }
}

console.log("==== EJERCICIO 3 ====");
tirarRuleta();



// QUIERO IMPRIMIR HOLA 5 VECES

for(int i = 0; i < 5; i++){

    MediaKeySystemAccess.
}