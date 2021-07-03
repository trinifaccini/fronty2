const jsonData = `
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
`;

//Recorrer el JSON e insertar en el listado del html los nombres de los miembros
function recorrerMiembros() {

  //Capturo la lista donde pondre a los miembros 
  let listadoMiembros = document.querySelector("#miembros");

  //Parseo la informacion que se encuentra en la variable jsonData para ahora tener objeto literal que corresponde a un array de objetos
  let jsonDataParseada = JSON.parse(jsonData);

  //Recorro ese array de objetos para poder insertarlos a la lsita
  jsonDataParseada.members.forEach(function(element) {
    listadoMiembros.innerHTML += `<li>${element.name}</li>`;
  })
};

recorrerMiembros();