// OBJECTS ###

// Crear un objeto carro haciendo la abstracción de sus atributos y un objeto anidado. =====>

let coche = {
  marca: "Cupra",
  modelo: "Born",
  tipo: "Eléctrico",
  año: 2022,
  color: "Rojo",
  puertas: 5,
  caracteristicas: {
    potencia: "150 kW",
    aceleracion: "0-100 km/h en 7.3 segundos",
    autonomia: "hasta 420 km",
    capacidad: "5 plazas"
  }
};

console.log(coche);

let resultado3 = "<b>Marca:</b> " + coche.marca + "<br>" +
  "<b>Modelo:</b> " + coche.modelo + "<br>" +
  "<b>Tipo: </b>" + coche.tipo + "<br>" +
  "<b>Año: </b>" + coche.año + "<br>" +
  "<b>Color: </b>" + coche.color + "<br>" +
  "<b>Puertas: </b>" + coche.puertas + "<br>" +
  "<b>Características:</b><br>" +
  "- Potencia: " + coche.caracteristicas.potencia + "<br>" +
  "- Aceleración: " + coche.caracteristicas.aceleracion + "<br>" +
  "- Autonomía: " + coche.caracteristicas.autonomia + "<br>" +
  "- Capacidad: " + coche.caracteristicas.capacidad;

document.getElementById("resultado3").innerHTML = resultado3;


// Función que devuelva la marca del carro.

function obtenerMarca(coche) {
  return coche.marca;
}

let marca = obtenerMarca(coche);
console.log(marca);

let resultado4 = document.getElementById("resultado4");
resultado4.textContent = `- La marca del coche es: ${marca}`;

// Función que devuelva la cantidad de puertas que tiene el carro.

function obtenerCantidadPuertas(coche) {
  return coche.puertas;
}

let cantidadPuertas = obtenerCantidadPuertas(coche);
console.log(cantidadPuertas);

let resultado5 = document.getElementById("resultado5");
resultado5.textContent = `- El coche tiene ${cantidadPuertas} puertas.`;

// Función que devuelva un atributo del objeto anidado.

function obtenerAtributoCoche(coche, atributo) {
  return coche.caracteristicas[atributo];
}

let atributo = "potencia";
let valor = obtenerAtributoCoche(coche, atributo);
console.log(valor);

let resultado6 = document.getElementById("resultado6");
resultado6.textContent = `- El atributo "${atributo}" tiene el valor "${valor}".`;

