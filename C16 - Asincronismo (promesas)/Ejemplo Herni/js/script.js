let unaPromesa = new Promise(function (resolve, reject) {
  let suma = 1 + 9;
  if (suma === 2) {
    resolve("Hey! Está suma da 2 :)");
  } else {
    reject(false);
  }
});

unaPromesa.then(function (respuesta) {
  console.log(respuesta);
});
