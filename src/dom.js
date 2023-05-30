// MANIPULACIÓN DEL DOM ###

// 1- Crear un botón en HTML y usar JavaScript para mostrar un mensaje cuando se hace clic. =====>

const myButton = document.getElementById("myBtn");
const demoElement = document.getElementById("demo1");

myButton.addEventListener("click", () => {
  const currentDate = new Date();
  demoElement.textContent = currentDate;
});

// 2- Cambiar el contenido de un elemento HTML mediante JavaScript. =====>

function changeContent() {
  let paragraph1 = document.getElementById("myParagraph1");
  paragraph1.innerHTML = "Gracias por hacer click";
}

// 3- Ocultar y mostrar elementos HTML utilizando JavaScript. =====>

function toggleVisibility() {
  let paragraph2 = document.getElementById("myParagraph2");
  if (paragraph2.style.display === "none") {
    paragraph2.style.display = "block";
  } else {
    paragraph2.style.display = "none";
  }
}

// 4 & 5- Crear un array de 10 nombres, y una función que imprime en pantalla una lista con los nombres del array de nombres. =====>

let arrayOfNames2 = ['John', 'Emma', 'Michael', 'Sophia', 'Daniel', 'Olivia', 'David', 'Isabella', 'Ethan', 'Ava'];
let fLen = arrayOfNames2.length;

let loopingArray = "<ul>";
for (let i = 0; i < fLen; i++) {
  loopingArray += "<li>" + arrayOfNames2[i] + "</li>";
}
loopingArray += "</ul>";

document.getElementById("demo3").innerHTML = loopingArray;

function printNames(namesArray) {
  let listHTML = '<ul>' + namesArray.map(name => `<li>${name}</li>`).join('') + '</ul>';
  document.getElementById('namesList').innerHTML = listHTML;
}


// 5 & 6- Crear un array de números, y una función que pinte en pantalla cuántos números tiene el array de números. =====>

// Crear un array de números
const arrayOfNumbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
document.getElementById("demo4").innerHTML = `- Array de números: [${arrayOfNumbers2}]`;
let size = arrayOfNumbers2.length;
document.getElementById("demo5").innerHTML = `- El array tiene ${size} números`;


// 7- Crea los nodos necesarios para imprimir un formulario. =====>

// Crear el formulario
const formElement = document.createElement('form');

// Crear un campo de entrada de texto para el nombre
const nameInputElement = document.createElement('input');
nameInputElement.type = 'text';
nameInputElement.placeholder = 'Ingresa tu nombre';
formElement.appendChild(nameInputElement);
formElement.appendChild(document.createElement('br')); // Salto de línea

// Crear un campo de entrada de correo electrónico
const emailInputElement = document.createElement('input');
emailInputElement.type = 'email';
emailInputElement.placeholder = 'Ingresa tu correo electrónico';
formElement.appendChild(emailInputElement);
formElement.appendChild(document.createElement('br')); // Salto de línea

// Crear un campo de selección de género
const genderSelectElement = document.createElement('select');
const genderOptions = ['Masculino', 'Femenino', 'Otro'];
genderOptions.forEach(optionText => {
  const optionElement = document.createElement('option');
  optionElement.textContent = optionText;
  genderSelectElement.appendChild(optionElement);
});
formElement.appendChild(genderSelectElement);
formElement.appendChild(document.createElement('br')); // Salto de línea

// Crear un botón de envío
const submitButtonElement = document.createElement('button');
submitButtonElement.type = 'submit';
submitButtonElement.textContent = 'Enviar';
formElement.appendChild(submitButtonElement);

// Agregar el formulario al documento
const containerElement = document.getElementById('formulario');
containerElement.appendChild(formElement);


// 8 & 9- Crea los nodos necesarios para imprimir una tabla, e imprime cada elemento del objeto dentro de la tabla que creaste anteriormente. =====>
const objectsArray = [
  {
    id: 1,
    nombre: "Roberto Sánchez",
    status: "Vivo",
    especie: "Humano",
    tipo: "",
    género: "Masculino"
  },
  {
    id: 2,
    nombre: "Ana Romero",
    status: "Viva",
    especie: "Humano",
    tipo: "",
    género: "Femenino"
  },
];

// Obtener la referencia del elemento contenedor de la tabla
const tableContainer = document.getElementById("table-container");

// Crear el elemento de la tabla
const table = document.createElement("table");

// Crear la fila de encabezado de la tabla
const headerRow = document.createElement("tr");
for (const key in objectsArray[0]) {
  const headerCell = document.createElement("th");
  headerCell.textContent = key.toUpperCase();
  headerRow.appendChild(headerCell);
}
table.appendChild(headerRow);

// Crear las filas de datos de la tabla
objectsArray.forEach((obj) => {
  const dataRow = document.createElement("tr");
  for (const key in obj) {
    const dataCell = document.createElement("td");
    dataCell.textContent = obj[key];
    dataRow.appendChild(dataCell);
  }
  table.appendChild(dataRow);
});

// Agregar la tabla al contenedor
tableContainer.appendChild(table);