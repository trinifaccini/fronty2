let arrayEntrada = [1,2,4,8];

//FORMA 1 usando for

let suma = 0;

for (let i = 0; i < arrayEntrada.length; i++){

    suma += arrayEntrada[i];
    console.log(suma);
}

// FORMA 2 --> utilizando el método reduce

let sumaArray = arrayEntrada.reduce(function(acum, numero){

    let resultado = acum + numero;
    
    console.log(resultado);
    return resultado;
});

// FORMA 3 --> creando un nuevo array con los valores de las sumas

let sumaElementos = arr => {

    let resul = [];
    resul[0] = arr[0];

    for (let i = 1; i < arr.length; i++) {
        resul.push(arr[i] + resul[i-1]); 
    }   

    return resul
}

let arr = [1, 2, 4, 8];
console.log(sumaElementos(arr));

//FORMA 4 --> usando el método map

let acumulador4 = 0;

let suma = arrayEntrada.map(function(num) {
    return acumulador += num;
})

//FORMA 5 --> usando el metodo forEach

//FORMA 6 --> usando el bucle for .. of

let acumulador6 = 0;

for (let elemento of arrayEntrada){

    console.log(elemento + acumulador6);
    acumulador6 = acumulador6 + elemento;
}